
function favoriteThings(e) {
    e.preventDefault();

    const ulEle = document.createElement("ul");
    const liEle = document.createElement("li");
    const liEle2 = document.createElement("li");
    const liEle3 = document.createElement("li");


    //define array
    let array = [];
    const inputs = document.querySelectorAll("input");
    //get values
    const ans1 = inputs[0].value;
    const ans2 = inputs[1].value;
    const ans3 = inputs[2].value;
    const ans4 = inputs[3].value;
    const ans5 = inputs[4].value;
    const newArray = array.concat(ans1, ans2, ans3, ans4, ans5);

    //output
    // document.getElementById("output").innerText = newArray;

    const firstItem = newArray[0];
    const secondItem = newArray[1];
    const thirdItem = newArray[2];

    const newNewArray = [];

    newNewArray.push(secondItem);
    newNewArray.push(firstItem);
    newNewArray.push(thirdItem);

    form.after(ulEle)
    ulEle.append(liEle);
    liEle.after(liEle2);
    liEle2.after(liEle3);

    liEle.append(newNewArray[0]);
    liEle2.append(newNewArray[1]);
    liEle3.append(newNewArray[2]);


};

window.addEventListener("load", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", favoriteThings);
});