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
    switch(op) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x, y);
            break;
        default:
            console.log('Operation not available');
    }
}