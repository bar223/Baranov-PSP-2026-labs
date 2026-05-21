# ЛР 4 — REST API на Node.js + Express

Четвёртая лабораторная работа. Разработка бэкенда — REST API сервиса с хранением данных в JSON-файле.

## Цель

Реализовать веб-сервис на Node.js с использованием фреймворка Express.js по принципам REST API. Протестировать все эндпоинты через Postman.

## Технологии

- Node.js
- Express.js
- Файловая система (`fs`) как хранилище данных

## Архитектура (Layered Architecture)

```
src/
├── index.js                  # Точка входа, Express, middleware
├── routes/
│   └── sections.js           # Таблица маршрутов
├── controllers/
│   └── sectionsController.js # Обработка req/res, валидация
└── services/
    ├── sectionsService.js    # Бизнес-логика, фильтрация
    └── fileService.js        # Чтение/запись JSON-файла
data/
└── sections.json             # База данных
```

## Эндпоинты

| Метод | URL | Описание |
|-------|-----|----------|
| `GET` | `/api/sections` | Список секций (фильтры: `title`, `available`, `spots_min`) |
| `GET` | `/api/sections/:id` | Одна секция по ID |
| `POST` | `/api/sections` | Создать секцию |
| `PUT` | `/api/sections/:id` | Обновить секцию |
| `DELETE` | `/api/sections/:id` | Удалить секцию |
| `DELETE` | `/api/sections/empty` | Удалить все секции где `spots = 0` |

## Коды ответов

- `200` — успех
- `201` — запись создана
- `404` — секция не найдена
- `422` — данные не прошли валидацию

## Запуск

```bash
npm install
npm run start
```

Сервер запустится на `http://localhost:3000`.
