function hideWood() {
    document.getElementById("image1").setAttribute("class", "hidden");
    document.getElementById("image2").setAttribute("class", "hidden");
    document.getElementById("image3").setAttribute("class", "hidden");
    document.getElementById("image4").setAttribute("class", "hidden");
}

window.onload = function() {
    document.querySelector("form").onsubmit = function(e) {
        e.preventDefault();
        hideWood();
        const q1 = document.getElementById("town").value;
        const q2 = document.getElementById("treats").value;
    if (q1 === "1" && q2 === "1") {
        document.getElementById("image1").removeAttribute("class");
    } else if (q1 === "1" && q2 === "0") {
        document.getElementById("image2").removeAttribute("class");
    } else if (q1 === "0" && q2 === "1") {
        document.getElementById("image3").removeAttribute("class");
    } else {
        document.getElementById("image4").removeAttribute("class");
    }
}
};