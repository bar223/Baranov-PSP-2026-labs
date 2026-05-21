export const store = {
    // Начальные данные с добавленными полями (места и пути к моделям)
    data: [
        { id: 1, src: "assets/7613.jpg", title: "Плавание", text: "Занятия в бассейне МГТУ.", spots: 12, modelPath: "models/swimming.glb" },
        { id: 2, src: "assets/86490.jpg", title: "Волейбол", text: "Сборная университета.", spots: 0, modelPath: "models/volleyball.glb" },
        { id: 3, src: "assets/2149552285.jpg", title: "Тренажёрный зал", text: "Современное оборудование.", spots: 5, modelPath: "models/dumbbell.glb" }
    ],

    // Метод генерации полностью случайной карточки
    addCard() {
        const titles = ["Баскетбол", "Футбол", "Теннис", "Бокс", "Шахматы", "Легкая атлетика"];
        const texts = ["Открыт новый набор!", "Ждем всех желающих.", "Тренировки по вечерам.", "Участвуй в соревнованиях."];
        const images = ["assets/7613.jpg", "assets/86490.jpg", "assets/2149552285.jpg"];

        // Массив твоих заготовленных моделей в папке models/
        const models = ["models/swimming.glb", "models/volleyball.glb", "models/dumbbell.glb", "models/sport.glb"];

        // Случайный выбор из массивов
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const randomImg = images[Math.floor(Math.random() * images.length)];
        const randomModel = models[Math.floor(Math.random() * models.length)];

        // Случайное количество мест (от 0 до 20)
        const randomSpots = Math.floor(Math.random() * 21);

        const newCard = {
            id: Date.now(),
            src: randomImg,
            title: randomTitle,
            text: randomText,
            spots: randomSpots,
            modelPath: randomModel // Каждой новой карточке — своя модель
        };

        this.data.push(newCard);
    },

    deleteCard(id) {
        this.data = this.data.filter(item => item.id != id);
    }
};
