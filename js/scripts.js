function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// window.alert("Your results are as follows: Adding " + number1 + " and " + number2 + " gives " + add(number1, number2) + ". Subtracting " + number2 + " from " + number1 + " gives " + sub(number1, number2) + ". Multiplying " + number1 + " by " + number2 + " gives " + multiply(number1, number2)
// + ". Dividing " + number1 + " by " + number2 + " gives " + divide(number1, number2) + ".");

window.alert(
    number1 + " + " + number2 + " = " + add(number1, number2) + ", " 
    + number1 + " - " + number2 + " = " + sub(number1, number2) + ", " 
    + number1 + " * " + number2 + " = " + multiply(number1, number2) + ", " + number1 + " / " + number2 + " = " + divide(number1, number2) + ".");
