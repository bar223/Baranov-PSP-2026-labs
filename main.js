import { HeaderComponent } from "./components/header/index.js";
import { HeroSliderComponent } from "./components/hero-slider/index.js";
import { MainPage } from "./pages/main/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";

class App {
    constructor() {
        this.root = document.getElementById('root');
        this.headerContainer = document.getElementById('header-container');
        this.sliderContainer = document.getElementById('slider-container');
    }

    renderPage(pageName) {
        this.root.innerHTML = ''; // Очищаем только контентную область
        if (pageName === 'main') {
            new MainPage(this.root).render();
        } else if (pageName === 'calc') {
            new CalculatorPage(this.root).render();
        }
    }

    init() {
        // 1. Рендерим шапку
        const header = new HeaderComponent(this.headerContainer);
        header.render((page) => this.renderPage(page));

        // 2. Рендерим слайдер (ОН ТУТ ОДИН РАЗ)
        const slider = new HeroSliderComponent(this.sliderContainer);
        slider.render();

        // 3. Открываем стартовую страницу
        this.renderPage('main');
    }
}

new App().init();
