import { SectionCardComponent } from "../../components/section-card/index.js";
import { SectionPage } from "../section/index.js";
import { store } from "../../store.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    renderCards(data) {
        const track = document.getElementById('carousel-track');
        track.innerHTML = '';
        const cardGenerator = new SectionCardComponent();

        // Вставляем все карточки как HTML-текст
        data.forEach(item => {
            track.insertAdjacentHTML('beforeend', cardGenerator.getHTML(item));
        });
    }

    render() {
        this.parent.innerHTML = `
            <div class="container mt-4 mb-5">
                <div class="news-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="m-0" style="color: #a51c30;">Наши секции</h3>
                        <div class="d-flex gap-2">
                            <input type="text" id="filter-input" class="form-control" placeholder="Поиск...">
                            <button class="btn btn-success fw-bold" id="btn-add">+ Случайная</button>
                        </div>
                    </div>

                    <div class="carousel-wrapper position-relative" style="display: flex; align-items: center; gap: 10px;">
                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-prev" style="min-width: 45px; height: 45px; z-index: 5;">&#10094;</button>

                        <div id="carousel-track" style="display: flex; overflow-x: auto; gap: 20px; padding: 15px 5px; flex-grow: 1; cursor: grab; scroll-behavior: auto;">
                            </div>

                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-next" style="min-width: 45px; height: 45px; z-index: 5;">&#10095;</button>
                    </div>
                </div>
            </div>`;

        this.renderCards(store.data);
        const track = document.getElementById('carousel-track');
        const cardWidthWithGap = 320; // 300px ширина карточки + 20px gap

        // --- 1. ДЕЛЕГИРОВАНИЕ СОБЫТИЙ (Слушаем клики по кнопкам карточек) ---
        track.onclick = (e) => {
            // Если кликнули по кнопке "Подробнее"
            if (e.target.classList.contains('action-info')) {
                new SectionPage(this.parent, e.target.dataset.id).render();
            }
            // Если кликнули по кнопке "Удалить"
            else if (e.target.classList.contains('action-delete')) {
                store.deleteCard(e.target.dataset.id);
                this.renderCards(store.data);
            }
        };

        // --- 2. ЛОГИКА БЕСКОНЕЧНОГО СКРОЛЛА (Магия DOM) ---
        track.addEventListener('scroll', () => {
            // Если карточек слишком мало, не делаем цикл
            if (track.scrollWidth <= track.clientWidth) return;

            // Дошли до левого края: берем последний элемент и ставим его вперед
            if (track.scrollLeft === 0) {
                track.style.scrollBehavior = 'auto'; // Отключаем плавность для незаметного прыжка
                track.prepend(track.lastElementChild);
                track.scrollLeft += cardWidthWithGap; // Компенсируем сдвиг
            }
            // Дошли до правого края: берем первый элемент и ставим его в конец
            else if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
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

        // --- 4. ПЕРЕТАСКИВАНИЕ МЫШКОЙ (Drag-to-Scroll) ---
        let isDown = false, startX, scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.style.cursor = 'grabbing';
            track.style.scrollBehavior = 'auto';
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            track.scrollLeft = scrollLeft - (x - startX); // Тянем карточки за мышкой
        });

        // --- 5. ОСТАЛЬНЫЕ КНОПКИ ---
        document.getElementById('btn-add').onclick = () => {
            store.addCard();
            this.renderCards(store.data);
        };
        document.getElementById('filter-input').oninput = (e) => {
            const filtered = store.data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
            this.renderCards(filtered);
        };
    }
}
