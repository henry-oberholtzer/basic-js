// Element Creators

// UI Logic
window.addEventListener("load", (event) => {
    const h1Element = document.createElement("h1");
    const h1Element2 = document.createElement("h1");
    const body = document.querySelector("body");
    const pEle = document.createElement("p");
    const imgEle = document.createElement("img");
    const ulEle = document.createElement("ul");
    const liEle = document.createElement("li");
    const liEle2 = document.createElement("li");
    const h2Ele = document.createElement("h2");
    const aEle = document.createElement("a");

    body.append(h1Element);
    h1Element.append("Webpage Recreation Practice");
    body.append(pEle);
    pEle.append("The HTML of this webpage was created with JavaScript");
    body.append(imgEle);
    imgEle.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    imgEle.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
    imgEle.setAttribute("style", "width: 50%");
    body.append(h1Element2);
    h1Element2.append("Facts about the Multicolored Tanager");

    body.append(ulEle);
    ulEle.append(liEle);
    ulEle.append(liEle2);
    liEle.append("It is endemic to the mountains of Colombia.");
    liEle2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    body.append(h2Ele);
    h2Ele.append("Source");
    body.append(aEle);
    aEle.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
    aEle.append("Wikiepedia");
    

});