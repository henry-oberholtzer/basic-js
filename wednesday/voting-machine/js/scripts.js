window.onload = function () {
    const form = document.querySelector("form");
    console.log(form)
    form.onsubmit = function (event) {
        event.preventDefault();
        // setting voting section
        let votingPage = document.getElementById("over18");
        votingPage.setAttribute("class", "hidden");
        let under18Message = document.getElementById("under18");
        under18Message.setAttribute("class", "hidden");

        const age = document.querySelector("input#ageInput").value;
        console.log(age);
        if (age >= 18) {
            votingPage.removeAttribute("class");
            document.querySelector("body").removeAttribute("style");
        } else {
            under18Message.removeAttribute("class");
            document.querySelector("body").style.backgroundImage = "Url(https://www.webwise.ie/wp-content/uploads/2018/04/Fortnite.jpg)"
            
        }
    };
};