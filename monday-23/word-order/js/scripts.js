function wordSorter(e) {
    e.preventDefault();
    const textBlock = document.querySelector("input").value;
    const splitBlock = textBlock.split(/\W+/);
    console.log(splitBlock);
}



window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", wordSorter);
});