# ЛР 6 — Спортивные секции МГТУ. fetch + Vite bundle

Шестая лабораторная работа. Замена XMLHttpRequest на fetch, сборка фронтенда через Vite и раздача его из сервера ЛР 4.

Баранов Е.Ю., группа ИУ5-45Б

## Содержание

- [Цель](#цель)
- [Технологии](#технологии)
- [Что изменилось относительно ЛР 5](#что-изменилось-относительно-лр-5)
- [Архитектура](#архитектура)
- [fetch-клиент](#fetch-клиент)
- [Форма сохранения](#форма-сохранения)
- [Сборка Vite](#сборка-vite)
- [Запуск](#запуск)

## Цель

- Заменить XHR-запросы из ЛР 5 на `fetch` с `async/await`
- Собрать фронтенд через Vite и добавить bundle в проект сервера ЛР 4
- Убедиться, что CORS-расширение больше не нужно (фронт и API на одном порту)

## Технологии

- JavaScript ES6+ (ES-модули)
- fetch API + async/await
- Bootstrap 5 (npm-пакет)
- Three.js (npm-пакет)
- Vite 5

## Что изменилось относительно ЛР 5

| | ЛР 5 | ЛР 6 |
|---|---|---|
| HTTP-клиент | `XMLHttpRequest` + callbacks | `fetch` + `async/await` |
| URL запросов | `http://localhost:3000/api/...` | `/api/...` (относительный) |
| Запуск фронта | `npx serve` (порт 3001) | `npm run dev` (Vite, порт 5173) |
| CORS | нужно расширение | не нужно (proxy в dev / same origin в prod) |
| Bootstrap | `<script>` тег в HTML | `import 'bootstrap'` (npm) |
| Three.js | importmap → CDN | `import * as THREE from 'three'` (npm) |
| Форма | отображает поля (без сохранения) | сохраняет через POST/PUT |

## Архитектура

```
├── services/
│   └── api.js          # fetch-обёртки: GET, POST, PUT, DELETE
├── pages/
│   ├── main/           # список секций с фильтрацией
│   ├── section/        # детальная страница + 3D-модель
│   ├── section-form/   # форма добавления и редактирования
│   └── calculator/
├── components/
│   ├── three-viewer/   # Three.js GLB-просмотрщик
│   └── ...
├── vite.config.js      # outDir: ./public, proxy /api → :3000
└── package.json        # scripts: dev / build / preview
```

## fetch-клиент

В `services/api.js` функция `xhr()` заменена на `async request()`. `fetch` сам возвращает Promise — не нужно оборачивать вручную:

**Было (ЛР 5 — XHR):**
```js
const BASE_URL = 'http://localhost:3000/api/sections'; // абсолютный URL

function xhr(method, url, data) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url);
        req.onload = () => resolve(JSON.parse(req.responseText));
        req.onerror = () => reject(new Error('Network error'));
        req.send(data ? JSON.stringify(data) : null);
    });
}
```

**Стало (ЛР 6 — fetch):**
```js
const BASE_URL = '/api/sections'; // относительный URL

async function request(method, url, data) {
    const options = { method };
    if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
}

export const api = {
    getSections(filters = {})  { return request('GET',    `${BASE_URL}?${params}`); },
    getSectionById(id)         { return request('GET',    `${BASE_URL}/${id}`); },
    createSection(data)        { return request('POST',   BASE_URL, data); },
    updateSection(id, data)    { return request('PUT',    `${BASE_URL}/${id}`, data); },
    deleteSection(id)          { return request('DELETE', `${BASE_URL}/${id}`); },
};
```

URL стал относительным (`/api/sections`) — нет привязки к порту. В production фронт и API на одном порту 3000, и запросы идут на тот же origin без CORS.

## Форма сохранения

В ЛР 5 форма только отображала поля. В ЛР 6 добавлена кнопка и обработчик `onsubmit`:

```js
const isEdit = this.id !== undefined; // есть id → PUT, нет → POST

document.getElementById('section-form').onsubmit = async (e) => {
    e.preventDefault(); // не перезагружать страницу

    const payload = {
        title:  document.getElementById('f-title').value.trim(),
        spots:  parseInt(document.getElementById('f-spots').value, 10),
        // ...остальные поля
    };

    if (isEdit) {
        await api.updateSection(this.id, payload); // PUT /api/sections/:id
    } else {
        await api.createSection(payload);           // POST /api/sections
    }

    this.navigate('main'); // вернуться на главную
};
```

## Сборка Vite

### Установка

```bash
npm install   # устанавливает vite, bootstrap, three из package.json
```

### Конфигурация `vite.config.js`

```js
export default defineConfig({
    build: {
        outDir: './public',  // куда положить результат
        emptyOutDir: true,   // очищать перед каждой сборкой
    },
    server: {
        proxy: {
            '/api': 'http://localhost:3000', // dev: /api → сервер ЛР 4
        },
    },
});
```

### Запуск сборки

```bash
npm run build
```

Vite читает `index.html`, обходит все `import`-ы (компоненты, Bootstrap, Three.js) и собирает всё в два файла:

```
public/
├── index.html
└── assets/
    ├── index-xxxx.js   # весь JS: компоненты + Bootstrap + Three.js
    └── index-xxxx.css  # весь CSS: стили + Bootstrap
```

### Раздача из Express (lab_4)

Папка `public/` скопирована в `lab_4/public/`. Одна строка в `src/index.js`:

```js
app.use(express.static(path.join(__dirname, '../public')));
```

Теперь `GET /` → отдаёт `public/index.html`, `GET /api/sections` → идёт в роутер API.

## Запуск

**Production (рекомендуется для показа):**
```bash
cd ../lab_4
npm run start
# открыть http://localhost:3000/ — один сервер, CORS не нужен
```

**Разработка:**
```bash
# Терминал 1
cd ../lab_4 && npm run start

# Терминал 2
npm install
npm run dev
# открыть http://localhost:5173/
```
