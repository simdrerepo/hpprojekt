import { resetMainbereich } from "./script.js";
import { tic_tac_toe } from "./tic_tac_toe.js";
export { setup_tic_tac_toe };
const setup_tic_tac_toe = () => {
    const [main, main_header, main_main] = resetMainbereich();
    let div = document.createElement("div");
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Tic Tac Toe"));
    main_header.appendChild(header);
    let ttt = new tic_tac_toe(div);
    main_main.appendChild(div);
    div.style.display = "flex";
    div.style.justifyContent = "center";
};