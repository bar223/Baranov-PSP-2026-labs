# ЛР 3 — Сайт «Спортивные секции МГТУ». SPA на Node.js

Третья лабораторная работа. Переход от статического сайта к Single Page Application с компонентной архитектурой.

Баранов Е.Ю., группа ИУ5-45Б

## Содержание

- [Цель](#цель)
- [Технологии](#технологии)
- [Архитектура](#архитектура)
- [Возможности](#возможности)
- [Доп задание — Бесконечная карусель](#доп-задание--бесконечная-карусель)
- [Запуск](#запуск)
- [Домашнее задание](#домашнее-задание)

## Цель

Реструктурировать проект по принципам SPA: разбить на компоненты и страницы, организовать клиентский роутинг, подключить Bootstrap и Three.js.

## Технологии

- JavaScript ES6+ (ES-модули)
- Node.js + npm (только для управления зависимостями)
- Bootstrap 5
- Three.js (3D-просмотр инвентаря)

## Архитектура

```
├── components/
│   ├── header/        # Шапка с навигацией и переключателем темы
│   ├── hero-slider/   # Слайдер на главной странице
│   ├── section-card/  # Карточка секции
│   ├── section-info/  # Детальная информация о секции
│   └── three-viewer/  # 3D-просмотрщик GLB-моделей
├── pages/
│   ├── main/          # Главная страница с каруселью
│   ├── section/       # Страница секции с 3D и Toast
│   └── calculator/    # Калькулятор
├── store.js           # Данные секций в памяти браузера
└── main.js            # Точка входа, клиентский роутер
```

Данные хранятся в `store.js` как JS-объект — никакого сервера не нужно:

```js
export const store = {
    data: [
        { id: 1, title: "Плавание", spots: 12, modelPath: "models/swimming.glb", ... },
        { id: 2, title: "Волейбол", spots: 0,  modelPath: "models/volleyball.glb", ... },
    ],
    addCard()      { /* добавляет случайную секцию */ },
    deleteCard(id) { this.data = this.data.filter(item => item.id != id); }
};
```

## Возможности

### Клиентский роутинг

Навигация без перезагрузки страницы. `main.js` отвечает за переключение между страницами:

```js
renderPage(pageName) {
    this.root.innerHTML = '';
    if (pageName === 'main') new MainPage(this.root).render();
    else if (pageName === 'calc') new CalculatorPage(this.root).render();
}
```

### Фильтрация карточек

Фильтрация происходит в браузере — данные из `store.data` фильтруются через `.filter()`:

```js
document.getElementById('filter-input').oninput = (e) => {
    const filtered = store.data.filter(i =>
        i.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.renderCards(filtered);
};
```

### 3D-модель на странице секции

Каждой секции соответствует своя GLB-модель инвентаря. Компонент `ThreeViewerComponent` загружает модель через `GLTFLoader` и добавляет `OrbitControls` для управления мышью:

```js
const loader = new GLTFLoader();
loader.load(this.modelPath, (gltf) => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    model.position.sub(box.getCenter(new THREE.Vector3()));
    scene.add(model);
});
const controls = new OrbitControls(camera, renderer.domElement);
```

### Bootstrap Toast

При открытии страницы секции появляется уведомление с количеством свободных мест:

```js
const toast = new bootstrap.Toast(toastElement, { delay: 20000 });
toast.show();
```

## Доп задание — Бесконечная карусель

Карусель реализована вручную на CSS Flexbox и JavaScript без сторонних плагинов. Поддерживает три режима взаимодействия.

### Бесконечный скролл

При достижении края трека крайняя карточка переставляется на противоположный конец — визуально карусель не заканчивается:

```js
track.addEventListener('scroll', () => {
    if (track.scrollWidth <= track.clientWidth) return;

    if (track.scrollLeft === 0) {
        // Дошли до левого края — берём последнюю карточку и ставим вперёд
        track.style.scrollBehavior = 'auto';
        track.prepend(track.lastElementChild);
        track.scrollLeft += cardWidthWithGap; // компенсируем сдвиг
    } else if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        // Дошли до правого края — берём первую карточку и ставим в конец
        track.style.scrollBehavior = 'auto';
        track.appendChild(track.firstElementChild);
        track.scrollLeft -= cardWidthWithGap;
    }
});
```

### Кнопки «‹» и «›»

```js
document.getElementById('btn-next').onclick = () => {
    track.style.scrollBehavior = 'smooth';
    track.scrollLeft += cardWidthWithGap;
};
```

### Drag-to-Scroll (перетаскивание мышью)

```js
let isDown = false, startX, scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});
track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX);
});
window.addEventListener('mouseup', () => { isDown = false; });
```

## Запуск

```bash
npm install
npx serve .
```

Открыть `http://localhost:3000` в браузере.

---

## Домашнее задание

Две задачи по варианту, внедрённые в SPA как страница **«Статистика»** (кнопка в шапке).

### Требования к коду

| Требование | Реализация |
|---|---|
| Цикл с постусловием (не по счётчику) | `do { ... } while (index < spotsArray.length)` |
| Строка | `attendanceRecord` — строка из `'1'` и `'0'` |
| Объект | Объект секции `{ id, title, spots, src, modelPath }` |
| Коллекция (массив) | `store.data` — массив секций; `spotsArray` — производный |

### Задание 1 (N_1_4) — Статистика свободных мест

Оригинальная задача: сумма и произведение элементов числового массива.
Адаптация: суммарное количество свободных мест и произведение ненулевых значений по всем секциям.

```js
function getSectionSpotsStats(sections) {
    const spotsArray = sections.map(section => section.spots);
    let totalSpots = 0, spotsProduct = 1, index = 0;

    do {
        totalSpots += spotsArray[index];
        if (spotsArray[index] > 0) spotsProduct *= spotsArray[index];
        index++;
    } while (index < spotsArray.length);

    return { totalSpots, spotsProduct, sectionsCount: sections.length };
}
```

### Задание 2 (N_2_3) — Наибольшая серия посещений

Оригинальная задача: длина наибольшей последовательности единиц в бинарной строке.
Адаптация: пользователь вводит журнал тренировок (`1` — пришёл, `0` — пропустил), функция находит самую длинную серию подряд идущих занятий.

```js
function getLongestTrainingStreak(attendanceRecord) {
    let longestStreak = 0, currentStreak = 0;

    for (let i = 0; i < attendanceRecord.length; i++) {
        if (attendanceRecord[i] === '1') {
            currentStreak++;
            if (currentStreak > longestStreak) longestStreak = currentStreak;
        } else {
            currentStreak = 0;
        }
    }

    return longestStreak;
}
```

### Часть 2 — 3D-модель на странице секции

На странице «Подробнее» рядом с фотографией выводится интерактивная 3D-модель инвентаря через `GLTFLoader` + `OrbitControls`. Каждой секции соответствует своя модель (`modelPath` в данных `store.js`).
