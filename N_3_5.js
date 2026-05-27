const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function anagram(words) {
    const groups = {};

    for (const word of words) {
        // Сортируем буквы в слове по алфавиту для создания ключа
        const key = word.toLowerCase().split('').sort().join('');
        if (!groups[key]) groups[key] = [];
        groups[key].push(word);
    }

    const result = Object.values(groups)
        .filter(group => group.length >= 2)
        .map(group => group.sort());

    result.sort((a, b) => a[0].localeCompare(b[0]));
    return result;
}

rl.question('Введите слова через пробел (например: кот ток кто рост сорт): ', (answer) => {
    // Разбиваем строку и удаляем пустые элементы, если пользователь ввел лишние пробелы
    const wordsArray = answer.split(' ').filter(w => w.trim() !== '');

    if (wordsArray.length > 0) {
        console.log("\nРезультат (группы анаграмм):");
        console.log(anagram(wordsArray));
    } else {
        console.log("Вы не ввели ни одного слова.");
    }

    rl.close();
});
