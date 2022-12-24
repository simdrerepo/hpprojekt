var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function removeChildrenInDiv(div) {
    div.replaceChildren();
}
(function AddClickListenerToButton() {
    //Clicklistener für die Button im Sidenav
    var sandwichbutton = document.getElementById("sandwichbutton");
    sandwichbutton.addEventListener("click", openCloseSideNav);
    console.log(sandwichbutton);
    var loginbutton = document.getElementById("loginbutton");
    loginbutton.addEventListener("click", function () { return setup_login(); });
    var buttonarray = Array.from(document.getElementsByClassName("regularButton"));
    var functionArray = [domBenchmarks, setupU_5_2, setupU_5_3, setupU_6_1, setupU_7, setupU_8_1, setupU_8_2, setup_tic_tac_toe, setup_covid19_barchart, vue_singlefile];
    buttonarray.forEach(function (button) { button.addEventListener("click", functionArray[buttonarray.indexOf(button)]); });
})();
(function loginButtonStylingPlusHover() {
    var loginbutton = document.getElementById("loginbutton");
    loginbutton.addEventListener("mouseover", function () { this.style.textDecoration = "underline"; this.style.textUnderlineOffset = "0.3em"; });
    loginbutton.addEventListener("mouseleave", function () { this.style.textDecoration = "none"; });
})();
var setup_login = function () {
    var mainref = document.getElementById("main");
    removeChildrenInDiv(mainref);
    var container = document.createElement("div");
    var form = document.createElement("form");
    form.setAttribute("action", "action='<?php echo $_SERVER['PHP_SELF'] ?>'");
    form.setAttribute("method", "POST");
    form.innerHTML =
        'E-mail: <input type="text" name="email"><br>' +
            'Passwort: <input type="text" name="pw"><br>' +
            '<input type="submit" id="submit">';
    container.style.backgroundColor = "white";
    container.style.marginTop = "30px";
    container.style.minHeight = "700px";
    console.log(container);
    mainref.appendChild(container);
};
var tic_tac_toe = /** @class */ (function () {
    function tic_tac_toe() {
        this.spieler = "o";
        this.controller = new AbortController();
        this.spielfeld = [null, null, null, null, null, null, null, null, null];
    }
    tic_tac_toe.prototype.werFaengtAn = function () {
        //Beginnender Spieler wird zufällig ermittelt
        var oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
        if (oneOrZero === 1) {
            this.spieler = "x";
        }
        else {
            this.spieler = "o";
        }
    };
    tic_tac_toe.prototype.setupSpielfeld = function (div) {
        //Das Spielfeld wird in ein div nach Wahl geladen
        //Jedes Feld ist 10x10 Groß
        div.innerHTML = '<svg id ="svg" width="300"height="400"viewBox="0 0 32 32">'
            + '<line x1="10.5"y1="0"x2="10.5"y2="32"stroke="black"stroke-width="1"></line>' +
            '<line x1="21.5"y1="0"x2="21.5"y2="32"stroke="black"stroke-width="1"></line>' +
            '<line x1="0"y1="10.5"x2="32"y2="10.5"stroke="black"stroke-width="1"></line>' +
            '<line x1="0"y1="21.5"x2="32"y2="21.5"stroke="black"stroke-width="1"></line>' +
            '<rect x="0"y="0"width="10"height="10"fill="white"></rect>' +
            '<rect x="11"y="0"width="10"height="10"fill="white"></rect>' +
            '<rect x="22"y="0"width="10"height="10"fill="white"></rect>' +
            '<rect x="0"y="11"width="10"height="10"fill="white"></rect>' +
            '<rect x="11"y="11"width="10"height="10"fill="white"></rect>' +
            '<rect x="22"y="11"width="10"height="10"fill="white"></rect>' +
            '<rect x="0"y="22"width="10"height="10"fill="white"></rect>' +
            '<rect x="11"y="22"width="10"height="10"fill="white"></rect>' +
            '<rect x="22"y="22"width="10"height="10"fill="white"></rect>' +
            '</svg>';
    };
    tic_tac_toe.prototype.addListener = function (div) {
        //Click-Listener für jedes Feld
        var rectcollection = Array.from(div.querySelectorAll("rect"));
        //Objekt this-Referenz abspeichern
        var self = this;
        rectcollection.forEach(function (rect) {
            rect.addEventListener("click", function handler() {
                //Vergabe einer id für ein Feld
                var listenerid = rectcollection.indexOf(rect);
                if (self.istFrei(listenerid, self)) {
                    //Wenn ein Feld noch nicht bespielt wurde, dann...
                    if (self.spieler === "o") {
                        var coords = self.getKoordinaten(this); // Koordinaten des Feldes ermitteln               
                        var circle = self.drawCircle(coords); // Kreis erzeugen
                        self.drawOnSpielfeld(circle); // Aufs Spielfeld damit
                        self.spielfeld[listenerid] = "o"; //Feld wird markiert mit aktuellem Spieler
                        setTimeout(function () { return self.gibtEsEinenGewinner("o", self); }, 10); //Gewinn Bedingungen checken
                        self.changeSpieler(self); //Nächster Spieler ist jetzt dran
                    }
                    else if (self.spieler === "x") {
                        // Spieler mit Kreuz
                        // Koordinaten einholen
                        var coords = self.getKoordinaten(this);
                        //Linie erzeugen
                        var linie1 = self.drawLine(coords);
                        //Gedrehte Linie erzeugen
                        var linie2 = self.drawRotatedLine(coords);
                        //Kreuz erzeugen
                        var cross = self.drawCross(linie1, linie2);
                        //Kreuz auf Spielfeld anzeigen
                        self.drawOnSpielfeld(cross);
                        //Feld markieren
                        self.spielfeld[listenerid] = "x";
                        //Gewonnen?
                        setTimeout(function () { return self.gibtEsEinenGewinner("x", self); }, 10);
                        //Kreis ist jetzt dran
                        self.changeSpieler(self);
                    }
                }
            }, { signal: self.controller.signal });
        });
    };
    tic_tac_toe.prototype.changeSpieler = function (self) {
        //nach jedem "Zug" wird der Spieler gewechselt
        if (self.spieler === "o") {
            self.spieler = "x";
        }
        else {
            self.spieler = "o";
        }
        ;
    };
    tic_tac_toe.prototype.istFrei = function (index, self) {
        //Check ob ein Feld schon belegt ist
        if (self.spielfeld[index] === null) {
            return true;
        }
        else {
            return false;
        }
    };
    tic_tac_toe.prototype.getKoordinaten = function (rect) {
        // Gibt die (x,y) Koordinaten eines Felds(rect) zurück
        var x = rect.getAttribute("x");
        var y = rect.getAttribute("y");
        return [Number(x), Number(y)];
    };
    tic_tac_toe.prototype.drawRotatedLine = function (coords) {
        //Gibt eine um 90Grad gedrehte Linie zurück
        var linie = document.createElementNS("http://www.w3.org/2000/svg", "line");
        var x1 = coords[0];
        var y1 = coords[1];
        var x1cor = Number(x1) + 8;
        var y1cor = Number(y1) + 2;
        var x2cor = Number(x1) + 2;
        var y2cor = Number(y1) + 8;
        linie.setAttribute("x1", String(x1cor));
        linie.setAttribute("y1", String(y1cor));
        linie.setAttribute("x2", String(x2cor));
        linie.setAttribute("y2", String(y2cor));
        linie.setAttribute("stroke", "red");
        return linie;
    };
    tic_tac_toe.prototype.drawLine = function (coords) {
        // Gibt eine linie zurück, passend zu den übergebenen Koordinaten
        var linie = document.createElementNS("http://www.w3.org/2000/svg", "line");
        var x1 = coords[0];
        var y1 = coords[1];
        //Koordinaten werden modifiziert damit die Linie nicht von Rand zu Rand verläuft
        var x1cor = Number(x1) + 2;
        var y1cor = Number(y1) + 2;
        var x2cor = Number(x1) + 8;
        var y2cor = Number(y1) + 8;
        linie.setAttribute("x1", String(x1cor));
        linie.setAttribute("y1", String(y1cor));
        linie.setAttribute("x2", String(x2cor));
        linie.setAttribute("y2", String(y2cor));
        linie.setAttribute("stroke", "red");
        return linie;
    };
    tic_tac_toe.prototype.drawCircle = function (coords) {
        //Gibt einen,in ein Feld passenden Kreis zurück
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var x = Number(coords[0]) + 5;
        var y = Number(coords[1]) + 5;
        circle.setAttribute("cx", String(x));
        circle.setAttribute("cy", String(y));
        circle.setAttribute("r", "4");
        circle.setAttribute("fill", "royalblue");
        return circle;
    };
    tic_tac_toe.prototype.drawCross = function (linie1, linie2) {
        //Gibt eine Gruppe Kreuz zurück
        var gruppe = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gruppe.appendChild(linie1);
        gruppe.appendChild(linie2);
        return gruppe;
    };
    tic_tac_toe.prototype.drawOnSpielfeld = function (element) {
        //Fügt ein Element dem svg-Element hinzu
        var svg = document.querySelector("svg");
        svg.appendChild(element);
    };
    tic_tac_toe.prototype.gibtEsEinenGewinner = function (zeichen, objthisref) {
        //Hier wird gecheckt ob die Bedingungen für einen Sieg erfüllt sind
        if (objthisref.spielfeld[0] === zeichen && objthisref.spielfeld[1] === zeichen && objthisref.spielfeld[2] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[3] === zeichen && objthisref.spielfeld[4] === zeichen && objthisref.spielfeld[5] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[6] === zeichen && objthisref.spielfeld[7] === zeichen && objthisref.spielfeld[8] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[0] === zeichen && objthisref.spielfeld[3] === zeichen && objthisref.spielfeld[6] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[1] === zeichen && objthisref.spielfeld[4] === zeichen && objthisref.spielfeld[7] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[2] === zeichen && objthisref.spielfeld[5] === zeichen && objthisref.spielfeld[8] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[0] === zeichen && objthisref.spielfeld[4] === zeichen && objthisref.spielfeld[8] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
        if (objthisref.spielfeld[6] === zeichen && objthisref.spielfeld[4] === zeichen && objthisref.spielfeld[2] === zeichen) {
            objthisref.controller.abort();
            if (zeichen === "x") {
                alert("Kreuz hat gewonnen!");
            }
            if (zeichen === "o") {
                alert("Kreis hat gewonnen!");
            }
        }
    };
    return tic_tac_toe;
}());
var Redner = /** @class */ (function () {
    function Redner(name) {
        this.name = name;
        this.std = 0;
        this.min = 0;
        this.sek = 0;
        this.counting = 0;
        this.intervalids = [];
        this.startstopsymbol = "Stop";
    }
    Redner.prototype.setStartStopSymbol = function (string) {
        this.startstopsymbol = string;
    };
    Redner.prototype.timer = function (htmlElement) {
        this.sek++;
        if (this.sek === 60) {
            this.min++;
            this.sek = 0;
            if (this.min === 60) {
                this.std++;
                this.min = 0;
            }
        }
        htmlElement.textContent = String(this.std) + ':' + String(this.min) + ':' + String(this.sek);
    };
    Redner.prototype.swapSymbols = function () {
        if (this.startstopsymbol === "Stop") {
            this.startstopsymbol = "Start";
        }
        else {
            this.startstopsymbol = "Stop";
        }
    };
    Redner.prototype.clearAllIntervalIds = function () {
        for (var _i = 0, _a = this.intervalids; _i < _a.length; _i++) {
            var id = _a[_i];
            clearInterval(this.intervalids[this.intervalids.indexOf(id)]);
        }
    };
    return Redner;
}());
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
    Vorrang.prototype.returnSortierung = function () {
        var _this = this;
        var ergarray = new Array();
        this.stack.forEach(function (k) { ergarray.push(_this.stack[_this.stack.length - 1 - _this.stack.indexOf(k)]); });
        return ergarray;
    };
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
function mouseOver() {
    this.style.backgroundColor = "#34568B";
    this.style.color = "white";
}
function mouseOut() {
    this.style.backgroundColor = "white";
    this.style.color = "black";
}
(function hoverForSidenavBtn() {
    // hovereffekt für sidenav button
    var sidebuttondiv = document.getElementById("sidebutton");
    var buttoncollection = sidebuttondiv.getElementsByTagName("button");
    for (var i = 0; i < buttoncollection.length; i++) {
        buttoncollection[i].style.cursor = "pointer";
        buttoncollection[i].addEventListener("mouseover", mouseOver);
        buttoncollection[i].addEventListener("mouseout", mouseOut);
    }
})();
(function AddClickListenerToDropdownButton() {
    var sidebuttondiv = document.getElementById("sidebutton");
    var sidenavoverlay = document.getElementById("sidenavoverlay");
    sidenavoverlay.addEventListener("click", function () { openCloseSideNav(); });
    //Button, die Dropdownbutton sind, bekommen einen listener um den Dropdowncontainer ein- oder auszublenden
    var dropdownbutton = Array.from(sidebuttondiv.getElementsByClassName("drpdwnbtn"));
    for (var i = 0; i < dropdownbutton.length; i++) {
        dropdownbutton[i].addEventListener("click", function () {
            var dropdown = this.nextElementSibling;
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
            else {
                dropdown.style.display = "block";
            }
        });
    }
})();
(function addBackgroundEffectToDropdownButton() {
    // Dropdownbutton haben einen festen Hintergrund wenn sie geklickt wurden
    var buttonclicked = new Array();
    var dropdownbutton = Array.from(document.getElementsByClassName("drpdwnbtn"));
    dropdownbutton.forEach(function (button) { buttonclicked.push(false); });
    dropdownbutton.forEach(function (button) {
        button.addEventListener("click", function () {
            if (buttonclicked[dropdownbutton.indexOf(button)] === false) {
                button.removeEventListener("mouseout", mouseOut);
                buttonclicked[dropdownbutton.indexOf(button)] = true;
            }
            else {
                button.addEventListener("mouseout", mouseOut);
                buttonclicked[dropdownbutton.indexOf(button)] = false;
            }
        });
    });
})();
function setupMainBereich() {
    // Hier wird ein Bereich(header,main) eingerichtet, um später Inhalte dort hineinzuladen
    var mainref = document.getElementById("main");
    var main_container = document.createElement("div");
    main_container.setAttribute("id", "main_container");
    var main_header = document.createElement("div");
    main_header.setAttribute("id", "mainheader");
    var main_main = document.createElement("div");
    main_main.setAttribute("id", "main_main");
    var main_footer = document.createElement("div");
    main_footer.setAttribute("id", "main_footer");
    mainref.appendChild(main_container);
    main_container.appendChild(main_header);
    main_container.appendChild(main_main);
    main_container.appendChild(main_footer);
}
function BackgroundcolorWhite() {
    // styling für den Bereich(header,main)
    var mainref = document.getElementById("main");
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_header.style.backgroundColor = "white";
    main_main.style.backgroundColor = "white";
    main_main.style.marginTop = "40px";
    main_container.style.backgroundColor = 'white';
    main_container.style.minHeight = "700px";
    main_header.style.borderBottom = "1px solid lightgray";
    main_container.style.borderLeft = "10px solid white";
    main_container.style.borderRight = "10px solid white";
    main_header.style.display = "flex";
    main_header.style.justifyContent = "center";
    mainref.style.marginTop = "30px";
}
function domBenchmarks() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    BackgroundcolorWhite();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var ueberschrift = document.createElement("h1");
    ueberschrift.appendChild(document.createTextNode("Performanz-Messungen von DOM-Operationen"));
    var tabelle = document.createElement("table");
    tabelle.setAttribute("id", "benchmarktabelle");
    tabelle.setAttribute("class", "tabelle");
    var reihe0 = tabelle.insertRow(-1);
    var zelle = reihe0.insertCell(0);
    zelle.appendChild(document.createTextNode("Dom-Operation"));
    zelle = reihe0.insertCell(1);
    zelle.appendChild(document.createTextNode("Performance in Millisekunden für 500 Iterationen"));
    var reihe = tabelle.insertRow(-1);
    zelle = reihe.insertCell(0);
    zelle.appendChild(document.createTextNode("innerHTML"));
    zelle = reihe.insertCell(1);
    zelle.appendChild(document.createTextNode(String(benchmarkInnerHTML())));
    var reihe2 = tabelle.insertRow(-1);
    zelle = reihe2.insertCell(0);
    zelle.appendChild(document.createTextNode("innerText"));
    zelle = reihe2.insertCell(1);
    zelle.appendChild(document.createTextNode(String(benchmarkInnerText())));
    var reihe3 = tabelle.insertRow(-1);
    zelle = reihe3.insertCell(0);
    zelle.appendChild(document.createTextNode("textContent"));
    zelle = reihe3.insertCell(1);
    zelle.appendChild(document.createTextNode(String(benchmarkTextContent())));
    ueberschrift.setAttribute("id", "headline");
    var tabellendiv = document.createElement("div");
    tabellendiv.setAttribute("id", "tabellendiv");
    tabellendiv.appendChild(tabelle);
    tabellendiv.style.display = "flex";
    tabellendiv.style.justifyContent = "center";
    var mainueberschr = document.createElement("h2");
    mainueberschr.appendChild(document.createTextNode("Performanz-Messungen von DOM-Operationen"));
    main_header.appendChild(ueberschrift);
    main_header.style.textAlign = "center";
    var codeblock = document.createElement("code");
    var codediv = document.createElement("div");
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.marginBottom = "40px";
    codediv.style.border = "1px solid lightgrey";
    codediv.style.padding = "10px";
    codediv.style.width = "500px";
    codediv.innerHTML = "<b>Codesample</b><br>..." + "<br>" +
        "<code>let t0 = performance.now();</code>" + "<br>" +
        "<code>for(i=0;i<500;i++){</code>" + "<br>" +
        "<code>div.innerHTML+=text;}</code>" + "<br>" +
        "<code>let t1 = performance.now();</code>" + "<br>" +
        "<code>return t1-t0;</code><br>" +
        "...";
    codediv.style.backgroundColor = "#e7e9eb";
    //let text = '<h1>Eine Überschrift</h1>';
    //let t0 = performance.now();
    //for(i=0;i<500;i++){
    //div.innerHTML+=text;
    // }
    //let t1 = performance.now();
    //main.removeChild(div);
    div.appendChild(codediv);
    main_main.appendChild(div);
    main_main.appendChild(tabellendiv);
    tabelle.style.border = "1px solid black";
    var trs = tabelle.getElementsByTagName("td");
    for (var i = 0; i < trs.length; i++) {
        trs[i].style.border = "1px solid black";
    }
    var odd = tabelle.querySelectorAll("tr");
    for (var i = 1; i < odd.length; i++) {
        odd[0].style.backgroundColor = "lightyellow";
        if (i % 2 === 1) {
            odd[i].style.backgroundColor = "#f4f4f4";
        }
        else {
            odd[i].style.backgroundColor = "white";
        }
    }
}
function benchmarkInnerHTML() {
    var main = document.getElementById("main_main");
    var div = document.createElement("div");
    main.appendChild(div);
    var text = '<h1>Eine Überschrift</h1>';
    var t0 = performance.now();
    for (var i = 0; i < 500; i++) {
        div.innerHTML += text;
    }
    var t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
function benchmarkInnerText() {
    var main = document.getElementById("main_main");
    var div = document.createElement("div");
    div.setAttribute("id", "testdiv");
    main.appendChild(div);
    var divref = document.getElementById("testdiv");
    var text = '<h1>Eine Überschrift</h1>';
    var t0 = performance.now();
    for (var i = 0; i < 1000; i++) {
        divref.innerText = text;
    }
    var t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
function benchmarkTextContent() {
    var main = document.getElementById("main_main");
    var div = document.createElement("div");
    div.setAttribute("id", "testdiv");
    main.appendChild(div);
    var divref = document.getElementById("testdiv");
    var text = '<h1>Eine Überschrift</h1>';
    var t0 = performance.now();
    for (var i = 0; i < 1000; i++) {
        divref.textContent = text;
    }
    var t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
function setup_tic_tac_toe() {
    var mainref = document.getElementById("main");
    removeChildrenInDiv(mainref);
    setupMainBereich();
    BackgroundcolorWhite();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var div = document.createElement("div");
    var header = document.createElement("h1");
    header.appendChild(document.createTextNode("Tic Tac Toe"));
    main_header.appendChild(header);
    var ttt = new tic_tac_toe();
    ttt.setupSpielfeld(div);
    ttt.addListener(div);
    ttt.werFaengtAn();
    main_main.appendChild(div);
    div.style.display = "flex";
    div.style.justifyContent = "center";
}
function setAllButtonTextToStop() {
    var collection = document.querySelectorAll("button");
    var start = 'Stop';
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].textContent === start) {
            collection[i].textContent = 'Start';
        }
    }
}
function stopAll(rednerArray) {
    rednerArray.forEach(function (redner) { redner.clearAllIntervalIds(); redner.counting = 0; });
}
function createTable(reihen, zeilen) {
    var table = document.createElement("table");
    for (var i = 0; i < zeilen; i++) {
        var reihe = table.insertRow(-1);
        for (var j = 0; j < reihen; j++) {
            reihe.insertCell(j);
        }
    }
    return table;
}
function myEventHandler(rednerobj, htmlElement, button, rednerArray) {
    var event = rednerobj.counting;
    if (event === 0) {
        stopAll(rednerArray);
        setAllButtonTextToStop();
        var interval = setInterval(rednerobj.timer.bind(rednerobj), 1000, htmlElement);
        rednerobj.intervalids.push(interval);
        rednerobj.counting = 1;
        rednerobj.startstopsymbol = 'Stop';
        button.textContent = rednerobj.startstopsymbol;
    }
    if (event === 1) {
        rednerobj.clearAllIntervalIds();
        rednerobj.counting = 0;
        button.textContent = 'Start';
    }
}
function addRednerInListe(liste, rednerobjintabelle) {
    var li = document.createElement("li");
    li.appendChild(rednerobjintabelle);
    liste.appendChild(li);
}
function createRedner(name, rednerarray) {
    if (name !== "") {
        var rednerobj_1 = new Redner(name);
        var tabelle = document.createElement("table");
        var reihe = tabelle.insertRow(-1);
        var button = document.createElement("button");
        button.appendChild(document.createTextNode('Start'));
        reihe.insertCell(0);
        reihe.appendChild(document.createTextNode(rednerobj_1.name));
        reihe.insertCell(1);
        reihe.appendChild(button);
        var timer_1 = document.createElement("p");
        reihe.insertCell(2);
        var display = document.createTextNode("0:0:0");
        timer_1.appendChild(display);
        var interval = setInterval(rednerobj_1.timer.bind(rednerobj_1), 1000, timer_1);
        button.textContent = rednerobj_1.startstopsymbol;
        rednerobj_1.counting = 1;
        rednerobj_1.intervalids.push(interval);
        button.addEventListener("click", function () { return myEventHandler(rednerobj_1, timer_1, button, rednerarray); });
        reihe.appendChild(timer_1);
        if (rednerarray.length != 0) {
            rednerarray.forEach(function (redner) { redner.clearAllIntervalIds(); redner.counting = 0; });
        }
        setAllButtonTextToStop();
        rednerarray.push(rednerobj_1);
        return tabelle;
    }
}
function setupU_5_2() {
    var main = document.getElementById("main");
    main.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.innerHTML = '';
    main_header.innerHTML = '';
    var us = document.getElementById("mainheader");
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode('Übung 5.2'));
    us.appendChild(h1);
    var mainref = document.getElementById("main_main");
    var ues = document.createElement("h2");
    ues.appendChild(document.createTextNode("Rednerliste mit Zeitmessung"));
    mainref.appendChild(ues);
    var eingabediv = document.createElement("div");
    var listendiv = document.createElement("div");
    listendiv.setAttribute("id", "listendiv");
    var liste = document.createElement("ul");
    var eingabe = document.createElement("input");
    eingabe.setAttribute("type", "search");
    eingabe.setAttribute("id", "eingabe");
    eingabe.appendChild(document.createTextNode(''));
    var eingabelabel = document.createElement("label");
    eingabelabel.textContent = 'Neuer Redner:';
    eingabelabel.setAttribute("for", "eingabe");
    var eingabebutton = document.createElement("button");
    eingabebutton.setAttribute("id", "btn");
    eingabebutton.textContent = 'hinzufügen';
    eingabediv.appendChild(eingabelabel);
    eingabediv.appendChild(eingabe);
    eingabediv.appendChild(eingabebutton);
    eingabediv.style.display = "flex";
    eingabediv.style.justifyContent = "center";
    listendiv.appendChild(liste);
    mainref.appendChild(eingabediv);
    mainref.appendChild(listendiv);
    mainref.style.display = "block";
    listendiv.style.display = "flex";
    listendiv.style.justifyContent = "center";
    ues.style.textAlign = "Center";
    BackgroundcolorWhite();
    var rednerarray = new Array();
    eingabebutton.addEventListener("click", function () { return addRednerInListe(liste, createRedner(eingabe.value, rednerarray)); });
}
function setupU_5_3() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.innerHTML = '';
    main_header.innerHTML = '';
    var liste = document.createElement("ul");
    var table = document.createElement("table");
    var reihe0 = table.insertRow(-1);
    var zelle = reihe0.insertCell(0);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "search");
    input1.setAttribute("id", "input1");
    var input2 = document.createElement("input");
    input2.setAttribute("type", "search");
    input2.setAttribute("id", "input2");
    var main_header_ref = document.getElementById("mainheader");
    var main_main_ref = document.getElementById("main_main");
    var headline = document.createElement("h1");
    headline.appendChild(document.createTextNode("TopSort als Web-App"));
    main_header_ref.appendChild(headline);
    var button = document.createElement("button");
    button.setAttribute("id", "sortbutton");
    button.textContent = 'sortieren';
    button.style.height = "1.5rem";
    button.style.width = "5rem";
    var div = document.createElement("div");
    var inputdiv = document.createElement("div");
    var buttondiv = document.createElement("div");
    var addbutton = document.createElement("button");
    addbutton.setAttribute("id", "addbutton");
    addbutton.textContent = 'hinzufügen';
    addbutton.style.height = "1.5rem";
    addbutton.style.width = "5rem";
    inputdiv.appendChild(input1);
    inputdiv.appendChild(input2);
    buttondiv.appendChild(addbutton);
    buttondiv.appendChild(button);
    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(addbutton);
    div.appendChild(button);
    var listdiv = document.createElement("div");
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    div.style.justifyContent = "center";
    BackgroundcolorWhite();
    listdiv.appendChild(liste);
    main_main_ref.appendChild(div);
    main_main_ref.appendChild(listdiv);
    var sortiert = 0;
    button.addEventListener("click", function () {
        if (sortiert === 0) {
            var vorrang2dArray = new Array();
            var col = Array.from(liste.querySelectorAll("li"));
            col.forEach(function (ele) {
                var str = ele.textContent.replaceAll("[", "").replaceAll("]", "").replaceAll(",", " ").split(" ");
                vorrang2dArray.push(str);
            });
            var graph = new Vorrang(vorrang2dArray);
            var li = document.createElement("li");
            li.style.padding = "5px";
            li.style.borderLeft = "1px solid lightgrey";
            li.style.borderRight = "1px solid lightgrey";
            li.style.borderBottom = "1px solid lightgrey";
            li.style.backgroundColor = "lightyellow";
            var ergstack = graph.returnSortierung();
            var ergstr = "";
            ergstack.forEach(function (ele) { ergstr += ele + " "; });
            li.appendChild(document.createTextNode("Sortierung (v.l.n.r) = " + ergstr));
            liste.appendChild(li);
            sortiert = 1;
        }
    });
    var ele_cntr = 0;
    addbutton.addEventListener("click", function (e) {
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        if (input1.value && input2.value) {
            if (sortiert === 0) {
                var li = document.createElement("li");
                li.style.padding = "5px";
                if (ele_cntr === 0) {
                    li.style.border = "1px solid lightgrey";
                }
                if (ele_cntr % 2 === 0) {
                    li.style.backgroundColor = "#f4f4f4";
                }
                if (ele_cntr % 2 === 1) {
                    li.style.backgroundColor = "white";
                }
                if (ele_cntr != 0) {
                    li.style.borderLeft = "1px solid lightgrey";
                    li.style.borderRight = "1px solid lightgrey";
                    li.style.borderBottom = "1px solid lightgrey";
                }
                ;
                li.appendChild(document.createTextNode("[" + input1.value + "," + input2.value + "]"));
                liste.appendChild(li);
                ele_cntr++;
                input1.value = "";
                input2.value = "";
            }
        }
    });
}
function setupU_6_1() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    BackgroundcolorWhite();
    var eingabedivu6 = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Klammerpaare"));
    main_header.appendChild(h1);
    var eingabeu6 = document.createElement("input");
    eingabeu6.setAttribute("type", "search");
    eingabedivu6.appendChild(eingabeu6);
    eingabedivu6.style.display = "flex";
    eingabedivu6.style.justifyContent = "center";
    eingabeu6.style.marginTop = "25px";
    main_main.appendChild(eingabedivu6);
    eingabeu6.style.width = "700px";
    eingabeu6.addEventListener("input", function () {
        var kp1_1 = '(';
        var kp1_2 = ')';
        var kp2_1 = '{';
        var kp2_2 = '}';
        var kp3_1 = '[';
        var kp3_2 = ']';
        var str = eingabeu6.value;
        var klammerarray = new Array();
        for (var i = 0; i < str.length; i++) {
            if (str[i] === kp1_1 || str[i] === kp2_1 || str[i] === kp3_1 || str[i] === kp1_2 || str[i] === kp2_2 || str[i] === kp3_2) {
                klammerarray.push(str[i]);
            }
        }
        if (klammerarray.length % 2 === 1) {
            eingabeu6.style.backgroundColor = "red";
        }
        else if (klammerarray.length % 2 === 0) {
            var zustand = false;
            if (eingabeu6.value === '') {
                eingabeu6.style.backgroundColor = "white";
            }
            for (var i = 0; i < klammerarray.length / 2; i++) {
                if (klammerarray[i] === kp1_1) {
                    if (klammerarray[(klammerarray.length - 1) - i] === kp1_2) {
                        zustand = true;
                    }
                    else {
                        zustand = false;
                        break;
                    }
                }
                if (klammerarray[i] === kp1_2) {
                    zustand = false;
                    break;
                }
                if (klammerarray[i] === kp2_1) {
                    if (klammerarray[(klammerarray.length - 1) - i] === kp2_2) {
                        zustand = true;
                    }
                    else {
                        zustand = false;
                        break;
                    }
                }
                if (klammerarray[i] === kp2_2) {
                    zustand = false;
                    break;
                }
                if (klammerarray[i] === kp3_1) {
                    if (klammerarray[(klammerarray.length - 1) - i] === kp3_2) {
                        zustand = true;
                    }
                    else {
                        zustand = false;
                        break;
                    }
                }
                if (klammerarray[i] === kp3_2) {
                    zustand = false;
                    break;
                }
            }
            if (zustand === false) {
                eingabeu6.style.backgroundColor = "red";
            }
            else {
                eingabeu6.style.backgroundColor = "white";
            }
        }
    });
}
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
function setupU_7() {
    var _this = this;
    var mainref = document.getElementById("main");
    removeChildrenInDiv(mainref);
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    BackgroundcolorWhite();
    var Plagiatsresolution = document.createElement("div");
    Plagiatsresolution.setAttribute("id", "plagiatresolution");
    var header = document.createElement("header");
    var ergebnisdiv = document.createElement("div");
    ergebnisdiv.style.display = "flex";
    ergebnisdiv.style.justifyContent = "space-evenly";
    ergebnisdiv.style.flexWrap = "wrap";
    var analysecontainer = document.createElement("div");
    ergebnisdiv.setAttribute("id", "ergebnisdiv");
    header.innerHTML = '<h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2>';
    var content = document.createElement("div");
    content.setAttribute("class", "content");
    content.innerHTML = '<div class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full"><div class="field field-name-field-pcf-content"><div class="entity entity-paragraphs-item paragraphs-item-para-text"><div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden"><p><strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p><p>In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die HochschuleBonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmeneinzuleiten.</p> <p> 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p><p> 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohlüber den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- undDenkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p><p>3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p><p> Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p><p><strong>Eckpunkte zur Plagiatsprüfung</strong></p>          <p>Der Senat empfiehlt:</p><p> 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss feste Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p><p>2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p><p>3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p><p> 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p> <p> 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p> <p> 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p><p>  7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule  stichprobenartige Plagiatsprüfungen vor.</p> <p>  <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p> <p>  Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p><p> "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p></div></div></div></div>';
    ;
    var ueberschriftcontainer = document.createElement("div");
    var brschrft = document.createElement("h1");
    brschrft.appendChild(document.createTextNode("Textanalyse mit filter-map-reduce"));
    ueberschriftcontainer.appendChild(brschrft);
    Plagiatsresolution.appendChild(header);
    Plagiatsresolution.appendChild(content);
    main_header.appendChild(ueberschriftcontainer);
    main_main.appendChild(analysecontainer);
    main_main.appendChild(Plagiatsresolution);
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var response, stopwörter, stops, stoparray2d, alltext, alltextsplitted, _loop_1, i, filtered, tabelle, row, column, Plagiatsresolutionref, all, fil, table, tagset, array2d, _loop_2, i, mostusedtag, i, reihe, zelle, i, reihe_1, zelle_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://raw.githubusercontent.com/stopwords-iso/stopwords-de/master/stopwords-de.txt')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    stopwörter = _a.sent();
                    stops = stopwörter.split(/\r?\n/);
                    stoparray2d = new Array();
                    alltext = main_container.textContent.toLowerCase().replaceAll(",", "").replaceAll(".", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", "").replaceAll(":", "");
                    alltextsplitted = alltext.split(" ");
                    _loop_1 = function (i) {
                        stoparray2d.push([stops[i], alltextsplitted.reduce(function (count, num) { return num === stops[i] ? count + 1 : count; }, 0)]);
                    };
                    for (i = 0; i < stops.length; i++) {
                        _loop_1(i);
                    }
                    filtered = stoparray2d.filter(function (x) { return x[1] >= 10; });
                    tabelle = document.createElement("table");
                    tabelle.style.textAlign = "center";
                    row = tabelle.insertRow(-1);
                    column = row.insertCell(0);
                    column.innerHTML = '<b>Stopwort</b>';
                    column = row.insertCell(1);
                    column.innerHTML = '<b>Anzahl</b>';
                    filtered.forEach(function (x) {
                        var row = tabelle.insertRow(-1);
                        var column = row.insertCell(0);
                        column.appendChild(document.createTextNode(x[0]));
                        column = row.insertCell(1);
                        column.appendChild(document.createTextNode(x[1]));
                        if (filtered.indexOf(x) % 2 == 0) {
                            row.style.backgroundColor = "#dddd";
                        }
                    });
                    ergebnisdiv.appendChild(tabelle);
                    Plagiatsresolutionref = document.getElementById("plagiatresolution");
                    all = Array.from(Plagiatsresolutionref.getElementsByTagName("*"));
                    fil = all.map(function (item) { return item = item.nodeName.toLowerCase(); });
                    table = document.createElement("table");
                    tagset = new Set();
                    array2d = new Array();
                    fil.forEach(function (x) { return tagset.add(x); });
                    _loop_2 = function (i) {
                        array2d.push([Array.from(tagset)[i], fil.reduce(function (count, num) { return num === Array.from(tagset)[i] ? count + 1 : count; }, 0)]);
                    };
                    for (i = 0; i < tagset.size; i++) {
                        _loop_2(i);
                    }
                    mostusedtag = array2d[0];
                    for (i = 0; i < array2d.length; i++) {
                        if (array2d[i][1] > mostusedtag[1]) {
                            mostusedtag = array2d[i];
                        }
                    }
                    table.style.textAlign = "center";
                    reihe = table.insertRow(-1);
                    zelle = reihe.insertCell(0);
                    zelle.innerHTML = '<b>HTML-Tag</b>';
                    zelle = reihe.insertCell(1);
                    zelle.innerHTML = '<b>Anzahl</b>';
                    for (i = 0; i < array2d.length; i++) {
                        reihe_1 = table.insertRow(-1);
                        zelle_1 = reihe_1.insertCell(0);
                        zelle_1.appendChild(document.createTextNode("<" + array2d[i][0] + ">"));
                        zelle_1 = reihe_1.insertCell(1);
                        zelle_1.appendChild(document.createTextNode(array2d[i][1]));
                        if (i % 2 == 0) {
                            reihe_1.style.backgroundColor = "#dddd";
                        }
                    }
                    setTimeout(function () { return ergebnisdiv.appendChild(table); }, 100);
                    setTimeout(function () { return analysecontainer.appendChild(ergebnisdiv); }, 100);
                    return [2 /*return*/];
            }
        });
    }); })();
}
function setupU_8_1() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    BackgroundcolorWhite();
    var main_main_ref = document.getElementById("main_main");
    var main_header_ref = document.getElementById("mainheader");
    var promisediv = document.createElement("div");
    promisediv.style.display = "flex";
    promisediv.style.justifyContent = "center";
    var textAdiv = document.createElement("div");
    var textBdiv = document.createElement("div");
    main_main.appendChild(textAdiv);
    main_main.appendChild(textBdiv);
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit Promises"));
    main_header.appendChild(h1);
    var p = document.createElement("p");
    fetch('http://127.0.0.1:5500/A.txt').then(function (response) { return response.text(); }).then(function (text) {
        var arrayA = text.split(/\r?\n/);
        fetch('http://127.0.0.1:5500/B.txt').then(function (response) { return response.text(); }).then(function (text) {
            var arrayB = text.split(/\r?\n/);
            var _loop_3 = function (i) {
                setTimeout(function () { return p.innerHTML += arrayA[i]; }, 10);
                setTimeout(function () { return p.innerHTML += arrayB[i] + '<br>'; }, 10);
            };
            for (var i = 0; i < arrayA.length; i++) {
                _loop_3(i);
            }
        });
    });
    console.log(promisediv);
    promisediv.appendChild(p);
    main_main.appendChild(promisediv);
}
function setupU_8_2() {
    var _this = this;
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    BackgroundcolorWhite();
    var promisediv = document.createElement("div");
    promisediv.style.textAlign = "center";
    var h1 = document.createElement("h1");
    var h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode("Konkateniert werden die Gedichte Erlenkönig von Goethe sowie ... von ..."));
    h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit async / await"));
    main_header.appendChild(h1);
    main_main.appendChild(h3);
    main_main.appendChild(promisediv);
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var responsea, responseb, texta, arrayA, textb, arrayB, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://127.0.0.1:5500/A.txt')];
                case 1:
                    responsea = _a.sent();
                    return [4 /*yield*/, fetch('http://127.0.0.1:5500/B.txt')];
                case 2:
                    responseb = _a.sent();
                    return [4 /*yield*/, responsea.text()];
                case 3:
                    texta = _a.sent();
                    arrayA = texta.split(/\r?\n/);
                    return [4 /*yield*/, responseb.text()];
                case 4:
                    textb = _a.sent();
                    arrayB = textb.split(/\r?\n/);
                    i = 0;
                    while (i < arrayA.length) {
                        sleep(100);
                        promisediv.innerHTML += arrayA[i];
                        sleep(100);
                        promisediv.innerHTML += arrayB[i] + '<br>';
                        i++;
                    }
                    return [2 /*return*/];
            }
        });
    }); })();
}
var main_main_ref = document.getElementById("main_main");
var main_header_ref = document.getElementById("mainheader");
var dropdwncntnr = Array.from(document.getElementsByClassName("dropdown-container"));
function populateHeader(input) {
    var main_header = document.getElementById("mainheader");
    main_header.replaceChildren();
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(input));
    main_header.appendChild(h1);
}
function populateMain(input) {
    var main_main = document.getElementById("main_main");
    main_main.replaceChildren();
    var contentdiv = document.createElement("div");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(input));
    contentdiv.appendChild(p);
    main_main.appendChild(contentdiv);
}
function changeBackgroundColorAndColor(buttonreferenz, backgroundColor, textcolor) {
    buttonreferenz.style.backgroundColor = backgroundColor;
    buttonreferenz.style.color = textcolor;
}
(function setupU_8_3() {
    var _this = this;
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var response, json, dropdownbuttoncollection, _i, _a, o_1, itag, _b, _c, ob_1, button, dropdowncontainerbuttoncollection, _d, dropdowncontainerbuttoncollection_1, dcb, _e, dropdownbuttoncollection_1, b, i, _f, _g, o, _loop_4, _h, _j, ob;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, fetch('http://127.0.0.1:5500/content.json')];
                case 1:
                    response = _k.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _k.sent();
                    dropdownbuttoncollection = Array.from(document.getElementsByClassName("drpdwnbtn"));
                    for (_i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
                        o_1 = _a[_i];
                        dropdownbuttoncollection[Object.keys(json).indexOf(o_1)].textContent = o_1;
                        itag = document.createElement("i");
                        itag.setAttribute("class", "fa fa-caret-down");
                        dropdownbuttoncollection[Object.keys(json).indexOf(o_1)].appendChild(itag);
                        for (_b = 0, _c = Object.keys(json[o_1]); _b < _c.length; _b++) {
                            ob_1 = _c[_b];
                            button = document.createElement("button");
                            button.style.backgroundColor = "#dddddd";
                            button.setAttribute("class", "dropdowncontainerbutton");
                            button.textContent = ob_1;
                            button.style.cursor = "pointer";
                            dropdwncntnr[Object.keys(json).indexOf(o_1)].appendChild(button);
                        }
                    }
                    dropdowncontainerbuttoncollection = Array.from(document.getElementsByClassName("dropdowncontainerbutton"));
                    //hover effekt für die button im dropdowncontainer
                    for (_d = 0, dropdowncontainerbuttoncollection_1 = dropdowncontainerbuttoncollection; _d < dropdowncontainerbuttoncollection_1.length; _d++) {
                        dcb = dropdowncontainerbuttoncollection_1[_d];
                        dcb.addEventListener("mouseover", function () { changeBackgroundColorAndColor(this, "#34568B", "white"); });
                        dcb.addEventListener("mouseleave", function () { changeBackgroundColorAndColor(this, "#dddddd", "black"); });
                    }
                    //dropdownicons für button im sidenav
                    for (_e = 0, dropdownbuttoncollection_1 = dropdownbuttoncollection; _e < dropdownbuttoncollection_1.length; _e++) {
                        b = dropdownbuttoncollection_1[_e];
                        b.addEventListener("click", function () {
                            if (this.lastChild.classList.contains("fa-caret-down")) {
                                this.removeChild(this.lastChild);
                                var itag = document.createElement("i");
                                itag.setAttribute("class", "fa fa-caret-up");
                                this.appendChild(itag);
                            }
                            else {
                                this.removeChild(this.lastChild);
                                var itag = document.createElement("i");
                                itag.setAttribute("class", "fa fa-caret-down");
                                this.appendChild(itag);
                            }
                        });
                    }
                    i = 0;
                    for (_f = 0, _g = Object.keys(json); _f < _g.length; _f++) {
                        o = _g[_f];
                        _loop_4 = function () {
                            var inhalt = Object.values(ob)[0];
                            var header = Object.keys(json[o])[Object.values(json[o]).indexOf(ob)];
                            dropdowncontainerbuttoncollection[i].addEventListener("click", function () {
                                var mainref = document.getElementById("main");
                                mainref.replaceChildren();
                                setupMainBereich();
                                var main_header = document.getElementById("mainheader");
                                var main_main = document.getElementById("main_main");
                                main_header.replaceChildren();
                                main_main.replaceChildren();
                                BackgroundcolorWhite();
                                populateHeader(header);
                                populateMain(inhalt);
                            });
                            i++;
                        };
                        for (_h = 0, _j = Object.values(json[o]); _h < _j.length; _h++) {
                            ob = _j[_h];
                            _loop_4();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); })();
})();
function setup_covid19_barchart() {
    var _this = this;
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    main_main.replaceChildren();
    main_header.replaceChildren();
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Covid-19 Fälle"));
    main_header.appendChild(h1);
    var div = document.createElement("div");
    div.setAttribute("id", "barchartdiv");
    var mapdiv = document.createElement("div");
    var listendiv = document.createElement("div");
    mapdiv.setAttribute("id", "mapdiv");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    mapdiv.style.border = "1px solid red";
    mapdiv.style.display = "flex";
    mapdiv.style.justifyContent = "center";
    main_main.append(div);
    BackgroundcolorWhite();
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var georesponse, geo, dataresponse, geodata, response, json, tabelle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://127.0.0.1:5500/1_sehr_hoch.geo.json")];
                case 1:
                    georesponse = _a.sent();
                    return [4 /*yield*/, georesponse.json()];
                case 2:
                    geo = _a.sent();
                    return [4 /*yield*/, fetch("http://127.0.0.1:5500/covid-19.json")];
                case 3:
                    dataresponse = _a.sent();
                    return [4 /*yield*/, dataresponse.json()];
                case 4:
                    geodata = _a.sent();
                    return [4 /*yield*/, fetch("http://127.0.0.1:5500/covid-19.json")];
                case 5:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 6:
                    json = _a.sent();
                    tabelle = dataTabelle(json);
                    listendiv.appendChild(tabelle);
                    barChart(json, "#barchartdiv", 500, 400);
                    mapChart(300, 400, "#mapdiv", geodata, geo);
                    return [2 /*return*/];
            }
        });
    }); })();
}
function barChart(json, divid, breite, hoehe) {
    var data = Object.values(json);
    var datasorted = data.sort(function (a, b) { return d3.descending(a.anzahl, b.anzahl); });
    var margin = { top: 10, right: 30, bottom: 90, left: 60 }, width = breite - margin.left - margin.right, height = hoehe - margin.top - margin.bottom;
    // append the svg object to the body of the page
    var svg = d3.select(divid)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", "0 0 ".concat(width + margin.left + margin.right, " ").concat(height + margin.top + margin.bottom))
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // X axis
    var x = d3.scaleBand()
        .range([0, width])
        .domain(datasorted.map(function (d) { return d.name; }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(datasorted, function (d) { return d.anzahl; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    // Bars
    svg.selectAll("svg")
        .data(datasorted)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d.name); })
        .attr("width", x.bandwidth())
        .attr("fill", "royalblue")
        // no bar at the beginning thus:
        .attr("height", function (d) { return height - y(0); }) // always equal to 0
        .attr("y", function (d) { return y(0); });
    // Animation
    svg.selectAll("rect")
        .transition()
        .duration(800)
        .attr("y", function (d) { return y(d.anzahl); })
        .attr("height", function (d) { return height - y(d.anzahl); })
        .delay(function (d, i) { return (i * 100); });
}
function dataTabelle(data) {
    var i = 0;
    var tabelle = document.createElement("table");
    tabelle.style.textAlign = "center";
    var row = tabelle.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Bundesland</b>";
    cell = row.insertCell(1);
    cell.innerHTML = "<b>Fälle</b>";
    Array.from(data).forEach(function (d) {
        var row = tabelle.insertRow(-1);
        var cell = row.insertCell(0);
        cell.textContent = data[data.indexOf(d)].name;
        cell = row.insertCell(1);
        cell.textContent = data[data.indexOf(d)].anzahl;
        if (i % 2 === 0) {
            row.style.backgroundColor = "#dddddd";
        }
        i++;
    });
    return tabelle;
}
function mapChart(breite, hoehe, divid, geodata, geojson) {
    var width = breite;
    var height = hoehe;
    var geodatavalues = Object.values(geodata);
    var svg = d3.select(divid).append("svg").attr("width", width).attr("height", height);
    var projection = d3.geoMercator()
        .center([10, 50])
        .scale(1500)
        .translate([width / 2, height / 2]);
    var data = d3.map();
    geodatavalues.forEach(function (d) { data.set(d.id, d.anzahl); }); // Daten der Bundesländer in einer map speichern
    var colorScheme = d3.schemeReds[6];
    var colorScale = d3.scaleThreshold()
        .domain([1000, 10000, 100000, 1000000, 3000000, 7000000])
        .range(colorScheme);
    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        // draw each country
        .attr("d", d3.geoPath()
        .projection(projection))
        // set the color of each country
        .attr("fill", function (d) {
        // Für jedes Land holen wir uns die Fallzahlen aus der Map
        // Die Werte wurden in der Map mit dem Kürzel des jeweiligen Bundeslandes(hier id) gespeichert
        var dataforbl = data.get(d.properties.id);
        return colorScale(dataforbl);
    });
}
var SideNavigation = /** @class */ (function () {
    function SideNavigation() {
        this.open = false;
    }
    SideNavigation.prototype.getOpen = function () {
        return this.open;
    };
    SideNavigation.prototype.swapOpen = function () {
        if (this.open == false) {
            this.open = true;
        }
        else {
            this.open = false;
        }
    };
    return SideNavigation;
}());
var sidenav = new SideNavigation();
function openCloseSideNav() {
    if (sidenav.getOpen() === false) {
        openSidenav();
        sidenav.swapOpen();
        return;
    }
    if (sidenav.getOpen() === true) {
        closeSidenav();
        sidenav.swapOpen();
        return;
    }
}
function openSidenav() {
    var sidenav = document.getElementById("sidenav");
    var sidenavoverlay = document.getElementById("sidenavoverlay");
    sidenav.style.display = "block";
    sidenav.style.width = "250px";
    sidenavoverlay.style.display = "block";
    sidenavoverlay.style.width = "100%";
}
function closeSidenav() {
    var sidenav = document.getElementById("sidenav");
    var sidenavoverlay = document.getElementById("sidenavoverlay");
    sidenav.style.display = "none";
    sidenav.style.display = "0px";
    sidenavoverlay.style.display = "none";
    sidenavoverlay.style.width = "0px";
}
function vue_singlefile() {
    var mainref = document.getElementById("main");
    removeChildrenInDiv(mainref);
    setupMainBereich();
    BackgroundcolorWhite();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var headerdiv = document.createElement("div");
    var header = document.createElement("h1");
    header.appendChild(document.createTextNode("Vue Single Component"));
    headerdiv.appendChild(header);
    main_header.appendChild(headerdiv);
    var div = document.createElement("div");
    div.setAttribute("id", "vuediv");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    para1.textContent = "Buchstaben : {{buchstaben}}";
    para2.appendChild(document.createTextNode("Leerzeichen :{{leerzeichen}}"));
    para3.appendChild(document.createTextNode("Worte : {{worte}}"));
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("v-on:input", "handler");
    input.setAttribute("ref", "inputfield");
    div.appendChild(input);
    main_main.appendChild(div);
    var vm = new Vue({
        el: '#vuediv',
        data: {
            buchstaben: 0,
            leerzeichen: 0,
            worte: 0
        },
        methods: {
            handler: function (event) {
                var text = this.$refs.inputfield.value;
                this.buchstaben = Array.from(text.replaceAll(" ", "")).length;
                this.leerzeichen = Array.from(text).length - Array.from(text.replaceAll(" ", "")).length;
                var woerter = Array.from(text.split(" "));
                var arr = woerter.filter(function (wort) { return wort != ""; });
                this.worte = arr.length;
            }
        }
    });
}
function profileCard() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    var picdiv = document.createElement("div");
    var i = document.createElement("i");
    picdiv.style.borderRadius = "100%";
    i.setAttribute("class", "fa fa-user-circle-o fa-5x");
    picdiv.appendChild(i);
    mainref.appendChild(picdiv);
}
profileCard();
