function deckBuilder() {
    const body = document.querySelector("body");
    const suites = ["heart", "club", "diamond", "spade"];
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
    ulEle = document.createElement("ul");
    body.append(ulEle);

    suites.forEach(function(suit) {
        ranks.forEach(function(rank) {
            liEle = document.createElement("li");
            const cardOutput = rank + " of " + suit + "s";
            ulEle.append(liEle);
            liEle.append(cardOutput);
            console.log(liEle);
        })
    })

}

window.addEventListener("load", deckBuilder);