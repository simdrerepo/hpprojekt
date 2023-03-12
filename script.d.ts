import { setup_tic_tac_toe } from "./Tictactoespiel.js";
import { setup_covid19_mapchart } from "./charts.js";
import { domBenchmarks } from "./dombenchmarks.js";
import { vue_singlefile } from "./Vuesinglefile.js";
export { sleep };
export { setupMainBereich };
export { resetMainbereich };
export { fetchJsonData };
export { sidenavHandler };
export { fetchTextData };
export declare function filterObject(obj: any, string: string): {
    [k: string]: unknown;
};
export declare function objectFabric(): {
    webinventors: {
        textcontent: string;
        funktion: () => void;
    };
    dombenchmarks: {
        textcontent: string;
        funktion: typeof domBenchmarks;
    };
    rednermitzeitmessung: {
        textcontent: string;
        funktion: () => void;
    };
    topsort: {
        textcontent: string;
        funktion: () => void;
    };
    klammerpaare: {
        textcontent: string;
        funktion: () => void;
    };
    textanalyse: {
        textcontent: string;
        funktion: () => Promise<void>;
    };
    asyncawait: {
        textcontent: string;
        funktion: () => Promise<void>;
    };
    promises: {
        textcontent: string;
        funktion: () => void;
    };
    tictactoe: {
        textcontent: string;
        funktion: () => void;
    };
    mapchart: {
        textcontent: string;
        funktion: typeof setup_covid19_mapchart;
    };
    vuesinglefile: {
        textcontent: string;
        funktion: typeof vue_singlefile;
    };
    fragen: {
        textcontent: string;
        funktion: () => void;
    };
    code: {
        textcontent: string;
        funktion: () => void;
    };
};
declare const resetMainbereich: () => HTMLDivElement[];
declare function setupMainBereich(): void;
declare function sleep(ms: number): Promise<unknown>;
declare function fetchJsonData(url: string): Promise<any>;
declare function fetchTextData(url: string): Promise<any>;
declare function sidenavHandler(): Object;
export declare function elementFactory(typ: string, attributes: any, style: string, ishtml?: boolean, ...children: any[]): HTMLElement;
export declare function setCssProperties(htmlElement: HTMLElement, props: string): void;
export declare function addToTable(table: HTMLTableElement, cellContent: any[][], headlinecontent: string[], colorHeadline?: string, colorRows?: string): void;
export declare function addToList(liste: HTMLElement, content: any[], color_notodd?: string): HTMLElement;
export declare function addBrotkrümel(...brotkrümel: any[]): void;
export declare function addBrotkrümelv2(obj: any, icon: string): void;
export { setup_tic_tac_toe };
