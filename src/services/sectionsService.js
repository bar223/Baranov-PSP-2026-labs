const fileService = require('./fileService');

let dataFilePath;

const init = (filePath) => {
    dataFilePath = filePath;
};

const findAll = ({ title, available, spots_min } = {}) => {
    let sections = fileService.readData(dataFilePath);

    if (title) {
        sections = sections.filter(s => s.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (available === 'true') {
        sections = sections.filter(s => s.spots > 0);
    }
    if (spots_min) {
        const min = parseInt(spots_min);
        if (!isNaN(min)) sections = sections.filter(s => s.spots >= min);
    }

    return sections;
};

const findOne = (id) => {
    const sections = fileService.readData(dataFilePath);
    return sections.find(s => s.id === id) || null;
};

const create = (data) => {
    const sections = fileService.readData(dataFilePath);
    const newId = sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1;
    const newSection = { id: newId, ...data };
    sections.push(newSection);
    fileService.writeData(dataFilePath, sections);
    return newSection;
};

const update = (id, data) => {
    const sections = fileService.readData(dataFilePath);
    const index = sections.findIndex(s => s.id === id);
    if (index === -1) return null;
    sections[index] = { ...sections[index], ...data };
    fileService.writeData(dataFilePath, sections);
    return sections[index];
};

const remove = (id) => {
    const sections = fileService.readData(dataFilePath);
    const filtered = sections.filter(s => s.id !== id);
    if (filtered.length === sections.length) return null;
    const removed = sections.find(s => s.id === id);
    fileService.writeData(dataFilePath, filtered);
    return removed;
};

const removeEmpty = () => {
    const sections = fileService.readData(dataFilePath);
    const removed = sections.filter(s => s.spots === 0);
    const remaining = sections.filter(s => s.spots > 0);
    fileService.writeData(dataFilePath, remaining);
    return removed;
};

module.exports = { init, findAll, findOne, create, update, remove, removeEmpty };
