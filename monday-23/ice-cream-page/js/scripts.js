// business logic
window.addEventListener("load", function() {
    const iceCreamFlavors = ["Vanilla", "Chocolate", "Strawberry", "Neapolitan", "Rocky Road", "Bubblegum", "Sherbert"];
    const bodyElement = document.querySelector("body");

    iceCreamFlavors.forEach(function(flavor) {
        const pEle = document.createElement("p");
        pEle.append(flavor);
        bodyElement.append(pEle);
    });
});