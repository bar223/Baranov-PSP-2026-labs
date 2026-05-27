const BASE_URL = '/api/sections';

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
    getSections(filters = {}) {
        const params = new URLSearchParams(
            Object.fromEntries(Object.entries(filters).filter(([, v]) => v !== '' && v !== undefined))
        ).toString();
        return request('GET', params ? `${BASE_URL}?${params}` : BASE_URL);
    },
    getSectionById(id)      { return request('GET',    `${BASE_URL}/${id}`); },
    createSection(data)     { return request('POST',   BASE_URL, data); },
    updateSection(id, data) { return request('PUT',    `${BASE_URL}/${id}`, data); },
    deleteSection(id)       { return request('DELETE', `${BASE_URL}/${id}`); },
};
