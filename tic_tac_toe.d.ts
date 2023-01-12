declare class tic_tac_toe {
    constructor(div: HTMLElement);
    spieler: string;
    controller: AbortController;
    spielfeld: string[] | null[];
    spielfelddiv: HTMLElement;
    werFaengtAn(): void;
    setupSpielfeld(): void;
    addListener(): void;
    addResetButton(): void;
    changeSpieler(self: tic_tac_toe): void;
    istFrei(index: number, self: tic_tac_toe): boolean;
    getKoordinaten(rect: SVGRectElement): number[];
    drawRotatedLine(coords: number[]): SVGLineElement;
    drawLine(coords: number[]): SVGElement;
    drawCircle(coords: number[]): SVGElement;
    drawCross(linie1: SVGElement, linie2: SVGElement): SVGElement;
    drawOnSpielfeld(element: SVGElement): void;
    alertBannerAnzeigen(xOdero: string | null): void;
    gibtEsEinenGewinner(zeichen: string, objthisref: tic_tac_toe): string | null;
}
export { tic_tac_toe };
