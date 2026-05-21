export class SectionInfoComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="news-card" style="flex-direction: row; display: flex; flex-wrap: wrap;">
                    <img src="${data.src}" alt="${data.title}" style="max-width: 400px; height: auto; object-fit: cover;">
                    <div class="news-content" style="flex: 1; padding: 20px;">
                        <h2 style="color: #a51c30; margin-bottom: 15px;">${data.title}</h2>
                        <p style="font-size: 1.1rem;">${data.text}</p>

                        <div class="alert alert-success mt-4 shadow-sm" role="alert">
                            <h4 class="alert-heading">Открыт набор!</h4>
                            <p>В секцию <strong>${data.title}</strong> сейчас можно записаться. Ждем студентов всех курсов.</p>
                            <hr>
                            <p class="mb-0">Для записи обратитесь на кафедру физвоспитания.</p>
                        </div>
                    </div>
                </div>
            `
        );
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}
