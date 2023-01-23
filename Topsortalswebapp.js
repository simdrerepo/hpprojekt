import { resetMainbereich } from "./script.js";
import { Vorrang } from "./Vorrang.js";
export { setup_TopSortAlsWebApp };
const setup_TopSortAlsWebApp = () => {
    const [main, main_header, main_main] = resetMainbereich();
    var liste = document.createElement("ul");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "search");
    input1.setAttribute("id", "input1");
    input1.style.gridArea = "input1";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "search");
    input2.setAttribute("id", "input2");
    input2.style.gridArea = "input2";
    let main_header_ref = document.getElementById("mainheader");
    let main_main_ref = document.getElementById("main_main");
    let headline = document.createElement("h1");
    let h1div = document.createElement("div");
    headline.appendChild(document.createTextNode("TopSort als Web-App"));
    h1div.appendChild(headline);
    main_header_ref.appendChild(h1div);
    var resetbutton = document.createElement("button");
    resetbutton.setAttribute("id", "resetbutton");
    resetbutton.textContent = "reset";
    resetbutton.style.height = "1.5rem";
    resetbutton.style.width = "5rem";
    resetbutton.style.gridArea = "reset";
    resetbutton.addEventListener("click", () => setup_TopSortAlsWebApp());
    let button = document.createElement("button");
    button.style.gridArea = "sortieren";
    button.setAttribute("id", "sortbutton");
    button.textContent = 'sortieren';
    button.style.height = "1.5rem";
    button.style.width = "5rem";
    let div = document.createElement("div");
    div.setAttribute("id", "topsortinputsdiv");
    let inputdiv = document.createElement("div");
    inputdiv.setAttribute("id", "inputdiv");
    inputdiv.style.gridArea = "inputdiv";
    let buttondiv = document.createElement("div");
    buttondiv.setAttribute("id", "buttondiv");
    buttondiv.style.gridArea = "buttondiv";
    let addbutton = document.createElement("button");
    addbutton.setAttribute("id", "addbutton");
    addbutton.style.gridArea = "hinzufügen";
    addbutton.textContent = 'hinzufügen';
    addbutton.style.height = "1.5rem";
    addbutton.style.width = "5rem";
    inputdiv.appendChild(input1);
    inputdiv.appendChild(input2);
    buttondiv.appendChild(addbutton);
    buttondiv.appendChild(button);
    buttondiv.appendChild(resetbutton);
    div.appendChild(inputdiv);
    div.appendChild(buttondiv);
    let listdiv = document.createElement("div");
    listdiv.appendChild(liste);
    main_main_ref.appendChild(div);
    main_main_ref.appendChild(listdiv);
    var sortiert = 0;
    button.addEventListener("click", () => {
        if (sortiert === 0) {
            var vorrang2dArray = new Array();
            let col = Array.from(liste.querySelectorAll("li"));
            col.forEach(ele => {
                let str = ele.textContent.replaceAll("[", "").replaceAll("]", "").replaceAll(",", " ").split(" ");
                vorrang2dArray.push(str);
            });
            let graph = new Vorrang(vorrang2dArray);
            let li = document.createElement("li");
            li.style.padding = "5px";
            li.style.borderLeft = "1px solid lightgrey";
            li.style.borderRight = "1px solid lightgrey";
            li.style.borderBottom = "1px solid lightgrey";
            li.style.backgroundColor = "lightyellow";
            var ergstack = graph.returnSortierung();
            var ergstr = "";
            ergstack.forEach(ele => { ergstr += ele + " "; });
            li.appendChild(document.createTextNode("Sortierung (v.l.n.r) = " + ergstr));
            liste.appendChild(li);
            sortiert = 1;
        }
    });
    var ele_cntr = 0;
    addbutton.addEventListener("click", (e) => {
        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");
        if (input1.value && input2.value) {
            if (sortiert === 0) {
                let li = document.createElement("li");
                li.style.padding = "5px";
                if (ele_cntr === 0) {
                    li.style.border = "1px solid lightgrey";
                }
                if (ele_cntr % 2 === 0) {
                    li.style.backgroundColor = "#f4f4f4";
                }
                if (ele_cntr % 2 === 1) {
                    li.style.backgroundColor = "white";
                }
                if (ele_cntr != 0) {
                    li.style.borderLeft = "1px solid lightgrey";
                    li.style.borderRight = "1px solid lightgrey";
                    li.style.borderBottom = "1px solid lightgrey";
                }
                ;
                li.appendChild(document.createTextNode("[" + input1.value.trim() + "," + input2.value.trim() + "]"));
                liste.appendChild(li);
                ele_cntr++;
                input1.value = "";
                input2.value = "";
            }
        }
    });
};
