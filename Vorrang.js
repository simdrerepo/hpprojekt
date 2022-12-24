"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Vorrang = void 0;
var Vorrang = /** @class */ (function () {
    function Vorrang(array2d) {
        var _this = this;
        this.array2d = array2d;
        this.adj = new Array();
        this.stack = new Array();
        this.besucht = new Array();
        this.alleKnoten = new Array();
        this.knotenSet = new Set();
        this.anzahlVorrang = 0;
        this.identifyKnoten();
        this.setupAdj(this.knotenSet.size);
        for (var i in this.array2d) {
            this.addKante(array2d[i][0], array2d[i][1]);
        }
        this.knotenSet.forEach(function (item) { return _this.topologischSortieren(item); });
    }
    Vorrang.prototype.printAdj = function () {
        for (var i in this.adj) {
            for (var j in this.adj[i]) {
                console.log(this.adj[i][j]);
            }
        }
    };
    Vorrang.prototype.printStack = function () {
        for (var i in this.stack) {
            console.log(this.stack[i]);
        }
    };
    Vorrang.prototype.printKnotenSet = function () {
        this.knotenSet.forEach(function (item) { console.log(item); });
    };
    Vorrang.prototype.identifyKnoten = function () {
        for (var i in this.array2d) {
            for (var j in this.array2d[i]) {
                this.alleKnoten.push(this.array2d[i][j]);
                this.knotenSet.add(this.array2d[i][j]);
            }
        }
    };
    Vorrang.prototype.setupAdj = function (setSize) {
        for (var i = 0; i < setSize; i++) {
            this.adj.push([]);
        }
    };
    Vorrang.prototype.addKante = function (k1, k2) {
        var index = 0;
        var knotenSetarray = Array.from(this.knotenSet);
        for (var i = 0; i < knotenSetarray.length; i++) {
            if (knotenSetarray[i] === k1) {
                index = i;
            }
        }
        this.adj[index].push(k2);
    };
    Vorrang.prototype.topsorthelper = function (knoten) {
        this.besucht.push(knoten);
        for (var i in this.array2d) {
            this.array2d[i] = this.array2d[i].filter(function (item) { return item != knoten; });
        }
        var anzahl = 0;
        for (var i in this.array2d) {
            if (this.array2d[i].length != 0) {
                anzahl++;
            }
        }
        this.anzahlVorrang = anzahl;
        var knotenArray = Array.from(this.knotenSet);
        var indexfuerknoten = 0;
        for (var i = 0; i < knotenArray.length; i++) {
            if (knotenArray[i] === knoten) {
                indexfuerknoten = i;
            }
        }
        for (var i = 0; i < this.adj[indexfuerknoten].length; i++) {
            if (!this.besucht.includes(this.adj[indexfuerknoten][i])) {
                this.topsorthelper(this.adj[indexfuerknoten][i]);
            }
        }
        this.stack.push(knoten);
    };
    Vorrang.prototype.topologischSortieren = function (knoten) {
        if (!this.besucht.includes(knoten)) {
            this.topsorthelper(knoten);
        }
    };
    Vorrang.prototype[Symbol.iterator] = function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < this.knotenSet.size)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.stack[this.knotenSet.size - 1 - i]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    return Vorrang;
}());
exports.Vorrang = Vorrang;
