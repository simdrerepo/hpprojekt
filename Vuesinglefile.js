import { resetMainbereich } from "./script.js";
export { vue_singlefile };
function vue_singlefile() {
    const [mainref, main_header, main_main] = resetMainbereich();
    let headerdiv = document.createElement("div");
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Vue Single Component"));
    headerdiv.appendChild(header);
    main_header.appendChild(headerdiv);
    let div = document.createElement("div");
    let vuedivcontainer = document.createElement("div");
    vuedivcontainer.style.display = "flex";
    vuedivcontainer.style.justifyContent = "center";
    vuedivcontainer.appendChild(div);
    div.setAttribute("id", "vuediv");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    para1.textContent = "Buchstaben : {{buchstaben}}";
    para2.appendChild(document.createTextNode("Leerzeichen :{{leerzeichen}}"));
    para3.appendChild(document.createTextNode("Worte : {{worte}}"));
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
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
