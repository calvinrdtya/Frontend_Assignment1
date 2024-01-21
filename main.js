const displayInput = document.getElementById('inputDisplay');
const clearBtn = document.getElementById('clearBtn');
let input = "";

function handleButtonClick(value) {
    switch (value) {
        case 'AC':
            clearAll();
            break;
        case '=':
            calculateResult();
            break;
        case '+/-':
            changeSign();
            break;
        case 'C':
            deleteLastDigit();
            break;
        default:
            appendInput(value);
            break;
    }
}

function clearAll() {
    input = "";
    updateDisplay();
}

function appendInput(value) {
    input += value;
    updateDisplay();
}

function changeSign() {
    input = eval(input * -1).toString();
    updateDisplay();
}

function deleteLastDigit() {
    input = input.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        input = input.replace(/x/g, '*');
        input = input.replace(/÷/g, '/');
        input = input.replace(/%/g, '/100');

        input = eval(input).toString();
        updateDisplay();
    } catch (error) {
        input = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    displayInput.value = input;
}