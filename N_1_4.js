const readline = require('readline');

// Настраиваем интерфейс для чтения из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getSumAndMultOfArray(arr) {
    if (!arr || arr.length === 0) return { sum: 0, mult: 0 };
    let sum = 0, mult = 1;
    for (let num of arr) {
        sum += num;
        mult *= num;
    }
    return { sum, mult };
}

// Задаем вопрос пользователю
rl.question('Введите числа через пробел (например: 2 3 4): ', (answer) => {
    // 1. Разбиваем строку по пробелам
    // 2. Превращаем каждую строчку в число с помощью Number
    // 3. Отбрасываем то, что не является числом (защита от ошибок)
    const numbersArray = answer.split(' ').map(Number).filter(n => !isNaN(n));

    if (numbersArray.length > 0) {
        const result = getSumAndMultOfArray(numbersArray);
        console.log(`Сумма: ${result.sum}, Произведение: ${result.mult}`);
    } else {
        console.log("Вы не ввели корректные числа.");
    }

    // Обязательно закрываем интерфейс, чтобы скрипт завершился
    rl.close();
});
