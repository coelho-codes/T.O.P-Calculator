function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(y == 0) {
        return 'ERROR: cannot divide by zero';
    } else {
        return x / y;
    }
}

function operator(x, y, op) {
    if(op == '+') {
        return add(x, y);
    } else if(op == '-') {
        return subtract(x, y);
    } else if(op == 'x') {
        return multiply(x, y);
    } else if(op == '/') {
        return divide(x, y);
    } else {
        return 'ERROR: Operation not available';
    }
}

let display = document.querySelector('#display');
let buttons = document.getElementsByTagName('button'); //Returns a collection(kinda like an array)
let num1;
let num2;
let op;

for(let i = 0; i < buttons.length; i++) {
    if(buttons[i].textContent == 'C') {
        buttons[i].addEventListener('click', () => {
            display.value = '';
            num1 = 0;
            num2 = 0;
            op = '';
        })
    } else if(buttons[i].textContent == '+' || buttons[i].textContent == '-' || buttons[i].textContent == 'x' || buttons[i].textContent == '/') {
        buttons[i].addEventListener('click', () => {
            num1 = display.value;
            op = buttons[i].textContent;
            display.value = '';
        })
    } else if(buttons[i].textContent == '=') {
        buttons[i].addEventListener('click', () => {
            num2 = display.value;
            num1 = Number(num1);
            num2 = Number(num2);
            display.value = operator(num1, num2, op);
        })
    } else {
        buttons[i].addEventListener('click', () => {
            display.value += buttons[i].textContent;
        })
    }
}