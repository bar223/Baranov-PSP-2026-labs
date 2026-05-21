import { SectionCardComponent } from "../../components/section-card/index.js";
import { SectionPage } from "../section/index.js";
import { api } from "../../services/api.js";

export class MainPage {
    constructor(parent, navigate) {
        this.parent = parent;
        this.navigate = navigate;
    }

    renderCards(data) {
        const track = document.getElementById('carousel-track');
        track.innerHTML = '';
        if (data.length === 0) {
            track.innerHTML = '<p class="text-muted p-3">Ничего не найдено</p>';
            return;
        }
        const card = new SectionCardComponent();
        data.forEach(item => track.insertAdjacentHTML('beforeend', card.getHTML(item)));
    }

    async render() {
        this.parent.innerHTML = `
            <div class="container mt-4 mb-5">
                <div class="news-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="m-0" style="color: #a51c30;">Наши секции</h3>
                        <div class="d-flex gap-2 flex-wrap">
                            <input type="text" id="filter-input" class="form-control" placeholder="Поиск по названию...">
                            <select id="filter-available" class="form-select" style="width:auto;">
                                <option value="">Все</option>
                                <option value="true">Есть места</option>
                            </select>
                            <button class="btn btn-success fw-bold" id="btn-add">+ Добавить</button>
                        </div>
                    </div>

                    <div class="carousel-wrapper position-relative" style="display: flex; align-items: center; gap: 10px;">
                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-prev" style="min-width: 45px; height: 45px; z-index: 5;">&#10094;</button>

                        <div id="carousel-track" style="display: flex; overflow-x: auto; gap: 20px; padding: 15px 5px; flex-grow: 1; cursor: grab; scroll-behavior: auto;">
                            <p class="text-muted p-3">Загрузка...</p>
                        </div>

                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-next" style="min-width: 45px; height: 45px; z-index: 5;">&#10095;</button>
                    </div>
                </div>
            </div>`;

        // Первоначальная загрузка данных с API
        try {
            const sections = await api.getSections();
            this.renderCards(sections);
        } catch (e) {
            document.getElementById('carousel-track').innerHTML =
                `<p class="text-danger p-3">Ошибка загрузки: ${e.message}. Запущен ли сервер ЛР4?</p>`;
        }

        const track = document.getElementById('carousel-track');
        const cardWidthWithGap = 320;

        // --- 1. ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ---
        track.onclick = async (e) => {
            if (e.target.classList.contains('action-info')) {
                new SectionPage(this.parent, +e.target.dataset.id, this.navigate).render();
            } else if (e.target.classList.contains('action-edit')) {
                this.navigate('form', { id: +e.target.dataset.id });
            } else if (e.target.classList.contains('action-delete')) {
                try {
                    await api.deleteSection(+e.target.dataset.id);
                    const filters = this._currentFilters();
                    this.renderCards(await api.getSections(filters));
                } catch (e) {
                    alert('Ошибка удаления: ' + e.message);
                }
            }
        };

        // --- 2. БЕСКОНЕЧНЫЙ СКРОЛЛ ---
        track.addEventListener('scroll', () => {
            if (track.scrollWidth <= track.clientWidth) return;
            if (track.scrollLeft === 0) {
                track.style.scrollBehavior = 'auto';
                track.prepend(track.lastElementChild);
                track.scrollLeft += cardWidthWithGap;
            } else if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
                track.style.scrollBehavior = 'auto';
                track.appendChild(track.firstElementChild);
                track.scrollLeft -= cardWidthWithGap;
            }
        });

        // --- 3. КНОПКИ ВПРАВО / ВЛЕВО ---
        document.getElementById('btn-next').onclick = () => {
            track.style.scrollBehavior = 'smooth';
            track.scrollLeft += cardWidthWithGap;
        };
        document.getElementById('btn-prev').onclick = () => {
            track.style.scrollBehavior = 'smooth';
            track.scrollLeft -= cardWidthWithGap;
        };

        // --- 4. ПЕРЕТАСКИВАНИЕ ---
        let isDown = false, startX, scrollLeft;
        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.style.cursor = 'grabbing';
            track.style.scrollBehavior = 'auto';
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });
        window.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX);
        });

        // --- 5. ФИЛЬТРАЦИЯ ЧЕРЕЗ XHR ---
        const applyFilters = async () => {
            try {
                this.renderCards(await api.getSections(this._currentFilters()));
            } catch (e) {
                alert('Ошибка фильтрации: ' + e.message);
            }
        };

        document.getElementById('filter-input').oninput = applyFilters;
        document.getElementById('filter-available').onchange = applyFilters;

        // --- 6. КНОПКА ДОБАВИТЬ ---
        document.getElementById('btn-add').onclick = () => this.navigate('form', {});
    }

    _currentFilters() {
        const title = document.getElementById('filter-input')?.value || '';
        const available = document.getElementById('filter-available')?.value || '';
        return { title, available };
    }
}
