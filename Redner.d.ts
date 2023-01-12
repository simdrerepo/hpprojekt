declare class Redner {
    constructor(name: string);
    startstopsymbol: string;
    name: string;
    counting: number;
    std: number;
    min: number;
    sek: number;
    intervalids: any[];
    setStartStopSymbol(string: string): void;
    timer(htmlElement: HTMLElement): void;
    swapSymbols(): void;
    clearAllIntervalIds(): void;
    stopAll(rednerArray: Redner[]): void;
    setAllButtonTextToStop(): void;
    myEventHandler(htmlElement: HTMLElement, button: HTMLElement, rednerArray: Redner[]): void;
    addRednerInListe(liste: HTMLElement, rednerobjintabelle: any): void;
    createRedner(rednerarray: Redner[]): HTMLTableElement;
}
export { Redner };
