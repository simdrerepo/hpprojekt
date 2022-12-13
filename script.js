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
var main_container;
var main_header;
var main_main;
var controller = new AbortController();
var setup_login = function () {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    var container = document.createElement("div");
    var usernameInput = document.createElement("input");
    var passwortInput = document.createElement("input");
    var loginButton = document.createElement("button");
    var cancelButton = document.createElement("button");
    var tabelle = document.createElement("table");
    container.style.backgroundColor = "white";
    container.style.marginTop = "30px";
    container.style.minHeight = "700px";
    mainref.appendChild(container);
};
var sidebuttondiv = document.getElementById("sidebutton");
var buttoncollection = sidebuttondiv.getElementsByTagName("button");
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
    for (var i = 0; i < buttoncollection.length; i++) {
        buttoncollection[i].style.cursor = "pointer";
        buttoncollection[i].addEventListener("mouseover", mouseOver);
        buttoncollection[i].addEventListener("mouseout", mouseOut);
    }
})();
(function AddDropdownButtonListener() {
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
    main_main.style.marginLeft = "40px";
    main_main.style.marginRight = "40px";
    main_container.style.backgroundColor = 'white';
    main_container.style.minHeight = "700px";
    main_header.style.borderBottom = "1px solid lightgray";
    main_container.style.borderLeft = "10px solid white";
    main_container.style.borderRight = "10px solid white";
    main_header.style.display = "flex";
    main_header.style.justifyContent = "center";
    mainref.style.marginTop = "30px";
}
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
                        // Koordinaten des Feldes ermitteln
                        var coords = self.getKoordinaten(this);
                        // Kreis erzeugen
                        var circle = self.drawCircle(coords);
                        // Aufs Spielfeld damit
                        self.drawOnSpielfeld(circle);
                        //Feld wird markiert mit aktuellem Spieler
                        self.spielfeld[listenerid] = "o";
                        //Gewinn Bedingungen checken
                        setTimeout(function () { return self.gibtEsEinenGewinner("o", self); }, 10);
                        //Nächster Spieler ist jetzt dran
                        self.changeSpieler(self);
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
var Graph = /** @class */ (function () {
    function Graph() {
        this.knotenArray = new Array();
        this.adj = new Array();
    }
    Graph.prototype.addKnoten = function (knoten) {
        this.knotenArray.push(knoten);
        this.adj.push([]);
    };
    Graph.prototype.addKante = function (k1, k2) {
        var indexfuerknoten = 0;
        for (var i = 0; i < this.knotenArray.length; i++) {
            if (this.knotenArray[i] === k1) {
                indexfuerknoten = i;
            }
        }
        this.adj[indexfuerknoten].push(k2);
    };
    Graph.prototype.print = function () {
        for (var i = 0; i < this.knotenArray.length; i++) {
            console.log(this.knotenArray[i] + " : ");
            for (var j = 0; j < this.adj.length; j++) {
                console.log(this.adj[i][j]);
            }
        }
    };
    Graph.prototype.topsorthelper = function (knoten, besucht, stack) {
        besucht.push(knoten);
        var indexfuerknoten = 0;
        for (var i = 0; i < this.knotenArray.length; i++) {
            if (this.knotenArray[i] === knoten) {
                indexfuerknoten = i;
            }
        }
        for (var i = 0; i < this.adj[indexfuerknoten].length; i++) {
            if (!besucht.includes(this.adj[indexfuerknoten][i])) {
                this.topsorthelper(this.adj[indexfuerknoten][i], besucht, stack);
            }
        }
        stack.push(knoten);
    };
    Graph.prototype.topologischSortieren = function () {
        var stack = new Array();
        var besucht = new Array();
        var returnArray = new Array();
        for (var i = 0; i < this.knotenArray.length; i++) {
            if (!besucht.includes(this.knotenArray[i])) {
                this.topsorthelper(this.knotenArray[i], besucht, stack);
            }
        }
        while (stack.length != 0) {
            returnArray.push(stack.pop());
        }
        return returnArray;
    };
    return Graph;
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
    Redner.prototype.timer = function () {
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
var RednerArray = /** @class */ (function () {
    function RednerArray() {
        this.array = [];
    }
    return RednerArray;
}());
var rednerarray = new RednerArray();
function setup_tic_tac_toe() {
    var mainref = document.getElementById("main");
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    BackgroundcolorWhite();
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
function myTimer(objekt, ticker) {
    objekt.sek++;
    if (objekt.sek === 60) {
        objekt.min++;
        objekt.sek = 0;
        if (objekt.min === 60) {
            objekt.std++;
            objekt.min = 0;
        }
    }
    ticker.textContent = String(objekt.std) + ':' + String(objekt.min) + ':' + String(objekt.sek);
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
function stopAll() {
    if (rednerarray.array.length != 0) {
        for (var i = 0; i < rednerarray.array.length; i++) {
            for (var j = 0; j < rednerarray.array[i].intervalids.length; j++) {
                clearInterval(rednerarray.array[i].intervalids[j]);
            }
            rednerarray.array[i].counting = 0;
        }
    }
}
function myEventHandler(rednerobj, tiker, button) {
    var event = rednerobj.counting;
    if (event === 0) {
        stopAll();
        setAllButtonTextToStop();
        var interval = setInterval(myTimer, 1000, rednerobj, tiker);
        rednerobj.intervalids.push(interval);
        rednerobj.counting = 1;
        button.textContent = 'Stop';
    }
    if (event === 1) {
        for (var i = 0; i < rednerobj.intervalids.length; i++) {
            clearInterval(rednerobj.intervalids[i]);
        }
        rednerobj.counting = 0;
        button.textContent = 'Start';
    }
}
function addRednerInListe(liste, rednerobjintabelle) {
    var li = document.createElement("li");
    li.appendChild(rednerobjintabelle);
    liste.appendChild(li);
}
function createRedner(rednerobj) {
    var tabelle = document.createElement("table");
    var reihe = tabelle.insertRow(-1);
    var button = document.createElement("button");
    button.appendChild(document.createTextNode('Start'));
    reihe.insertCell(0);
    reihe.appendChild(document.createTextNode(rednerobj.name));
    reihe.insertCell(1);
    reihe.appendChild(button);
    var timer = document.createElement("p");
    reihe.insertCell(2);
    var tiker = document.createTextNode('0:0:0');
    var interval = setInterval(myTimer, 1000, rednerobj, tiker);
    button.textContent = 'Stop';
    rednerobj.counting = 1;
    rednerobj.intervalids.push(interval);
    button.addEventListener("click", function () { return myEventHandler(rednerobj, tiker, button); });
    timer.appendChild(tiker);
    reihe.appendChild(timer);
    if (rednerarray.array.length != 0) {
        for (var i = 0; i < rednerarray.array.length; i++) {
            for (var j = 0; j < rednerarray.array[i].intervalids.length; j++) {
                clearInterval(rednerarray.array[i].intervalids[j]);
            }
            rednerarray.array[i].counting = 0;
        }
    }
    var collection = document.querySelectorAll("button");
    var start = 'Stop';
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].textContent === start) {
            collection[i].textContent = 'Start';
        }
    }
    rednerarray.array.push(rednerobj);
    return tabelle;
}
function setupU_5_1() {
    var mainref = document.getElementById("main");
    mainref.replaceChildren();
    setupMainBereich();
    var main_header = document.getElementById("mainheader");
    var main_main = document.getElementById("main_main");
    var main_container = document.getElementById("main_container");
    main_main.innerHTML = '';
    main_header.innerHTML = '';
    var ueberschrift = document.createElement("h1");
    ueberschrift.appendChild(document.createTextNode("Performanz-Messungen von DOM-Operationen"));
    var tabelle = document.createElement("table");
    tabelle.setAttribute("id", "benchmarktabelle");
    tabelle.setAttribute("class", "tabelle");
    var reihe0 = tabelle.insertRow(-1);
    var zelle = reihe0.insertCell(0);
    zelle.appendChild(document.createTextNode("JS Methoden"));
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
    codediv.innerHTML = "..." + "<br>" +
        "<code>let t0 = performance.now();</code>" + "<br>" +
        "<code>for(i=0;i<500;i++){</code>" + "<br>" +
        "<code>div.innerHTML+=text;}</code>" + "<br>" +
        "<code>let t1 = performance.now();</code>" + "<br>" +
        "...";
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
    BackgroundcolorWhite();
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
    var btn = document.getElementById("btn");
    var eingabefeld = document.getElementById("eingabe");
    btn.addEventListener("click", function () { return addRednerInListe(liste, createRedner(new Redner(eingabefeld.value))); });
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
    headline.appendChild(document.createTextNode("Übung 5.3"));
    main_header_ref.appendChild(headline);
    var button = document.createElement("button");
    button.textContent = 'sortieren';
    var tablediv = document.createElement("div");
    var addbutton = document.createElement("button");
    addbutton.textContent = 'hinzufügen';
    zelle.appendChild(input1);
    zelle = reihe0.insertCell(1);
    zelle.appendChild(input2);
    zelle = reihe0.insertCell(2);
    zelle.appendChild(addbutton);
    zelle = reihe0.insertCell(3);
    zelle.appendChild(button);
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("5.3. TopSort als Web-App"));
    h2.style.textAlign = "center";
    var textdiv = document.createElement("div");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Katze Hund Hund Esel Hahn Katze"));
    p.style.height = "20px";
    textdiv.appendChild(p);
    textdiv.style.backgroundColor = "#e5e7ea";
    textdiv.style.borderRadius = "15px";
    var listdiv = document.createElement("div");
    tablediv.style.display = "flex";
    tablediv.style.justifyContent = "center";
    tablediv.style.display = "flex";
    tablediv.style.justifyContent = "center";
    BackgroundcolorWhite();
    main_main_ref.appendChild(h2);
    tablediv.appendChild(table);
    listdiv.appendChild(liste);
    main_main_ref.appendChild(tablediv);
    main_main_ref.appendChild(listdiv);
    var sortiert = 0;
    button.addEventListener("click", function () {
        if (sortiert === 0) {
            var col = liste.querySelectorAll("li");
            var str = "";
            for (var i = 0; i < col.length - 1; i++) {
                str = str + col[i].textContent + " ";
            }
            str = str + col[col.length - 1].textContent;
            while (str.includes("[") || str.includes("]")) {
                if (str.includes("[")) {
                    var ar = str.replaceAll("[", "");
                    str = ar;
                }
                if (str.includes("]")) {
                    var ar = str.replace("]", "");
                    str = ar;
                }
            }
            var strohnespace = str.split(" ");
            var array = str.replaceAll(",", " ").split(" ");
            var knotenAr = new Array();
            var graph = new Graph();
            for (var i = 0; i < array.length; i++) {
                if (!knotenAr.includes(array[i])) {
                    knotenAr.push(array[i]);
                }
            }
            for (var i = 0; i < knotenAr.length; i++) {
                graph.addKnoten(knotenAr[i]);
            }
            var adja = new Array();
            for (var _i = 0, knotenAr_1 = knotenAr; _i < knotenAr_1.length; _i++) {
                var i = knotenAr_1[_i];
                adja[adja.indexOf(i)] = new Array();
            }
            for (var i in strohnespace) {
                var tmp = strohnespace[i].split(",");
                graph.addKante(tmp[0], tmp[1]);
            }
            var result = graph.topologischSortieren();
            var li = document.createElement("li");
            li.style.padding = "5px";
            li.style.borderLeft = "1px solid lightgrey";
            li.style.borderRight = "1px solid lightgrey";
            li.style.borderBottom = "1px solid lightgrey";
            li.style.backgroundColor = "lightyellow";
            var ergstr = "";
            for (var i in result) {
                ergstr = ergstr + result[i] + " ";
            }
            li.appendChild(document.createTextNode("Sortierung (v.l.n.r) = " + ergstr));
            liste.appendChild(li);
            sortiert = 1;
        }
    });
    var ele_cntr = 0;
    addbutton.addEventListener("click", function () {
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
            var input1_1 = document.getElementById("input1");
            var input2_1 = document.getElementById("input2");
            li.appendChild(document.createTextNode("[" + input1_1.value + "," + input2_1.value + "]"));
            liste.appendChild(li);
            ele_cntr++;
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
    var main_main_ref = document.getElementById("main_main");
    var main_header_ref = document.getElementById("mainheader");
    var eingabedivu6 = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Klammerpaare"));
    main_header_ref.appendChild(h1);
    var eingabeu6 = document.createElement("input");
    eingabeu6.setAttribute("type", "search");
    eingabedivu6.appendChild(eingabeu6);
    eingabedivu6.style.display = "flex";
    eingabedivu6.style.justifyContent = "center";
    eingabeu6.style.marginTop = "25px";
    main_main_ref.appendChild(eingabedivu6);
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
    main_header_ref.appendChild(ueberschriftcontainer);
    main_main_ref.appendChild(analysecontainer);
    main_main_ref.appendChild(Plagiatsresolution);
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
                    column.innerHTML = '<b>Stopwörter</b>';
                    column = row.insertCell(1);
                    column.innerHTML = '<b>Anzahl</b>';
                    filtered.forEach(function (x) {
                        var row = tabelle.insertRow(-1);
                        var column = row.insertCell(0);
                        column.appendChild(document.createTextNode(x[0]));
                        column = row.appendChild(document.createTextNode(x[1]));
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
    promisediv.style.textAlign = "center";
    var textAdiv = document.createElement("div");
    var textBdiv = document.createElement("div");
    main_main.appendChild(textAdiv);
    main_main.appendChild(textBdiv);
    main_main.appendChild(promisediv);
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Promises"));
    main_header.appendChild(h1);
    fetch('http://127.0.0.1:5500/A.txt').then(function (response) { return response.text(); }).then(function (text) {
        var arrayA = text.split(/\r?\n/);
        fetch('http://127.0.0.1:5500/B.txt').then(function (response) { return response.text(); }).then(function (text) {
            var arrayB = text.split(/\r?\n/);
            var _loop_3 = function (i) {
                setTimeout(function () { return promisediv.innerHTML += arrayA[i]; }, 100);
                setTimeout(function () { return promisediv.innerHTML += arrayB[i] + '<br>'; }, 100);
            };
            for (var i = 0; i < arrayB.length; i++) {
                _loop_3(i);
            }
        });
    });
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
    var main_main_ref = document.getElementById("main_main");
    var main_header_ref = document.getElementById("mainheader");
    var promisediv = document.createElement("div");
    promisediv.style.textAlign = "center";
    var textAdiv = document.createElement("div");
    var textBdiv = document.createElement("div");
    main_main.appendChild(textAdiv);
    main_main.appendChild(textBdiv);
    main_main.appendChild(promisediv);
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("async / await"));
    main_header.appendChild(h1);
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
function addListenerToButton(button, maininput, headerinput) {
    button.addEventListener("click", function () { BackgroundcolorWhite(); populateMain(maininput); populateHeader(headerinput); });
}
var dropdownbuttoncollection = Array.from(document.getElementsByClassName("drpdwnbtn"));
(function setupU_8_3() {
    var _this = this;
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var response, json, _i, _a, o_1, itag, _b, _c, ob_1, button, dropdowncontainerbuttoncollection, _d, dropdowncontainerbuttoncollection_1, dcb, _e, dropdownbuttoncollection_1, b, i, _f, _g, o, _loop_4, _h, _j, ob;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, fetch('http://127.0.0.1:5500/content.json')];
                case 1:
                    response = _k.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _k.sent();
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
                        dcb.addEventListener("mouseover", function () {
                            this.style.backgroundColor = "#34568B";
                            this.style.color = "white";
                        });
                        dcb.addEventListener("mouseleave", function () {
                            this.style.backgroundColor = "#dddddd";
                            this.style.color = "black";
                        });
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
    var main_container = document.getElementById("main_container");
    main_main.replaceChildren();
    main_header.replaceChildren();
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Covid-19 Fälle"));
    main_header.appendChild(h1);
    var div = document.createElement("div");
    div.setAttribute("id", "barchartdiv");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    main_main.append(div);
    BackgroundcolorWhite();
    (function (_) { return __awaiter(_this, void 0, void 0, function () {
        var response, json, data, margin, width, height, svg, x, y;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://127.0.0.1:5500/covid-19.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    data = Object.values(json);
                    margin = { top: 10, right: 30, bottom: 90, left: 60 }, width = 460 - margin.left - margin.right, height = 450 - margin.top - margin.bottom;
                    svg = d3.select("#barchartdiv")
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    x = d3.scaleBand()
                        .range([0, width])
                        .domain(data.map(function (d) { return d.name; }))
                        .padding(0.2);
                    svg.append("g")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x))
                        .selectAll("text")
                        .attr("transform", "translate(-10,0)rotate(-45)")
                        .style("text-anchor", "end");
                    y = d3.scaleLinear()
                        .domain([0, d3.max(data, function (d) { return d.anzahl; })])
                        .range([height, 0]);
                    svg.append("g")
                        .call(d3.axisLeft(y));
                    // Bars
                    svg.selectAll("rect")
                        .data(data)
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
                    return [2 /*return*/];
            }
        });
    }); })();
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
var sidenavstatus = 0;
function openCloseSideNav() {
    if (sidenavstatus === 0) {
        openSidenav();
        sidenavstatus = 1;
        return;
    }
    if (sidenavstatus === 1) {
        closeSidenav();
        sidenavstatus = 0;
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
