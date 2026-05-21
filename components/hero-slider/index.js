export class HeroSliderComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div class="hero-slider">
                <div class="slides-container">
                    <div class="slide" data-slide="1">
                        <img src="assets/7613.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Открыт набор в секцию плавания</h2>
                            <p>С 1 сентября стартует набор в группы начальной подготовки.</p>
                        </div>
                    </div>
                    <div class="slide" data-slide="2">
                        <img src="assets/86490.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Соревнования по волейболу</h2>
                            <p>15 апреля состоится турнир между факультетами.</p>
                        </div>
                    </div>
                    <div class="slide" data-slide="3">
                        <img src="assets/2149552285.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Новый тренажёрный зал</h2>
                            <p>В главном корпусе открылся современный тренажёрный зал.</p>
                        </div>
                    </div>
                </div>
                <div class="slider-nav">
                    <label for="hero1"></label>
                    <label for="hero2"></label>
                    <label for="hero3"></label>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.innerHTML = this.getHTML();
    }
}
