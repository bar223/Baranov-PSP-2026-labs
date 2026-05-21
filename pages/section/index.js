import { MainPage } from "../main/index.js";
import { ThreeViewerComponent } from "../../components/three-viewer/index.js";
import { api } from "../../services/api.js";

export class SectionPage {
    constructor(parent, id, navigate) {
        this.parent = parent;
        this.id = id;
        this.navigate = navigate;
    }

    async render() {
        this.parent.innerHTML = `<div class="container mt-4"><p class="text-muted">Загрузка...</p></div>`;

        let data;
        try {
            data = await api.getSectionById(this.id);
        } catch (e) {
            this.parent.innerHTML = `<div class="container mt-4"><p class="text-danger">Ошибка: ${e.message}</p></div>`;
            return;
        }

        const isAvailable = data.spots > 0;
        const toastColor = isAvailable ? 'success' : 'danger';
        const toastMessage = isAvailable
            ? `В группе "${data.title}" ещё есть ${data.spots} свободных мест. Успейте записаться!`
            : `К сожалению, набор в группу "${data.title}" сейчас закрыт.`;

        this.parent.innerHTML = `
            <div class="container mt-4 mb-5 p-4 bg-white rounded shadow-sm position-relative">
                <button class="btn btn-outline-secondary mb-4" id="btn-back">← Назад к списку</button>
                <div class="row">
                    <div class="col-lg-6">
                        <img src="${data.src}" class="img-fluid rounded mb-3 shadow-sm">
                        <h2 style="color: #a51c30;">${data.title}</h2>
                        <p class="fs-5">${data.text}</p>
                    </div>
                    <div class="col-lg-6">
                        <h4 class="text-center mb-3">Инвентарь (3D)</h4>
                        <div id="3d-model-container" style="width: 100%; height: 400px; background: #f8f9fa; border-radius: 10px; border: 1px solid #dee2e6;"></div>
                    </div>
                </div>

                <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
                    <div id="liveToast" class="toast shadow-lg border-0" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-${toastColor} text-white">
                            <strong class="me-auto">Система записи</strong>
                            <small>Только что</small>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                        </div>
                        <div class="toast-body fs-6">${toastMessage}</div>
                    </div>
                </div>
            </div>`;

        document.getElementById('btn-back').onclick = () => new MainPage(this.parent, this.navigate).render();

        const viewer = new ThreeViewerComponent(
            document.getElementById('3d-model-container'),
            data.modelPath || 'models/sport.glb'
        );
        viewer.render();

        const toast = new bootstrap.Toast(document.getElementById('liveToast'), { delay: 20000 });
        toast.show();
    }
}
