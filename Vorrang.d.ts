declare class Vorrang {
    constructor(array2d: any[][]);
    array2d: any[][];
    adj: any[];
    stack: any[];
    besucht: any[];
    alleKnoten: any[];
    knotenSet: any;
    anzahlVorrang: number;
    printAdj(): void;
    printStack(): void;
    printKnotenSet(): void;
    returnSortierung(): any[];
    identifyKnoten(): void;
    setupAdj(setSize: number): void;
    addKante(k1: any, k2: any): void;
    topsorthelper(knoten: any): void;
    topologischSortieren(knoten: any): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
export { Vorrang };
