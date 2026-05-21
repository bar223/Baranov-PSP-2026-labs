// Lab 4 API server must be running on port 3000: node c:/PSP_2026/lab_4/server.js
const BASE_URL = 'http://localhost:3000/api/sections';

function xhr(method, url, data) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url);
        if (data) req.setRequestHeader('Content-Type', 'application/json');
        req.onload = () => {
            if (req.status >= 200 && req.status < 300) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject(new Error(`HTTP ${req.status}`));
            }
        };
        req.onerror = () => reject(new Error('Network error'));
        req.send(data ? JSON.stringify(data) : null);
    });
}

export const api = {
    getSections(filters = {}) {
        const params = new URLSearchParams(
            Object.fromEntries(Object.entries(filters).filter(([, v]) => v !== '' && v !== undefined))
        ).toString();
        return xhr('GET', params ? `${BASE_URL}?${params}` : BASE_URL);
    },
    getSectionById(id) {
        return xhr('GET', `${BASE_URL}/${id}`);
    },
    deleteSection(id) {
        return xhr('DELETE', `${BASE_URL}/${id}`);
    },
};
