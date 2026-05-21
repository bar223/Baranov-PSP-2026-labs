export class SectionCardComponent {
    // Теперь getHTML просто возвращает текст (строку), он не привязывает события напрямую
    getHTML(data) {
        return `
            <article class="news-card shadow-sm d-flex flex-column bg-white"
                     style="min-width: 300px; max-width: 300px; flex-shrink: 0; border-radius: 10px; user-select: none;">

                <img src="${data.src}" draggable="false" alt="${data.title}"
                     style="height: 200px; object-fit: cover; width: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px; pointer-events: none;">

                <div class="news-content d-flex flex-column flex-grow-1 p-3">
                    <h4>${data.title}</h4>
                    <p class="flex-grow-1 text-muted" style="font-size: 0.9rem;">${data.text}</p>
                    <div class="d-flex gap-2 mt-auto pt-3">
                        <button class="btn btn-primary flex-grow-1 action-info" data-id="${data.id}">Подробнее</button>
                        <button class="btn btn-outline-danger action-delete" data-id="${data.id}">Удалить</button>
                    </div>
                </div>
            </article>
        `;
    }
}
