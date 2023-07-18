import { resetMainbereich } from "./script.js";
import { Vorrang } from "./klassen/Vorrang.js";
import { elementFactory } from "./script.js";
import { addBrotkrümel } from "./script.js";
export { setup_TopSortAlsWebApp };
const setup_TopSortAlsWebApp = () => {
    const [main_container, main_main] = resetMainbereich();
    var liste = document.createElement("ul");
    var input1 = elementFactory("input", { type: "search", id: "input1" }, "grid-area:input1;font-size: clamp(0.6em, 4vw, 1.2em);");
    var input2 = elementFactory("input", { type: "search", id: "input2" }, "grid-area:input2;font-size: clamp(0.6em, 4vw, 1.2em);");
    let headline = elementFactory("h1", {}, "", false, "TopSort als Web-App");
    addBrotkrümel("Startseite", "TopSort als Web-App");
    let h1div = elementFactory("div", {}, "");
    h1div.appendChild(headline);
    main_main.appendChild(h1div);
    var resetbutton = elementFactory("button", { id: "resetbutton" }, "height:1.5rem; width:5rem; grid-area:reset; font-size: clamp(0.6em, 4vw, 1.2em);", false, "reset");
    resetbutton.addEventListener("click", () => setup_TopSortAlsWebApp());
    let button = elementFactory("button", { id: "sortbutton" }, "height:1.5rem; width:5rem; grid-area:sortieren;font-size: clamp(0.6em, 4vw, 1.2em);", false, "sortieren");
    let div = elementFactory("div", { id: "topsortinputsdiv" }, "");
    let inputdiv = elementFactory("div", { id: "inputdiv" }, "grid-area:inputdiv;");
    let buttondiv = elementFactory("div", { id: "buttondiv" }, "grid-area:buttondiv;");
    let addbutton = elementFactory("button", { id: "addbutton" }, "grid-area:hinzufügen; height:1.5rem; width:5rem;font-size: clamp(0.6em, 4vw, 1.2em);", false, "hinzufügen");
    inputdiv.appendChild(input1);
    inputdiv.appendChild(input2);
    buttondiv.appendChild(addbutton);
    buttondiv.appendChild(button);
    buttondiv.appendChild(resetbutton);
    div.appendChild(inputdiv);
    div.appendChild(buttondiv);
    let listdiv = elementFactory("div", {}, "");
    listdiv.appendChild(liste);
    main_main.appendChild(div);
    main_main.appendChild(listdiv);
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
            let li = elementFactory("li", {}, "padding:5px; border-left:1px solid lightgrey; border-right:1px solid lightgrey; border-bottom:1px solid lightgrey; background-color:lightyellow;");
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
