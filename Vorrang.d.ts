declare class Vorrang<T> {
    constructor(array2d: T[][]);
    verbleibend: Array<T>[];
    array2d: Array<T>[];
    adj: Array<T>[];
    stack: Array<T>;
    besucht: Array<T>;
    alleKnoten: Array<T>;
    knotenSet: Set<T>;
    anzahlVorrang: number;
    setupAdj(): void;
    printAdj(): void;
    printStack(): void;
    printKnotenSet(): void;
    returnSortierung(): T[];
    identifyKnoten(): void;
    addKante(k1: T, k2: T): void;
    topsorthelper(knoten: T): void;
    topologischSortieren(knoten: T): void;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
export { Vorrang };
