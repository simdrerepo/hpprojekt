declare class tic_tac_toe {
    constructor(div: HTMLElement);
    kreuzId: number;
    kreisId: number;
    spieler: string;
    controller: AbortController;
    spielfeld: any[];
    spielfelddiv: HTMLElement;
    freiefelder: number;
    werFaengtAn(): void;
    printSpielfeld(): void;
    setupSpielfeld(): void;
    animiereKreuz(id: string): void;
    animiereKreis(id: string): void;
    addListener(): void;
    getId(ref: SVGElement): string | null;
    addResetButton(): void;
    changeSpieler(self: tic_tac_toe): void;
    istFrei(index: number, self: tic_tac_toe): boolean;
    getKoordinaten(rect: SVGRectElement): number[];
    drawRotatedLine(coords: number[]): SVGLineElement;
    drawLine(coords: number[]): SVGElement;
    drawCircle(coords: number[]): SVGElement;
    drawCross(linie1: SVGElement, linie2: SVGElement): SVGElement;
    drawOnSpielfeld(element: SVGElement): void;
    alertBannerAnzeigen(xOdero: any[]): void;
    gibtEsEinenGewinner(zeichen: string, objthisref: tic_tac_toe): any[];
}
export { tic_tac_toe };
