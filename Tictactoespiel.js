import { elementFactory, resetMainbereich } from "./script.js";
import { tic_tac_toe } from "./klassen/tic_tac_toe.js";
import { addBrotkrümel } from "./script.js";
export { setup_tic_tac_toe };
const setup_tic_tac_toe = () => {
    const [main, main_header, main_main] = resetMainbereich();
    let div = elementFactory("div", {}, "display:flex; justify-content:center;");
    let header = elementFactory("h1", {}, "", false, "Tic Tac Toe");
    addBrotkrümel("Startseite", "Tic Tac Toe");
    main_header.appendChild(header);
    let ttt = new tic_tac_toe(div);
    main_main.appendChild(div);
};
