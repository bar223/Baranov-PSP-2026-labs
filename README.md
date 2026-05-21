# ЛР 6 — Спортивные секции МГТУ. fetch + Vite bundle

Шестая лабораторная работа. Замена XMLHttpRequest на fetch, сборка фронтенда через Vite и раздача его из сервера ЛР4.

## Цель

- Заменить XHR-запросы из ЛР5 на `fetch` с `async/await`
- Собрать фронтенд через Vite и добавить bundle в проект сервера ЛР4
- Убедиться, что CORS-расширение больше не нужно (фронт и API на одном порту)

## Технологии

- JavaScript ES6+ (ES-модули)
- fetch API + async/await
- Bootstrap 5
- Three.js
- Vite 5

## Что изменилось относительно ЛР5

| | ЛР5 | ЛР6 |
|---|---|---|
| HTTP-клиент | `XMLHttpRequest` + callbacks | `fetch` + `async/await` |
| URL запросов | `http://localhost:3000/api/...` | `/api/...` (относительный) |
| Запуск фронта | `npx serve` (порт 3001) | `npm run dev` (Vite, порт 5173) |
| CORS | нужно расширение | не нужно (proxy в dev / same origin в prod) |
| Bootstrap | CDN-скрипт в HTML | `import 'bootstrap'` (npm) |
| Three.js | importmap → CDN | `import * as THREE from 'three'` (npm) |

## Архитектура

```
services/
└── api.js          # fetch-обёртки (GET, DELETE)
pages/
├── main/           # список секций с фильтрацией
├── section/        # детальная страница + 3D-модель
├── section-form/   # форма редактирования
└── calculator/
components/
├── three-viewer/   # Three.js GLB-просмотрщик
└── ...
vite.config.js      # outDir: ./public, proxy /api → :3000
```

## Запуск (разработка)

```bash
# Терминал 1 — API (ЛР4)
cd ../lab_4
npm run start

# Терминал 2 — фронтенд (ЛР6)
npm install
npm run dev
```

Открыть `http://localhost:5173/` — CORS Unblock не нужен (Vite проксирует `/api` на порт 3000).

## Сборка и production

```bash
npm run build   # генерирует папку public/
```

Папка `public/` копируется в `lab_4/public/`. Сервер ЛР4 раздаёт её как статику — фронт и API на одном порту 3000.

```bash
cd ../lab_4
npm run start
# открыть http://localhost:3000/
```

## CORS

В dev-режиме Vite проксирует запросы `/api/*` → `http://localhost:3000`, поэтому браузер не видит cross-origin запроса.

В production сборке фронт раздаётся с того же `localhost:3000`, что и API — запросы идут на тот же origin, CORS не возникает.
