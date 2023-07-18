class Vorrang {
    constructor(array2d) {
        this.array2d = array2d;
        this.adj = new Array();
        this.stack = new Array();
        this.besucht = new Array();
        this.alleKnoten = new Array();
        this.knotenSet = new Set();
        this.anzahlVorrang = 0;
        this.verbleibend = this.array2d;
        this.identifyKnoten();
        this.setupAdj();
        for (let i = 0; i < this.array2d.length; i++) {
            this.addKante(array2d[i][0], array2d[i][1]);
        }
        this.knotenSet.forEach((item) => this.topologischSortieren(item));
    }
    verbleibend;
    array2d;
    adj;
    stack;
    besucht;
    alleKnoten;
    knotenSet;
    anzahlVorrang;
    setupAdj() {
        for (let i = 0; i < this.knotenSet.size; i++) {
            this.adj.push([]);
        }
    }
    printAdj() {
        for (let i = 0; i < this.adj.length; i++) {
            for (let j = 0; j < this.adj[i].length; j++) {
                console.log(this.adj[i][j]);
            }
        }
    }
    printStack() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
    }
    printKnotenSet() {
        this.knotenSet.forEach((item) => { console.log(item); });
    }
    returnSortierung() {
        let tmpar = this.stack;
        let ar = new Array();
        while (tmpar.length != 0) {
            ar.push(tmpar.pop());
        }
        return ar;
    }
    identifyKnoten() {
        for (let i = 0; i < this.array2d.length; i++) {
            for (let j = 0; j < this.array2d[i].length; j++) {
                this.alleKnoten.push(this.array2d[i][j]);
                this.knotenSet.add(this.array2d[i][j]);
            }
        }
    }
    addKante(k1, k2) {
        let index = 0;
        let knotenSetarray = Array.from(this.knotenSet);
        for (let i = 0; i < knotenSetarray.length; i++) {
            if (knotenSetarray[i] === k1) {
                index = i;
            }
        }
        this.adj[index].push(k2);
    }
    topsorthelper(knoten) {
        this.besucht.push(knoten);
        for (let i = 0; i < this.array2d.length; i++) {
            this.array2d[i] = this.array2d[i].filter(item => item != knoten);
        }
        var anzahl = 0;
        for (let i = 0; i < this.array2d.length; i++) {
            if (this.array2d[i].length != 0) {
                anzahl++;
            }
        }
        this.anzahlVorrang = anzahl;
        let knotenArray = Array.from(this.knotenSet);
        let indexfuerknoten = 0;
        for (let i = 0; i < knotenArray.length; i++) {
            if (knotenArray[i] === knoten) {
                indexfuerknoten = i;
            }
        }
        for (let i = 0; i < this.adj[indexfuerknoten].length; i++) {
            if (!this.besucht.includes(this.adj[indexfuerknoten][i])) {
                this.topsorthelper(this.adj[indexfuerknoten][i]);
            }
        }
        this.stack.push(knoten);
    }
    topologischSortieren(knoten) {
        if (!this.besucht.includes(knoten)) {
            this.topsorthelper(knoten);
        }
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.knotenSet.size; i++) {
            yield this.stack[this.knotenSet.size - 1 - i];
        }
    }
}
export { Vorrang };
