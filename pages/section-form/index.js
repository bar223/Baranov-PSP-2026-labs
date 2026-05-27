import { api } from "../../services/api.js";

export class SectionFormPage {
    constructor(parent, id, navigate) {
        this.parent = parent;
        this.id = id;       // undefined → режим добавления, число → режим редактирования
        this.navigate = navigate;
    }

    async render() {
        const isEdit = this.id !== undefined;
        const heading = isEdit ? 'Редактирование секции' : 'Добавление секции';

        this.parent.innerHTML = `
            <div class="container mt-4 mb-5" style="max-width: 640px;">
                <button class="btn btn-outline-secondary mb-4" id="btn-back">← Назад к списку</button>
                <div class="p-4 bg-white rounded shadow-sm">
                    <h3 style="color: #a51c30;" class="mb-4">${heading}</h3>
                    <div id="form-loading" class="text-muted mb-3" style="display:${isEdit ? 'block' : 'none'}">Загрузка данных...</div>
                    <form id="section-form" novalidate>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Название секции</label>
                            <input type="text" id="f-title" class="form-control" placeholder="Например: Плавание">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Описание</label>
                            <textarea id="f-text" class="form-control" rows="3" placeholder="Краткое описание секции"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Свободных мест</label>
                            <input type="number" id="f-spots" class="form-control" placeholder="0" min="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Путь к изображению</label>
                            <input type="text" id="f-src" class="form-control" placeholder="assets/7613.jpg">
                        </div>
                        <div class="mb-4">
                            <label class="form-label fw-semibold">Путь к 3D-модели</label>
                            <input type="text" id="f-modelpath" class="form-control" placeholder="models/sport.glb">
                        </div>

                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-danger fw-bold" id="btn-save">
                                ${isEdit ? 'Сохранить изменения' : 'Добавить секцию'}
                            </button>
                            <div id="form-error" class="text-danger align-self-center" style="display:none;"></div>
                        </div>
                    </form>
                </div>
            </div>`;

        document.getElementById('btn-back').onclick = () => this.navigate('main');

        document.getElementById('section-form').onsubmit = async (e) => {
            e.preventDefault();
            const errorEl = document.getElementById('form-error');
            const btn = document.getElementById('btn-save');

            const payload = {
                title:     document.getElementById('f-title').value.trim(),
                text:      document.getElementById('f-text').value.trim(),
                spots:     parseInt(document.getElementById('f-spots').value, 10),
                src:       document.getElementById('f-src').value.trim(),
                modelPath: document.getElementById('f-modelpath').value.trim(),
            };

            if (!payload.title) {
                errorEl.textContent = 'Название обязательно';
                errorEl.style.display = 'block';
                return;
            }
            if (isNaN(payload.spots) || payload.spots < 0) {
                errorEl.textContent = 'Места — целое неотрицательное число';
                errorEl.style.display = 'block';
                return;
            }

            btn.disabled = true;
            errorEl.style.display = 'none';
            try {
                if (isEdit) {
                    await api.updateSection(this.id, payload);
                } else {
                    await api.createSection(payload);
                }
                this.navigate('main');
            } catch (err) {
                errorEl.textContent = 'Ошибка сохранения: ' + err.message;
                errorEl.style.display = 'block';
                btn.disabled = false;
            }
        };

        if (isEdit) {
            try {
                const data = await api.getSectionById(this.id);
                document.getElementById('form-loading').style.display = 'none';
                document.getElementById('f-title').value     = data.title     || '';
                document.getElementById('f-text').value      = data.text      || '';
                document.getElementById('f-spots').value     = data.spots     ?? '';
                document.getElementById('f-src').value       = data.src       || '';
                document.getElementById('f-modelpath').value = data.modelPath || '';
            } catch (e) {
                document.getElementById('form-loading').textContent = 'Ошибка загрузки: ' + e.message;
            }
        }
    }
}
