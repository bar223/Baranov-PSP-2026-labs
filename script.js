(function() {
    "use strict";

    let firstOperand = '';
    let secondOperand = '';
    let currentOperator = null;
    let shouldResetDisplay = false;

    const display = document.getElementById('calc-display');
    const calculator = document.querySelector('.calculator');

    const digitButtons = [
        'btn-0', 'btn-1', 'btn-2', 'btn-3', 'btn-4',
        'btn-5', 'btn-6', 'btn-7', 'btn-8', 'btn-9'
    ].map(id => document.getElementById(id));

    const dotButton = document.getElementById('btn-dot');
    const clearButton = document.getElementById('btn-clear');
    const signButton = document.getElementById('btn-sign');
    const percentButton = document.getElementById('btn-percent');
    const backspaceButton = document.getElementById('btn-backspace');
    const divideButton = document.getElementById('btn-divide');
    const multiplyButton = document.getElementById('btn-multiply');
    const subtractButton = document.getElementById('btn-subtract');
    const addButton = document.getElementById('btn-add');
    const equalButton = document.getElementById('btn-equal');
    const squareButton = document.getElementById('btn-square');
    const sqrtButton = document.getElementById('btn-sqrt');
    const factorialButton = document.getElementById('btn-factorial');
    const tripleZeroButton = document.getElementById('btn-triple-zero');
    const powButton = document.getElementById('btn-pow');
    const bgColorButton = document.getElementById('btn-bg-color');
    const displayColorButton = document.getElementById('btn-display-color');

    function updateDisplay(value) {
        display.textContent = value;
    }

    function clearAll() {
        firstOperand = '';
        secondOperand = '';
        currentOperator = null;
        shouldResetDisplay = false;
        updateDisplay('0');
    }

    function inputDigit(digit) {
        if (shouldResetDisplay) {
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
            shouldResetDisplay = false;
        }

        if (currentOperator === null) {
            if (digit === '.' && firstOperand.includes('.')) return;
            firstOperand += digit;
            updateDisplay(firstOperand);
        } else {
            if (digit === '.' && secondOperand.includes('.')) return;
            secondOperand += digit;
            updateDisplay(secondOperand);
        }
    }

    function performBinaryOperation() {
        if (currentOperator === null || secondOperand === '') return;

        const a = parseFloat(firstOperand);
        const b = parseFloat(secondOperand);
        let result;

        switch (currentOperator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '×': result = a * b; break;
            case '/': result = b !== 0 ? a / b : 'Ошибка'; break;
            case '^': result = Math.pow(a, b); break;
            default: return;
        }

        if (result === 'Ошибка' || isNaN(result) || !isFinite(result)) {
            clearAll();
            updateDisplay('Ошибка');
            return;
        }

        firstOperand = result.toString();
        secondOperand = '';
        currentOperator = null;
        shouldResetDisplay = true;
        updateDisplay(firstOperand);
    }


    function setOperator(op) {
        if (firstOperand === '') return;

        if (currentOperator !== null && secondOperand !== '') {
            performBinaryOperation();
        }

        if (display.textContent === 'Ошибка') return;

        currentOperator = op;
        shouldResetDisplay = false;
    }

    function factorial(n) {
        if (n < 0 || !Number.isInteger(n)) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    }

    function applyUnaryOperation(operation) {
        let currentValue = display.textContent;
        if (currentValue === 'Ошибка') return;

        let num = parseFloat(currentValue);
        if (isNaN(num)) return;

        let result;
        switch (operation) {
            case 'sign':
                result = -num;
                break;
            case 'percent':
                result = num / 100;
                break;
            case 'sqrt':
                if (num < 0) {
                    updateDisplay('Ошибка');
                    clearAll();
                    return;
                }
                result = Math.sqrt(num);
                break;
            case 'square':
                result = num * num;
                break;
            case 'factorial':
                if (num < 0 || !Number.isInteger(num)) {
                    updateDisplay('Ошибка');
                    clearAll();
                    return;
                }
                result = factorial(num);
                break;
            default: return;
        }

        if (currentOperator === null) {
            firstOperand = result.toString();
        } else {
            secondOperand = result.toString();
        }
        updateDisplay(result.toString());
        shouldResetDisplay = true;
    }

    function handleBackspace() {
        if (shouldResetDisplay) return;

        if (currentOperator === null) {
            if (firstOperand.length > 0) {
                firstOperand = firstOperand.slice(0, -1);
                updateDisplay(firstOperand || '0');
            }
        } else {
            if (secondOperand.length > 0) {
                secondOperand = secondOperand.slice(0, -1);
                updateDisplay(secondOperand || '0');
            }
        }
    }

    function appendTripleZero() {
        if (shouldResetDisplay) {
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
            shouldResetDisplay = false;
        }

        if (currentOperator === null) {
            firstOperand += '000';
            updateDisplay(firstOperand);
        } else {
            secondOperand += '000';
            updateDisplay(secondOperand);
        }
    }

    const bgColors = [
        '#ffffff', '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da',
        '#f0f0f0', '#d4edda', '#f8d7da', '#fff3cd', '#d1ecf1',
        '#cfe2ff', '#e2e3e5', '#f5c2c7', '#ffe5b4', '#b8daff',
        '#d4c4fb', '#c3e6cb', '#fbc0cb', '#ffeaa7', '#a8d8ea'
    ];
    let bgColorIndex = 0;

    function changeBackgroundColor() {
        calculator.style.backgroundColor = bgColors[bgColorIndex];
        bgColorIndex = (bgColorIndex + 1) % bgColors.length;
    }


    const displayColors = [
        '#e9ecef', '#f8d7da', '#d4edda', '#fff3cd', '#d1ecf1',
        '#cfe2ff', '#f5c2c7', '#ffe5b4', '#d4c4fb', '#c3e6cb',
        '#b8daff', '#fbc0cb', '#ffeaa7', '#a8d8ea', '#e2e3e5'
    ];
    let displayColorIndex = 0;

    function changeDisplayColor() {
        display.style.backgroundColor = displayColors[displayColorIndex];
        displayColorIndex = (displayColorIndex + 1) % displayColors.length;
    }

    digitButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => inputDigit(btn.textContent));
        }
    });

    dotButton.addEventListener('click', () => inputDigit('.'));
    clearButton.addEventListener('click', clearAll);
    backspaceButton.addEventListener('click', handleBackspace);
    tripleZeroButton.addEventListener('click', appendTripleZero);

    signButton.addEventListener('click', () => applyUnaryOperation('sign'));
    percentButton.addEventListener('click', () => applyUnaryOperation('percent'));
    sqrtButton.addEventListener('click', () => applyUnaryOperation('sqrt'));
    squareButton.addEventListener('click', () => applyUnaryOperation('square'));
    factorialButton.addEventListener('click', () => applyUnaryOperation('factorial'));

    divideButton.addEventListener('click', () => setOperator('/'));
    multiplyButton.addEventListener('click', () => setOperator('×'));
    subtractButton.addEventListener('click', () => setOperator('-'));
    addButton.addEventListener('click', () => setOperator('+'));
    powButton.addEventListener('click', () => setOperator('^'));

    equalButton.addEventListener('click', performBinaryOperation);

    bgColorButton.addEventListener('click', changeBackgroundColor);
    displayColorButton.addEventListener('click', changeDisplayColor);

    // Инициализация
    clearAll();
})();
