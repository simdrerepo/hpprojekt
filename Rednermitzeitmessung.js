import { resetMainbereich } from "./script.js";
import { makeRedner } from "./Redner.js";
import { elementFactory } from "./script.js";
export { setup_RednerMitZeitmessung };
const setup_RednerMitZeitmessung = () => {
    const [main, main_header, main_main] = resetMainbereich();
    let h1 = elementFactory("h1", {}, "text-align:center;", "Rednerliste mit Zeitmessung");
    const labelinputdiv = elementFactory("div", { id: "labelinput" }, "grid-area:labelinputdiv;");
    let eingabediv = elementFactory("div", { id: "rednerdiv" }, "grid-area:eingabediv; display:flex; justify-content:center; flex-wrap=wrap;");
    let listendiv = elementFactory("div", {}, "display:flex; justify-content:center;");
    var liste = elementFactory("ul", {}, "");
    let eingabe = elementFactory("input", { type: "search", id: "eingabe" }, "width:5rem; height:1.5rem; grid-area:input;", "");
    let eingabelabel = elementFactory("label", { for: "eingabe", id: "label" }, "grid-area:label", "Neuer Redner");
    var eingabebutton = elementFactory("button", { id: "button" }, "width:5rem; height:1.5rem; grid-area:button;", "hinzufügen");
    main_header.appendChild(h1);
    eingabediv.appendChild(eingabelabel);
    eingabediv.appendChild(eingabe);
    eingabediv.appendChild(eingabebutton);
    listendiv.appendChild(liste);
    main_main.appendChild(eingabediv);
    main_main.appendChild(listendiv);
    var rednerarray = new Array();
    eingabebutton.addEventListener("click", () => {
        if (eingabe.value != "") {
            let redner = makeRedner(eingabe.value.trim());
            redner.addRednerInListe(liste, redner.createRedner(rednerarray));
            eingabe.value = "";
        }
    });
};
