import { HeaderComponent } from "./components/header/index.js";
import { HeroSliderComponent } from "./components/hero-slider/index.js";
import { MainPage } from "./pages/main/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";
import { SectionFormPage } from "./pages/section-form/index.js";

class App {
    constructor() {
        this.root = document.getElementById('root');
        this.headerContainer = document.getElementById('header-container');
        this.sliderContainer = document.getElementById('slider-container');
        this.navigate = (page, params = {}) => this.renderPage(page, params);
    }

    renderPage(pageName, params = {}) {
        this.root.innerHTML = '';
        if (pageName === 'main') {
            new MainPage(this.root, this.navigate).render();
        } else if (pageName === 'calc') {
            new CalculatorPage(this.root).render();
        } else if (pageName === 'form') {
            new SectionFormPage(this.root, params.id, this.navigate).render();
        }
    }

    init() {
        const header = new HeaderComponent(this.headerContainer);
        header.render((page, params) => this.renderPage(page, params));

        const slider = new HeroSliderComponent(this.sliderContainer);
        slider.render();

        this.renderPage('main');
    }
}

new App().init();
