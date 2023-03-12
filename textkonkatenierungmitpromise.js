import { resetMainbereich } from "./script.js";
export { setup_TextkonkatenierungMitPromises };
import { elementFactory } from "./script.js";
import { addBrotkrümel } from "./script.js";
const setup_TextkonkatenierungMitPromises = () => {
    const [main, main_header, main_main] = resetMainbereich();
    var promisediv = elementFactory("div", {}, "display:center; justify-content:center;");
    let div = elementFactory("div", {}, "display:flex; justify-content:center; margin-bottom:40px;");
    let textdiv = elementFactory("div", {}, "border:1px solid lightgrey; border-left:5px solid grey; padding:10px; background-color:#e7e9eb;", true, "<p>Konkateniert werden die Gedichte <b>Erlkönig</b> von <i>Johann Wolfgang von Goethe</i> sowie <b>Eine Frage</b> von <i>Kurt Tucholsky</i></p>");
    div.appendChild(textdiv);
    main_main.appendChild(div);
    let h1 = elementFactory("h1", {}, "text-align:center;", false, "Zeilenweise Textkonkatenierung mit Promises");
    addBrotkrümel("Startseite", "Textkonkatenierung mit Promises");
    main_header.appendChild(h1);
    var p = elementFactory("p", {}, "");
    fetch('http://127.0.0.1:5500/A.txt').catch((error) => { throw new Error("Error : " + error); }).then(response => response.text()).then(text => {
        let arrayA = text.split(/\r?\n/);
        fetch('http://127.0.0.1:5500/B.txt').catch(error => { throw new Error("Error : ") + error; }).then(response => response.text()).then(text => {
            let arrayB = text.split(/\r?\n/);
            for (let i = 0; i < arrayA.length; i++) {
                setTimeout(() => p.innerHTML += arrayA[i], 10);
                setTimeout(() => p.innerHTML += arrayB[i] + '<br>', 10);
            }
        });
    });
    promisediv.appendChild(p);
    main_main.appendChild(promisediv);
};
