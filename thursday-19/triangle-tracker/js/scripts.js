// Business Logic

function equilateral(a, b, c,) {
    if (a === b && b === c && c === a) {
        return true
    }
}

function iscosceles(a, b, c) {
    if (a === b || a === c || c === b) {
        return true
    }
}

function scalene(a, b, c) {
    if (a !== b || a !== c || c !== b) {
        return true
    }
}

function notTriangle(a, b, c) {
    if (a + b <= c || a + c <= c || b + c <= a) {
        return true
    }
};


function triangleCalc(e) {
    e.preventDefault();
    const a = parseInt(document.querySelector("input#a").value);
    const b = parseInt(document.querySelector("input#b").value);
    const c = parseInt(document.querySelector("input#c").value);
    let result = "";


    if (notTriangle(a, b, c)) {
        result = "Not A Triangle"
    } else if (equilateral(a, b, c)) {
        result = "Equilateral";
    } else if (iscosceles(a, b, c)) {
        result = "Isosceles";
    } else if (scalene(a, b, c)) {
        result = "Scalene";
    };
    document.getElementById("result").innerText = result;
};

// UI Logic
window.addEventListener("load", function () {
    const form = document.getElementById("triangle-sides");
    form.addEventListener("submit", triangleCalc);
});