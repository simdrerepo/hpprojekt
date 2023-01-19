import { setup_tic_tac_toe } from "./Tictactoespiel.js";
export { sleep };
export { setupMainBereich };
export { MainBereichStyling };
export { resetMainbereich };
declare const resetMainbereich: () => HTMLDivElement[];
declare function setupMainBereich(): void;
declare function MainBereichStyling(): void;
declare function sleep(ms: number): Promise<unknown>;
export { setup_tic_tac_toe };