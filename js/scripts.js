function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

// function multiply(number1, number2) {
//     return number1 * number2;
// }

// function divide(number1, number2) {
//     return number1 / number2;
// }

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

// // window.alert("Your results are as follows: Adding " + number1 + " and " + number2 + " gives " + add(number1, number2) + ". Subtracting " + number2 + " from " + number1 + " gives " + sub(number1, number2) + ". Multiplying " + number1 + " by " + number2 + " gives " + multiply(number1, number2)
// // + ". Dividing " + number1 + " by " + number2 + " gives " + divide(number1, number2) + ".");

// window.alert(
//     number1 + " + " + number2 + " = " + add(number1, number2) + ", "
//     + number1 + " - " + number2 + " = " + sub(number1, number2) + ", "
//     + number1 + " * " + number2 + " = " + multiply(number1, number2) + ", " + number1 + " / " + number2 + " = " + divide(number1, number2) + ".");

// function wawa() {
//     var variable = document.getElementById('input_id').value;
//     document.getElementById('alert').innerHTML = 'The user input is: ' + variable;
// }

// function calculate() {
//     let number1 = parseInt(document.getElementById('number1').value);
//     let number2 = parseInt(document.getElementById('number2').value);
//     let add = number1 + number2;
//     let subtraction = number1 - number2;
//     let multiply = number1 * number2;
//     let divide = number1 / number2;
//     let operation = document.getElementById('operations').value;
//     return window.alert(operation);

// }

function add() {
    let add = parseInt(document.getElementById('number1').value) + parseInt(document.getElementById('number2').value);
    return window.alert(add);
}

function subtraction() {
    let subtraction = parseInt(document.getElementById('number1').value) - parseInt(document.getElementById('number2').value);
    return window.alert(subtraction);
}

function multiply() {
    let multiply = parseInt(document.getElementById('number1').value) * parseInt(document.getElementById('number2').value);
    return window.alert(multiply);
}

function divide() {
    let divide = parseInt(document.getElementById('number1').value) / parseInt(document.getElementById('number2').value);
    return window.alert(divide);
}