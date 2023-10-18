window.onload = function()  {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        // turns shouting input into variable
        const shout = document.getElementById("input").value;
        console.log(shout);
        // gets shouting value from input
        document.querySelector("p#shouting").innerText = shout.toUpperCase() + "!!";
        let fontPrevSize = document.querySelector("p#shouting").style.fontSize;
        console.log(fontPrevSize);
        let newSize = parseInt(fontPrevSize) * 1.1;
        console.log(newSize);
        document.querySelector("p#shouting").style.fontSize = newSize + "%";

        // reveal shout
        document.querySelector("div#shout").removeAttribute("class");
        
        event.preventDefault();
    };
    
};