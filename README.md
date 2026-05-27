# ЛР 5 — Сайт «Спортивные секции МГТУ». XHR-запросы к API

Пятая лабораторная работа. Подключение фронтенда из ЛР 3 к API из ЛР 4 через XMLHttpRequest.

Баранов Е.Ю., группа ИУ5-45Б

## Содержание

- [Цель](#цель)
- [Технологии](#технологии)
- [Что изменилось относительно ЛР 3](#что-изменилось-относительно-лр-3)
- [Архитектура](#архитектура)
- [XHR-клиент](#xhr-клиент)
- [CORS](#cors)
- [Запуск](#запуск)

## Цель

Заменить статические данные из `store.js` на XHR-запросы к бэкенду. Познакомиться с CORS-политикой браузера и способами её обхода.

## Технологии

- JavaScript ES6+ (ES-модули)
- XMLHttpRequest
- Bootstrap 5
- Three.js
- CORS Unblock (расширение Chrome)

## Что изменилось относительно ЛР 3

| | ЛР 3 | ЛР 5 |
|---|---|---|
| Источник данных | `store.js` в памяти | API сервера (ЛР 4) через XHR |
| Фильтрация | `.filter()` в браузере | `?title=...&available=true` на сервер |
| Удаление | из массива в памяти | `DELETE /api/sections/:id` |
| Кнопка «+» | случайная карточка | переход на страницу формы |
| Страница формы | отсутствует | форма с полями (без сохранения) |

**ЛР 3 — фильтр в браузере:**
```js
const filtered = store.data.filter(i =>
    i.title.toLowerCase().includes(value.toLowerCase())
);
```

**ЛР 5 — фильтр на сервере:**
```js
const sections = await api.getSections({ title: value, available: 'true' });
// отправляет: GET /api/sections?title=плав&available=true
```

## Архитектура

```
├── services/
│   └── api.js          # XHR-обёртки для всех запросов к API
├── pages/
│   ├── main/           # Загрузка и фильтрация через XHR
│   ├── section/        # Данные секции через XHR
│   ├── section-form/   # Страница добавления/редактирования
│   └── calculator/     # Без изменений
└── components/         # Карточки с кнопкой «Редактировать»
```

## XHR-клиент

Весь код для работы с API сосредоточен в `services/api.js`. Функция `xhr()` оборачивает `XMLHttpRequest` в Promise чтобы использовать `await`:

```js
const BASE_URL = 'http://localhost:3000/api/sections';

function xhr(method, url, data) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url);
        if (data) req.setRequestHeader('Content-Type', 'application/json');
        req.onload = () => {
            if (req.status >= 200 && req.status < 300) resolve(JSON.parse(req.responseText));
            else reject(new Error(`HTTP ${req.status}`));
        };
        req.onerror = () => reject(new Error('Network error'));
        req.send(data ? JSON.stringify(data) : null);
    });
}

export const api = {
    getSections(filters = {})  { return xhr('GET',    `${BASE_URL}?${params}`); },
    getSectionById(id)         { return xhr('GET',    `${BASE_URL}/${id}`); },
    deleteSection(id)          { return xhr('DELETE', `${BASE_URL}/${id}`); },
};
```

Использование в компоненте страницы:

```js
// Загрузка при открытии
const sections = await api.getSections();
this.renderCards(sections);

// Удаление по кнопке
await api.deleteSection(id);
this.renderCards(await api.getSections(this._currentFilters()));
```

## CORS

Браузер блокирует запросы с одного порта на другой (`localhost:3001` → `localhost:3000`) — это политика Same-Origin. При загрузке данных в DevTools видна ошибка:

```
Access to XMLHttpRequest at 'http://localhost:3000/...' from origin
'http://localhost:3001' has been blocked by CORS policy
```

Для обхода используется расширение [CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino). Расширение добавляет заголовок `Access-Control-Allow-Origin: *` к ответам сервера на стороне браузера.

> В ЛР 6 эта проблема решена радикально: фронтенд и API работают на одном порту.

## Запуск

Требуется запущенный сервер из ЛР 4:

```bash
# Терминал 1 — API (ЛР 4)
cd ../lab_4
npm run start

# Терминал 2 — фронтенд (ЛР 5)
npm install
npx serve .
```

Открыть адрес из вывода `serve` (обычно `http://localhost:3001`) в Chrome с включённым CORS Unblock.
