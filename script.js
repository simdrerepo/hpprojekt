import { setup_TopSortAlsWebApp } from "./Topsortalswebapp.js";
import { setup_tic_tac_toe } from "./Tictactoespiel.js";
import { setup_covid19_mapchart } from "./charts.js";
import { setup_side_navigation } from "./sidenavigation.js";
import { setup_TextkonkatenierungMitAwait } from "./textkonkatenierungmitawait.js";
import { setup_TextkonkatenierungMitPromises } from "./textkonkatenierungmitpromise.js";
import { setup_RednerMitZeitmessung } from "./Rednermitzeitmessung.js";
import { setup_Klammerpaare } from "./Klammerpaare.js";
import { setup_TextAnalyse } from "./Textanalyse.js";
import { setup_JsonImportieren } from "./Jsonimportierung.js";
import { fragenAntworten } from "./fragen.js";
import { codeUebung } from "./fragen.js";
import { setup_webInventors } from "./inventorsoftheweb.js";
import { domBenchmarks } from "./dombenchmarks.js";
import { vue_singlefile } from "./Vuesinglefile.js";
export { sleep };
export { setupMainBereich };
export { MainBereichStyling };
export { resetMainbereich };
export { fetchJsonData };
export { sidenavHandler };
export { fetchTextData };
setup_side_navigation();
setup_JsonImportieren();
(function AddClickListenerToSideNavButton() {
    //Clicklistener für die Button im Sidenav
    const buttonarray = Array.from(document.getElementsByClassName("regularButton"));
    const functionArray = [setup_webInventors, domBenchmarks, setup_RednerMitZeitmessung, setup_TopSortAlsWebApp, setup_Klammerpaare, setup_TextAnalyse, setup_TextkonkatenierungMitPromises, setup_TextkonkatenierungMitAwait, setup_tic_tac_toe, setup_covid19_mapchart, vue_singlefile, fragenAntworten, codeUebung];
    buttonarray.forEach(button => { button.addEventListener("click", functionArray[buttonarray.indexOf(button)]); });
})();
const resetMainbereich = () => {
    const mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    MainBereichStyling();
    const main_header = document.getElementById("mainheader");
    const main_main = document.getElementById("main_main");
    return [mainref, main_header, main_main];
};
(function ListenerVergeben() {
    const dropdownbuttoncol = Array.from(document.getElementsByClassName("drpdwnbtn"));
    const sidebuttondiv = document.getElementById("sidebutton");
    const buttoncollection = Array.from(sidebuttondiv.getElementsByTagName("button"));
    var buttonclicked = new Array();
    dropdownbuttoncol.forEach(() => { buttonclicked.push(false); });
    for (const c of dropdownbuttoncol) {
        c.addEventListener("click", hideShowDropDownContainer.bind(c));
    }
    for (const b of buttoncollection) {
        b.style.cursor = "pointer";
        b.addEventListener("mouseover", mouseOver);
        b.addEventListener("mouseout", mouseOut);
    }
    for (const c of dropdownbuttoncol) {
        c.addEventListener("click", function () {
            if (buttonclicked[dropdownbuttoncol.indexOf(c)] === false) {
                c.removeEventListener("mouseout", mouseOut);
                buttonclicked[dropdownbuttoncol.indexOf(c)] = true;
            }
            else {
                c.addEventListener("mouseout", mouseOut);
                buttonclicked[dropdownbuttoncol.indexOf(c)] = false;
            }
        });
    }
})();
function mouseOver() {
    this.style.backgroundColor = "#34568B";
    this.style.color = "white";
}
function mouseOut() {
    this.style.backgroundColor = "white";
    this.style.color = "black";
}
function hideShowDropDownContainer() {
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
    else {
        dropdown.style.display = "block";
    }
}
function setupMainBereich() {
    // Hier wird ein Bereich(header,main) eingerichtet, um später Inhalte dort hineinzuladen
    const mainref = document.getElementById("main");
    let main_container = document.createElement("div");
    main_container.setAttribute("id", "main_container");
    let main_header = document.createElement("div");
    main_header.setAttribute("id", "mainheader");
    let main_main = document.createElement("div");
    main_main.setAttribute("id", "main_main");
    let main_footer = document.createElement("div");
    main_footer.setAttribute("id", "main_footer");
    mainref.appendChild(main_container);
    main_container.appendChild(main_header);
    main_container.appendChild(main_main);
    main_container.appendChild(main_footer);
}
function MainBereichStyling() {
    // styling für den Bereich(header,main)
    const mainref = document.getElementById("main");
    const main_header = document.getElementById("mainheader");
    const main_main = document.getElementById("main_main");
    const main_container = document.getElementById("main_container");
    main_header.style.backgroundColor = "white";
    main_main.style.backgroundColor = "white";
    main_main.style.marginTop = "40px";
    main_main.style.display = "block";
    main_container.style.backgroundColor = 'white';
    main_container.style.minHeight = "700px";
    main_header.style.borderBottom = "1px solid lightgray";
    main_container.style.borderLeft = "10px solid white";
    main_container.style.borderRight = "10px solid white";
    main_header.style.display = "flex";
    main_header.style.justifyContent = "center";
    mainref.style.marginTop = "30px";
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchJsonData(url) {
    let response;
    let data;
    try {
        response = await fetch(url);
        if (!response.ok) {
            console.log(response.status);
        }
        data = await response.json();
    }
    catch (error) {
        console.log(error);
    }
    return data;
}
async function fetchTextData(url) {
    let response;
    let data;
    try {
        response = await fetch(url);
        if (!response.ok) {
            console.log(response.status);
        }
        data = await response.text();
    }
    catch (error) {
        console.log(error);
    }
    return data;
}
function sidenavHandler() {
    //logging für den Seitennavigator
    return {
        set(target, key, value) {
            console.log(key + " wurde auf " + value + " gesetzt");
            target[key] = value;
            return true;
        },
        get(target, key) {
            console.log(key + " wurde gelesen");
            return target[key];
        }
    };
}
function Schleife({ start = 0, end = 10, step = 1, func = console.log }) {
    for (let i = start; i < end; i += step) {
        func(i);
    }
}
function profileCard() {
    // Under Construction ...
    const mainref = document.getElementById("main");
    mainref.replaceChildren();
    var picdiv = document.createElement("div");
    let i = document.createElement("i");
    picdiv.style.borderRadius = "100%";
    i.setAttribute("class", "fa fa-user-circle-o fa-5x");
    picdiv.appendChild(i);
    mainref.appendChild(picdiv);
}
export { setup_tic_tac_toe };
