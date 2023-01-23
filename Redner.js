function makeRedner(name) {
    var new_Redner = { name, std: 0, min: 0, sek: 0, counting: 0, intervalids: [0], startstopsymbol: "Stop",
        timer: function (htmlElement) {
            this.sek++;
            if (this.sek === 60) {
                this.min++;
                this.sek = 0;
                if (this.min === 60) {
                    this.std++;
                    this.min = 0;
                }
            }
            if (this.sek < 10 && this.min < 10 && this.std < 10) {
                htmlElement.textContent = "0" + String(this.std) + ":" + "0" + String(this.min) + ":" + "0" + String(this.sek);
            }
            if (this.min < 10 && this.std < 10 && this.sek >= 10) {
                htmlElement.textContent = "0" + String(this.std) + ":" + "0" + String(this.min) + ":" + String(this.sek);
            }
            if (this.sek < 10 && this.std < 10 && this.min >= 10) {
                htmlElement.textContent = "0" + String(this.std) + ":" + String(this.min) + ":" + "0" + String(this.sek);
            }
            if (this.min < 10 && this.sek < 10 && this.std >= 10) {
                htmlElement.textContent = String(this.std) + ":" + "0" + String(this.min) + ":" + "0" + String(this.sek);
            }
            if (this.std < 10 && this.min >= 10 && this.sek >= 10) {
                htmlElement.textContent = "0" + String(this.std) + ":" + String(this.min) + ":" + String(this.sek);
            }
            if (this.std >= 10 && this.min >= 10 && this.sek < 10) {
                htmlElement.textContent = String(this.std) + ":" + String(this.min) + ":" + "0" + String(this.sek);
            }
            if (this.std >= 10 && this.min < 10 && this.sek >= 10) {
                htmlElement.textContent = String(this.std) + ":" + "0" + String(this.min) + ":" + String(this.sek);
            }
        },
        swapSymbols: function () {
            if (this.startstopsymbol === "Stop") {
                this.startstopsymbol = "Start";
            }
            else {
                this.startstopsymbol = "Stop";
            }
        },
        setStartStopSymbol: function (string) {
            this.startstopsymbol = string;
        },
        clearAllIntervalIds: function () {
            for (const id of this.intervalids) {
                clearInterval(this.intervalids[this.intervalids.indexOf(id)]);
            }
        },
        stopAll: function (rednerArray) {
            rednerArray.forEach((redner) => { redner.clearAllIntervalIds(); redner.counting = 0; });
        },
        setAllButtonTextToStop: function () {
            var collection = document.querySelectorAll("button");
            var start = 'Stop';
            for (let i = 0; i < collection.length; i++) {
                if (collection[i].textContent === start) {
                    collection[i].textContent = 'Start';
                }
            }
        },
        myEventHandler: function (htmlElement, button, rednerArray) {
            var event = this.counting;
            if (event === 0) {
                this.stopAll(rednerArray);
                this.setAllButtonTextToStop();
                let interval = setInterval(this.timer.bind(this), 1000, htmlElement);
                this.intervalids.push(interval);
                this.counting = 1;
                this.startstopsymbol = 'Stop';
                button.textContent = this.startstopsymbol;
            }
            if (event === 1) {
                this.clearAllIntervalIds();
                this.counting = 0;
                button.textContent = 'Start';
            }
        },
        addRednerInListe: function (liste, rednerobjintabelle) {
            let li = document.createElement("li");
            li.appendChild(rednerobjintabelle);
            liste.appendChild(li);
        },
        createRedner: function (rednerarray) {
            const tabelle = document.createElement("table");
            let reihe = tabelle.insertRow(-1);
            var button = document.createElement("button");
            button.appendChild(document.createTextNode('Start'));
            reihe.insertCell(0);
            reihe.appendChild(document.createTextNode(this.name));
            reihe.insertCell(1);
            reihe.appendChild(button);
            let timer = document.createElement("p");
            reihe.insertCell(2);
            var display = document.createTextNode("00:00:00");
            timer.appendChild(display);
            var interval = setInterval(this.timer.bind(this), 1000, timer);
            button.textContent = this.startstopsymbol;
            this.counting = 1;
            this.intervalids.push(interval);
            button.addEventListener("click", () => this.myEventHandler(timer, button, rednerarray));
            reihe.appendChild(timer);
            if (rednerarray.length != 0) {
                rednerarray.forEach((redner) => { redner.clearAllIntervalIds(); redner.counting = 0; });
            }
            this.setAllButtonTextToStop();
            rednerarray.push(this);
            return tabelle;
        }
    };
    return new_Redner;
}
export { makeRedner };
