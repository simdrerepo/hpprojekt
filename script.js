import { setup_TopSortAlsWebApp } from "./Topsortalswebapp.js";
import { setup_tic_tac_toe } from "./Tictactoespiel.js";
import { setup_covid19_mapchart } from "./charts.js";
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
export { resetMainbereich };
export { fetchJsonData };
export { sidenavHandler };
export { fetchTextData };
const json = await fetchJsonData("./content.json");
setup_JsonImportieren();
export function filterObject(obj, string) {
    return Object.fromEntries(Object.entries(obj).filter(([a, b]) => { return a === string; }));
}
export function objectFabric() {
    const obj = {
        webinventors: { textcontent: "Web Inventors", funktion: setup_webInventors },
        dombenchmarks: { textcontent: "Dom Benchmarks", funktion: domBenchmarks },
        rednermitzeitmessung: { textcontent: "Redner mit Zeitmessung", funktion: setup_RednerMitZeitmessung },
        topsort: { textcontent: "Topsort als Webapp", funktion: setup_TopSortAlsWebApp },
        klammerpaare: { textcontent: "Klammerpaare", funktion: setup_Klammerpaare },
        textanalyse: { textcontent: "Textanalyse", funktion: setup_TextAnalyse },
        asyncawait: { textcontent: "Textkonkatenierung mit async/await", funktion: setup_TextkonkatenierungMitAwait },
        promises: { textcontent: "Textkonkatenierung mit Promises", funktion: setup_TextkonkatenierungMitPromises },
        tictactoe: { textcontent: "Tic Tac Toe", funktion: setup_tic_tac_toe },
        mapchart: { textcontent: "Covid-19 mapchart", funktion: setup_covid19_mapchart },
        vuesinglefile: { textcontent: "Vue Single Component", funktion: vue_singlefile },
        fragen: { textcontent: "Fragen und Antworten", funktion: fragenAntworten },
        code: { textcontent: "Funktionen in Javascript", funktion: codeUebung }
    };
    return obj;
}
(function ListenerVergeben() {
    const buttonarray = Array.from(document.getElementsByClassName("regularButton"));
    const obj = {
        webinventors: { textcontent: "Web Inventors", funktion: setup_webInventors },
        dombenchmarks: { textcontent: "Dom Benchmarks", funktion: domBenchmarks },
        rednermitzeitmessung: { textcontent: "Redner mit Zeitmessung", funktion: setup_RednerMitZeitmessung },
        topsort: { textcontent: "Topsort als Webapp", funktion: setup_TopSortAlsWebApp },
        klammerpaare: { textcontent: "Klammerpaare", funktion: setup_Klammerpaare },
        textanalyse: { textcontent: "Textanalyse", funktion: setup_TextAnalyse },
        asyncawait: { textcontent: "Textkonkatenierung mit async/await", funktion: setup_TextkonkatenierungMitAwait },
        promises: { textcontent: "Textkonkatenierung mit Promises", funktion: setup_TextkonkatenierungMitPromises },
        tictactoe: { textcontent: "Tic Tac Toe", funktion: setup_tic_tac_toe },
        mapchart: { textcontent: "Covid-19 mapchart", funktion: setup_covid19_mapchart },
        vuesinglefile: { textcontent: "Vue Single Component", funktion: vue_singlefile },
        fragen: { textcontent: "Fragen und Antworten", funktion: fragenAntworten },
        code: { textcontent: "Funktionen in Javascript", funktion: codeUebung }
    };
    setup_headernav(obj);
    const functionArray = [setup_webInventors, domBenchmarks, setup_RednerMitZeitmessung, setup_TopSortAlsWebApp, setup_Klammerpaare, setup_TextAnalyse, setup_TextkonkatenierungMitPromises, setup_TextkonkatenierungMitAwait, setup_tic_tac_toe, setup_covid19_mapchart, vue_singlefile, fragenAntworten, codeUebung];
    const dropdownbuttoncol = Array.from(document.getElementsByClassName("drpdwnbtn"));
    const sidebuttondiv = document.getElementById("sidebutton");
    const buttoncollection = Array.from(sidebuttondiv.getElementsByTagName("button"));
    var buttonclicked = new Array();
    dropdownbuttoncol.forEach(() => { buttonclicked.push(false); });
    buttonarray.forEach(button => { button.addEventListener("click", functionArray[buttonarray.indexOf(button)]); });
    for (const c of dropdownbuttoncol) {
        c.addEventListener("click", hideShowDropDownContainer.bind(c));
    }
    for (const b of buttoncollection) {
        b.style.cursor = "pointer";
        b.addEventListener("mouseover", function () { this.style.backgroundColor = this.style.backgroundColor = "#cfe8fd"; });
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
function mouseOver(farbe = "#34568B") {
    this.style.backgroundColor = farbe;
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
const resetMainbereich = () => {
    const mainref = document.getElementById("main");
    const main_container = document.getElementById("main_container");
    mainref.replaceChildren();
    setupMainBereich();
    const main_header = document.getElementById("mainheader");
    const main_main = document.getElementById("main_main");
    return [main_container, main_main];
};
function setupMainBereich() {
    // Hier wird ein Bereich(header,main) eingerichtet, um später Inhalte dort hineinzuladen
    const mainref = document.getElementById("main");
    const brotkrümelrahmen = elementFactory("div", { id: "brotkrümel" }, "border-bottom:1px solid lightgrey;");
    let main_container = elementFactory("div", { id: "main_container" }, "background-color:white; min-height:700px; padding-left:10px;padding-right:10px;");
    let main_main = elementFactory("div", { id: "main_main" }, "background-color:white; display:block;margin-top:20px;");
    let main_footer = elementFactory("id", { id: "main_footer" }, "");
    main_container.appendChild(brotkrümelrahmen);
    main_container.appendChild(main_main);
    mainref.appendChild(main_container);
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
export function elementFactory(typ, attributes, style, ishtml = false, ...children) {
    const el = document.createElement(typ);
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, String(value));
    }
    el.style.cssText = style;
    for (const c of children) {
        if (ishtml === false && typeof c === "string") {
            el.appendChild(document.createTextNode(c));
        }
        else if (ishtml === true) {
            el.innerHTML = c;
        }
        else {
            el.appendChild(c);
        }
    }
    return el;
}
export function setCssProperties(htmlElement, props) {
    htmlElement.style.cssText = props;
}
function isHTML(string) {
    var ret = false;
    const div = document.createElement("div");
    div.innerHTML = string;
    const childnodes = Array.from(div.getElementsByTagName("*"));
    childnodes.forEach(node => { if (node.nodeType === 1) {
        ret = true;
    } });
    return ret;
}
(function home() {
    const mainref = document.getElementById("main");
    const homebutton = document.getElementById("homebutton");
    homebutton.addEventListener("click", () => { mainref.replaceChildren(); addBrotkrümel("Startseite"); });
})();
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
export function addToTable(table, cellContent, headlinecontent, colorHeadline = "white", colorRows = "#dddddd") {
    // For headline
    if (headlinecontent.length > 0) {
        var firstrow = table.insertRow(-1);
        setCssProperties(firstrow, `background-color:${colorHeadline};`);
        for (const c of headlinecontent) {
            let firstcells = firstrow.insertCell(headlinecontent.indexOf(c));
            firstcells.innerHTML = c;
        }
    }
    // actual content
    for (let i = 0; i < cellContent.length; i++) {
        let row = table.insertRow(-1);
        if (i % 2 === 0) {
            setCssProperties(row, `background-color:${colorRows};`);
        }
        for (let j = 0; j < cellContent[i].length; j++) {
            if (isHTML(cellContent[i][j])) {
                let cell = row.insertCell(j);
                cell.textContent = cellContent[i][j];
                console.log(cellContent[i][j]);
            }
            else if (typeof cellContent[i][j] === "string") {
                let cell = row.insertCell(j);
                cell.textContent = cellContent[i][j];
            }
            else {
                let cell = row.insertCell(j);
                cell.textContent = cellContent[i][j];
            }
        }
    }
}
export function addToList(liste, content, color_notodd = "#dddddd") {
    content.forEach(c => {
        const li = document.createElement("li");
        content.indexOf(c) === 0 ? li.style.backgroundColor = color_notodd : li.style.backgroundColor = "white";
        if (isHTML(c)) {
            li.innerHTML = c;
        }
        else {
            li.textContent = c;
        }
        liste.appendChild(li);
    });
    return liste;
}
function setup_headernav(object) {
    const navdropdown = document.getElementsByClassName("navbardropdown");
    for (const key of Object.values(object)) {
        const button = elementFactory("button", {}, "border:none; color:white; padding:7px; background-color:#34568B; align:left; cursor:pointer;width100%;");
        button.textContent = Object(key).textcontent;
        button.addEventListener("click", Object(key).funktion);
        navdropdown[0].appendChild(button);
    }
}
function setup_headerbar_withjsonimports(functionArray) {
    functionArray.forEach(f => {
        const button = elementFactory("button", {}, "");
        const div = elementFactory("div", {}, "");
    });
}
export function addBrotkrümel(...brotkrümel) {
    const bkdiv = document.getElementById("brotkrümel");
    bkdiv?.replaceChildren();
    const href = elementFactory("a", { href: "#" }, "", false, "Link");
    href.addEventListener("click", () => setup_webInventors());
    for (const c of brotkrümel) {
        const arrow = elementFactory("i", { class: "fa fa-angle-double-right" }, "margin-left:10px; margin-right:10px;");
        bkdiv?.appendChild(document.createTextNode(c));
        bkdiv?.appendChild(arrow);
    }
    const lastchild = bkdiv?.lastChild;
    bkdiv?.removeChild(lastchild);
}
export function addBrotkrümelv2(obj, icon) {
    const bkdiv = document.getElementById("brotkrümel");
    const mainref = document.getElementById("main");
    bkdiv?.replaceChildren();
    const href = elementFactory("a", { href: "#" }, "");
    const arrow = elementFactory("i", { class: icon }, "margin-left:10px; margin-right:10px;");
    href.textContent = "Startseite";
    bkdiv?.appendChild(href);
    bkdiv?.appendChild(arrow);
    href.addEventListener("click", () => { mainref.replaceChildren(); addBrotkrümelv2({}, "fa fa-angle-right"); });
    for (const key of Object.values(obj)) {
        const href = elementFactory("a", { href: "#" }, "");
        href.textContent = Object(key).textcontent;
        href.addEventListener("click", () => Object(key).funktion);
        const arrow = elementFactory("i", { class: icon }, "margin-left:10px; margin-right:10px;");
        bkdiv?.appendChild(href);
        bkdiv?.appendChild(arrow);
    }
    const lastchild = bkdiv?.lastChild;
    bkdiv?.removeChild(lastchild);
}
export { setup_tic_tac_toe };
