# ЛР 4 — REST API на Node.js + Express

Четвёртая лабораторная работа. Разработка бэкенда — REST API сервиса с хранением данных в JSON-файле.

Баранов Е.Ю., группа ИУ5-45Б

## Содержание

- [Цель](#цель)
- [Технологии](#технологии)
- [Архитектура](#архитектура)
- [Эндпоинты](#эндпоинты)
- [Коды ответов](#коды-ответов)
- [Доп задание — Удаление пустых секций](#доп-задание--удаление-пустых-секций)
- [Запуск](#запуск)

## Цель

Реализовать веб-сервис на Node.js с использованием фреймворка Express.js по принципам REST API. Протестировать все эндпоинты через Postman.

## Технологии

- Node.js
- Express.js
- Файловая система (`fs`) как хранилище данных

## Архитектура

Слоистая архитектура (Layered Architecture): каждый слой отвечает только за свою задачу.

```
src/
├── index.js                  # Точка входа: Express, middleware, запуск сервера
├── routes/
│   └── sections.js           # Таблица маршрутов → контроллер
├── controllers/
│   └── sectionsController.js # Валидация req, формирование res
└── services/
    ├── sectionsService.js    # Бизнес-логика: фильтрация, создание, обновление
    └── fileService.js        # Чтение/запись JSON-файла
data/
└── sections.json             # База данных
```

Запрос проходит путь: `routes → controller → service → fileService → sections.json`.

### Точка входа `index.js`

```js
app.use(express.json());           // парсит JSON из тела запроса
app.use('/api/sections', sectionsRouter); // подключаем роутер
```

### Контроллер (пример — создание секции)

```js
const createSection = (req, res) => {
    const { title, text, spots, src, modelPath } = req.body;

    if (!title || !title.trim())
        return res.status(422).json({ error: 'Поле "title" обязательно' });
    if (spots === undefined || !Number.isInteger(spots) || spots < 0)
        return res.status(422).json({ error: 'Поле "spots" должно быть целым неотрицательным числом' });

    const newSection = sectionsService.create({ title: title.trim(), text, spots, src, modelPath });
    res.status(201).json(newSection);
};
```

### Сервис (пример — фильтрация)

```js
const findAll = ({ title, available, spots_min } = {}) => {
    let sections = fileService.readData(dataFilePath);
    if (title)           sections = sections.filter(s => s.title.toLowerCase().includes(title.toLowerCase()));
    if (available === 'true') sections = sections.filter(s => s.spots > 0);
    if (spots_min)       sections = sections.filter(s => s.spots >= parseInt(spots_min));
    return sections;
};
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

### Примеры запросов

**GET с фильтрами:**
```
GET /api/sections?title=плав&available=true
```

**POST — создать секцию:**
```json
{
  "title": "Баскетбол",
  "text": "Тренировки по вечерам.",
  "spots": 8,
  "src": "assets/7613.jpg",
  "modelPath": "models/sport.glb"
}
```

**PUT — обновить количество мест:**
```json
{ "spots": 0 }
```

## Коды ответов

| Код | Значение |
|-----|----------|
| `200` | Успех |
| `201` | Запись создана (POST) |
| `404` | Секция не найдена |
| `422` | Данные не прошли валидацию |

## Доп задание — Удаление пустых секций

Дополнительный эндпоинт `DELETE /api/sections/empty` удаляет все секции, где `spots = 0` (набор закрыт). Маршрут объявлен **до** `/:id`, иначе Express трактовал бы `empty` как числовой id:

```js
// routes/sections.js
router.delete('/empty', sectionsController.deleteEmptySections); // обязательно выше
router.delete('/:id',   sectionsController.deleteSection);
```

Логика в сервисе:

```js
const removeEmpty = () => {
    const sections = fileService.readData(dataFilePath);
    const removed   = sections.filter(s => s.spots === 0);
    const remaining = sections.filter(s => s.spots > 0);
    fileService.writeData(dataFilePath, remaining);
    return removed; // возвращаем что удалили
};
```

Ответ:
```json
{ "message": "Удалено секций: 1", "deleted": [{ "id": 2, "title": "Волейбол", ... }] }
```

## Запуск

```bash
npm install
npm run start
```

Сервер запустится на `http://localhost:3000`.
