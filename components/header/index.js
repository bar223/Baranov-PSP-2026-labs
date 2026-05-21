export class HeaderComponent {
    constructor(parent) { this.parent = parent; }

    getHTML() {
        return `
            <header class="mobile-header">
                <label for="mobile-menu-toggle" class="burger">☰</label>
                <div class="mobile-logo"><img src="assets/bmstu_logo.png" class="mobile-logo-img"></div>
                <div class="mobile-theme"><label for="theme-switch">🌓</label></div>
            </header>

            <div class="mobile-menu" style="background-color: #000;">
                <ul style="list-style: none; padding: 20px 0;">
                    <li><button class="nav-btn-custom" data-page="main">Главная</button></li>
                    <li><button class="nav-btn-custom" data-page="main">Секции</button></li>
                    <li><button class="nav-btn-custom" data-page="calc">Калькулятор</button></li>
                    <li><button class="nav-btn-custom" data-page="main">Запись</button></li>
                </ul>
            </div>

            <div class="hero-menu d-none d-md-flex justify-content-between align-items-center px-4 pt-3" style="position: absolute; width: 100%; z-index: 1000;">
                <img src="assets/bmstu_logo.png" class="logo" style="height: 60px; cursor: pointer;" data-page="main">
                <div class="nav-buttons d-flex gap-4">
                    <button class="btn text-white fw-bold" data-page="main">Секции</button>
                    <button class="btn text-white fw-bold" data-page="calc">Калькулятор</button>
                    <button class="btn text-white fw-bold" data-page="main">Запись</button>
                </div>
                <div class="theme-switch-hero"><label for="theme-switch" style="color:white; cursor:pointer; font-size:1.5rem;">🌓</label></div>
            </div>
        `;
    }

    render(onPageChange) {
        this.parent.innerHTML = this.getHTML();
        this.parent.querySelectorAll('[data-page]').forEach(el => {
            el.onclick = () => {
                onPageChange(el.dataset.page);
                document.getElementById('mobile-menu-toggle').checked = false;
            };
        });
    }
}
