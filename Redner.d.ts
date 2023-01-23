declare function makeRedner(name: string): {
    name: string;
    std: number;
    min: number;
    sek: number;
    counting: number;
    intervalids: number[];
    startstopsymbol: string;
    timer: (htmlElement: HTMLElement) => void;
    swapSymbols: () => void;
    setStartStopSymbol: (string: string) => void;
    clearAllIntervalIds: () => void;
    stopAll: (rednerArray: any[]) => void;
    setAllButtonTextToStop: () => void;
    myEventHandler: (htmlElement: HTMLElement, button: HTMLElement, rednerArray: any[]) => void;
    addRednerInListe: (liste: HTMLElement, rednerobjintabelle: any) => void;
    createRedner: (rednerarray: any[]) => HTMLTableElement;
};
export { makeRedner };
