import { HeaderComponent } from "./components/header/index.js";
import { HeroSliderComponent } from "./components/hero-slider/index.js";
import { MainPage } from "./pages/main/index.js";
import { SectionPage } from "./pages/section/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";
import { SectionFormPage } from "./pages/section-form/index.js";

class App {
    constructor() {
        this.root = document.getElementById('root');
        this.headerContainer = document.getElementById('header-container');
        this.sliderContainer = document.getElementById('slider-container');
        this._skipHashChange = false;

        this.navigate = (page, params = {}) => {
            this._skipHashChange = true;
            this._setHash(page, params);
            this.renderPage(page, params);
        };
    }

    _setHash(page, params = {}) {
        if (page === 'main') location.hash = '';
        else if (page === 'section') location.hash = `section/${params.id}`;
        else if (page === 'form' && params.id) location.hash = `form/${params.id}`;
        else if (page === 'form') location.hash = 'form';
        else if (page === 'calc') location.hash = 'calc';
    }

    parseHash() {
        const hash = location.hash.slice(1);
        if (!hash || hash === 'main') return { page: 'main', params: {} };
        if (hash === 'calc') return { page: 'calc', params: {} };
        if (hash === 'form') return { page: 'form', params: {} };
        const sectionMatch = hash.match(/^section\/(\d+)$/);
        if (sectionMatch) return { page: 'section', params: { id: +sectionMatch[1] } };
        const formMatch = hash.match(/^form\/(\d+)$/);
        if (formMatch) return { page: 'form', params: { id: +formMatch[1] } };
        return { page: 'main', params: {} };
    }

    renderPage(pageName, params = {}) {
        this.root.innerHTML = '';
        if (pageName === 'main') {
            new MainPage(this.root, this.navigate).render();
        } else if (pageName === 'section') {
            new SectionPage(this.root, params.id, this.navigate).render();
        } else if (pageName === 'calc') {
            new CalculatorPage(this.root).render();
        } else if (pageName === 'form') {
            new SectionFormPage(this.root, params.id, this.navigate).render();
        }
    }

    init() {
        const header = new HeaderComponent(this.headerContainer);
        header.render((page, params) => this.navigate(page, params));

        const slider = new HeroSliderComponent(this.sliderContainer);
        slider.render();

        window.addEventListener('hashchange', () => {
            if (this._skipHashChange) {
                this._skipHashChange = false;
                return;
            }
            const { page, params } = this.parseHash();
            this.renderPage(page, params);
        });

        const { page, params } = this.parseHash();
        this.renderPage(page, params);
    }
}

new App().init();
