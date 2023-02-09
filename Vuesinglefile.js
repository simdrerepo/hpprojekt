import { resetMainbereich } from "./script.js";
export { vue_singlefile };
import { elementFactory } from "./script.js";
function vue_singlefile() {
    const [mainref, main_header, main_main] = resetMainbereich();
    let header = elementFactory("h1", {}, "", "Vue Single Component");
    let headerdiv = elementFactory("div", {}, "");
    headerdiv.appendChild(header);
    main_header.appendChild(headerdiv);
    let div = elementFactory("div", { id: "vuediv" }, "");
    let vuedivcontainer = elementFactory("div", {}, "display:flex; justify-content:center;");
    vuedivcontainer.appendChild(div);
    let para1 = elementFactory("p", {}, "", "Buchstaben : {{buchstaben}}");
    let para2 = elementFactory("p", {}, "", "Leerzeichen :{{leerzeichen}}");
    let para3 = elementFactory("p", {}, "", "Worte : {{worte}}");
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    let input = elementFactory("input", { type: "text", }, "");
    input.setAttribute("v-on:input", "handler");
    input.setAttribute("ref", "inputfield");
    div.appendChild(input);
    main_main.appendChild(vuedivcontainer);
    var vm = new Vue({
        el: '#vuediv',
        data: {
            buchstaben: 0,
            leerzeichen: 0,
            worte: 0,
        },
        methods: {
            handler: function (event) {
                let text = this.$refs.inputfield.value;
                this.buchstaben = Array.from(text.replaceAll(" ", "")).length;
                this.leerzeichen = Array.from(text).length - Array.from(text.replaceAll(" ", "")).length;
                let woerter = Array.from(text.split(" "));
                let arr = woerter.filter(wort => wort != "");
                this.worte = arr.length;
            },
        }
    });
}
