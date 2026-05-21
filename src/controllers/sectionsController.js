const sectionsService = require('../services/sectionsService');

const getAllSections = (req, res) => {
    const { title, available, spots_min } = req.query;
    const sections = sectionsService.findAll({ title, available, spots_min });
    res.json(sections);
};

const getSectionById = (req, res) => {
    const id = parseInt(req.params.id);
    const section = sectionsService.findOne(id);
    if (!section) return res.status(404).json({ error: 'Секция не найдена' });
    res.json(section);
};

const createSection = (req, res) => {
    const { title, text, spots, src, modelPath } = req.body;

    if (!title || !title.trim()) {
        return res.status(422).json({ error: 'Поле "title" обязательно' });
    }
    if (spots === undefined || typeof spots !== 'number' || !Number.isInteger(spots) || spots < 0) {
        return res.status(422).json({ error: 'Поле "spots" должно быть целым неотрицательным числом' });
    }

    const newSection = sectionsService.create({
        title: title.trim(),
        text: typeof text === 'string' ? text.trim() : '',
        spots,
        src: typeof src === 'string' ? src.trim() : '',
        modelPath: typeof modelPath === 'string' ? modelPath.trim() : '',
    });

    res.status(201).json(newSection);
};

const updateSection = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, text, spots, src, modelPath } = req.body;

    if (title !== undefined && !title.trim()) {
        return res.status(422).json({ error: 'Поле "title" не может быть пустым' });
    }
    if (spots !== undefined && (typeof spots !== 'number' || !Number.isInteger(spots) || spots < 0)) {
        return res.status(422).json({ error: 'Поле "spots" должно быть целым неотрицательным числом' });
    }

    const updated = sectionsService.update(id, {
        ...(title     !== undefined && { title:     title.trim() }),
        ...(text      !== undefined && { text:      text.trim() }),
        ...(spots     !== undefined && { spots }),
        ...(src       !== undefined && { src:       src.trim() }),
        ...(modelPath !== undefined && { modelPath: modelPath.trim() }),
    });

    if (!updated) return res.status(404).json({ error: 'Секция не найдена' });
    res.json(updated);
};

const deleteEmptySections = (req, res) => {
    const removed = sectionsService.removeEmpty();
    res.json({ message: `Удалено секций: ${removed.length}`, deleted: removed });
};

const deleteSection = (req, res) => {
    const id = parseInt(req.params.id);
    const removed = sectionsService.remove(id);
    if (!removed) return res.status(404).json({ error: 'Секция не найдена' });
    res.json({ message: 'Секция удалена', deleted: removed });
};

module.exports = { getAllSections, getSectionById, createSection, updateSection, deleteSection, deleteEmptySections };
