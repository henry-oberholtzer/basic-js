

function grocerySorter(e) {
    e.preventDefault();
    const newArray = [];
    ulEle = document.createElement("ul");
    form.after(ulEle);
    const unsortedGroceries = document.getElementById("groceries").value.split(",");
    unsortedGroceries.forEach(function (item) {
        item = item.trim();
        newArray.push(item.toUpperCase());
    })
    // newArray.sort();
    console.log(newArray);
    newArray.sort();

    newArray.forEach(function (item) {
        liEle = document.createElement("li");
        ulEle.append(liEle);
        liEle.append(item);
    })

    document.getElementById("form").setAttribute("style", "display:none");


}

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", grocerySorter);
})