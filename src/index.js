const express = require('express');
const path = require('path');
const sectionsRouter = require('./routes/sections');
const sectionsService = require('./services/sectionsService');

const app = express();
const PORT = 3000;

const DATA_FILE_PATH = path.join(__dirname, '../data/sections.json');
sectionsService.init(DATA_FILE_PATH);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/api/sections', sectionsRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Маршрут не найден' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
    console.log('Эндпоинты:');
    console.log('  GET    /api/sections');
    console.log('  GET    /api/sections/:id');
    console.log('  POST   /api/sections');
    console.log('  PUT    /api/sections/:id');
    console.log('  DELETE /api/sections/:id');
});
