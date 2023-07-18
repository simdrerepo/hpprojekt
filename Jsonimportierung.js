import { addBrotkrümel, resetMainbereich } from "./script.js";
export { setup_JsonImportieren };
import { fetchJsonData } from "./script.js";
import { elementFactory } from "./script.js";
const setup_JsonImportieren = async () => {
    const json = await fetchJsonData("./fetchcontent/content.json");
    const dropdownbuttoncollection = Array.from(document.getElementsByClassName("navbardropdownbutton")); //Highest level
    dropdownbuttoncollection.shift();
    const dropdowndivs = Array.from(document.getElementsByClassName("navbardropdown")); // Hier kommen die Button für den Content rein
    dropdowndivs.shift();
    var array = new Array();
    for (let o of Object.keys(json)) {
        for (let ob of Object.keys(json[o])) {
            const button = elementFactory("button", { class: "jsonimportbutton" }, "border:none; color:white; padding:7px; background-color:#34568B; align:left; cursor:pointer;width:100%;");
            button.textContent = ob;
            dropdowndivs[Object.keys(json).indexOf(o)].appendChild(button);
        }
    }
    const jsonkeys = Object.keys(json); // Highestlevel
    for (const jk of dropdownbuttoncollection) {
        jk.innerHTML = jsonkeys[dropdownbuttoncollection.indexOf(jk)] + '<i class="fa fa-caret-down">';
    }
    const jsonimportbutton = Array.from(document.getElementsByClassName("jsonimportbutton"));
    var i = 0;
    for (const [title, inhalte] of Object.entries(json)) {
        //dropdownbuttoncollection[Object.keys(json).indexOf(title)].textContent = title;
        for (const [a, b] of Object.entries(json[title])) {
            jsonimportbutton[i].addEventListener("click", () => {
                const [main_container, main_main] = resetMainbereich();
                //populateHeader(a);
                addBrotkrümel("Startseite", title, a);
                insertContentIntoElement(main_main, "h1", a);
                insertContentIntoElement(main_main, "p", Object(b).content);
            });
            i++;
        }
    }
    //hover effekt für die button im dropdowncontainer
    for (let dcb of saddropdownbuttoncollection) {
        dcb.addEventListener("mouseover", function () { changeBackgroundColorAndColor(this, "#34568B", "white"); });
        dcb.addEventListener("mouseleave", function () { changeBackgroundColorAndColor(this, "#dddddd", "black"); });
    }
    //dropdownicons für button im sidenav
    for (let b of daropdownbuttoncollection) {
        b.addEventListener("click", function () {
            if (this.lastChild.classList.contains("fa-caret-down")) {
                this.removeChild(this.lastChild);
                let itag = document.createElement("i");
                itag.setAttribute("class", "fa fa-caret-up");
                this.appendChild(itag);
            }
            else {
                this.removeChild(this.lastChild);
                let itag = document.createElement("i");
                itag.setAttribute("class", "fa fa-caret-down");
                this.appendChild(itag);
            }
        });
    }
};
const insertContentIntoElement = (where, htmlElement, input) => {
    let element = document.createElement(htmlElement);
    element.appendChild(document.createTextNode(input));
    where.appendChild(element);
};
const clear = (where) => {
    where.replaceChildren();
};
const populateMain = (input) => {
    const main_main = document.getElementById("main_main");
    main_main.replaceChildren();
    let contentdiv = document.createElement("div");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(input));
    contentdiv.appendChild(p);
    main_main.appendChild(contentdiv);
};
const populateHeader = (input) => {
    const main_header = document.getElementById("mainheader");
    main_header.replaceChildren();
    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(input));
    main_header.appendChild(h1);
};
const changeBackgroundColorAndColor = (buttonreferenz, backgroundColor, textcolor) => {
    buttonreferenz.style.backgroundColor = backgroundColor;
    buttonreferenz.style.color = textcolor;
};
function setNameForButton(button, ...args) {
    for (const c of args) {
        button[args.indexOf(c)].textContent = c;
    }
}
