import { sleep } from "./script.js";
import { fetchTextData } from "./script.js";
import { resetMainbereich } from "./script.js";
import { elementFactory } from "./script.js";
export { setup_TextkonkatenierungMitAwait };
const setup_TextkonkatenierungMitAwait = async () => {
    var [texta, textb] = await Promise.all([fetchTextData('http://127.0.0.1:5500/A.txt'), fetchTextData('http://127.0.0.1:5500/B.txt')]);
    const [main, main_header, main_main] = resetMainbereich();
    let promisediv = elementFactory("div", {}, "");
    let headerdiv = elementFactory("div", {}, "display:flex; justify-content:center; text-align:center;");
    let ueberschrift = elementFactory("h1", {}, "", "Zeilenweise Textkonkatenierung mit async / await");
    let div = elementFactory("div", {}, "display:flex; justify-content:center; margin-bottom:40px;");
    let textdiv = elementFactory("div", {}, "border:1px solid lightgrey; padding:10px; background-color:#e7e9eb;", "Konkateniert werden die Gedichte <b>Erlkönig</b> von <i>Johann Wolfgang von Goethe</i> sowie <b>Eine Frage</b> von <i>Kurt Tucholsky</i>");
    let p = elementFactory("p", {}, "");
    headerdiv.appendChild(ueberschrift);
    promisediv.append(p);
    main_header.appendChild(headerdiv);
    div.appendChild(textdiv);
    main_main.appendChild(div);
    main_main.appendChild(promisediv);
    let arrayA = texta.split(/\r?\n/);
    let arrayB = textb.split(/\r?\n/);
    let i = 0;
    while (i < arrayA.length) {
        sleep(100);
        p.innerHTML += arrayA[i];
        sleep(100);
        p.innerHTML += arrayB[i] + '<br>';
        i++;
    }
};
