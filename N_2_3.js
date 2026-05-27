const readline = require('readline');

// Настраиваем интерфейс для чтения из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Наша функция для алгоритма
function getMaxOnesSequence(str) {
    let maxLen = 0;
    let currentLen = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            currentLen++;
            if (currentLen > maxLen) {
                maxLen = currentLen;
            }
        } else {
            currentLen = 0;
        }
    }

    return maxLen;
}

// Задаем вопрос пользователю
rl.question('Введите строку из 0 и 1 (например: 1000111100): ', (answer) => {
    // Убираем случайные пробелы по краям, если пользователь случайно их нажал
    const cleanString = answer.trim();

    if (cleanString.length > 0) {
        // Проверяем, есть ли там недопустимые символы (опционально, для красоты)
        const hasInvalidChars = /[^01]/.test(cleanString);
        if (hasInvalidChars) {
            console.log("Внимание: в строке есть символы, отличные от 0 и 1, но алгоритм всё равно посчитает только единицы!");
        }

        const result = getMaxOnesSequence(cleanString);
        console.log(`\nВаша строка: ${cleanString}`);
        console.log(`Самая длинная серия единиц: ${result}`);
    } else {
        console.log("Вы ввели пустую строку.");
    }

    // Закрываем ввод
    rl.close();
});
