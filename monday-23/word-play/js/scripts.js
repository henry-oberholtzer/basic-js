function wordPlay(e) {
    e.preventDefault();
    const wordArray = document.getElementById("words").value.split(' ');
    const filteredArray = [];
    wordArray.forEach(function (word) {
        if (3 <= word.length) {
            filteredArray.unshift(word)
        }
    })

    filteredString = filteredArray.join(" ");
    console.log(filteredString);
    output = document.getElementById("output");
    output.append(filteredString);
}

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", wordPlay);
})