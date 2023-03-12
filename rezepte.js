import { resetMainbereich } from "./script";
import { elementFactory } from "./script";
import { fetchJsonData } from "./script";
async function setup_rezepte() {
    const [main, main_header, main_main] = resetMainbereich();
    const data = await fetchJsonData("./rezepte.json");
    const div = elementFactory("div", {}, "border:1px solid black; min-width:50px; min-height:25px;");
    const p = elementFactory("p", {}, "", "Platzhalter");
}
function createRezeptCard() {
    const div = elementFactory("div", {}, "border:1px solid black; min-width:50px; min-height:25px;");
    const p = elementFactory("p", {}, "", "Platzhalter");
}
