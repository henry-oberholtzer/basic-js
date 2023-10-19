// Business Logic

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(number1, number2, operator) {
    if (operator === "add") {
        return add(number1, number2);
    } else if (operator === "subtract") {
        return subtract(number1, number2);
    } else if (operator === "multiply") {
        return multiply(number1, number2);
    } else if (operator === "divide") {
        return divide(number1, number2);    
    }
}
// UI Logic
function handleSubmission(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;

    let result = calculate(number1, number2, operator);
    document.getElementById("output").innerText = result;
}

window.addEventListener("load", function () {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleSubmission);
});
