



function removeChildrenInDiv(div:HTMLElement): void{
  
  div.replaceChildren();
}

(function AddClickListenerToButton(){
  //Clicklistener für die Button im Sidenav
var sandwichbutton:HTMLElement = document.getElementById("sandwichbutton")!;

sandwichbutton.addEventListener("click",openCloseSideNav);



const buttonarray = Array.from(document.getElementsByClassName("regularButton"));
const functionArray = [domBenchmarks,setupU_5_2,setupU_5_3,setupU_6_1,setupU_7,setupU_8_1,setupU_8_2,setup_tic_tac_toe,setup_covid19_barchart,vue_singlefile];
buttonarray.forEach(button=>{button.addEventListener("click",functionArray[buttonarray.indexOf(button)])});

})();



class tic_tac_toe{

  constructor(){
      this.spieler="o";
     this.controller = new AbortController();
      this.spielfeld = [null,null,null,null,null,null,null,null,null];
  }
  spieler:string;
  controller:AbortController;
  spielfeld:string[]|null[];
  werFaengtAn():void{
    //Beginnender Spieler wird zufällig ermittelt
      let oneOrZero = (Math.random()>=0.5)? 1 : 0;
      if(oneOrZero===1){
          this.spieler = "x";
      }
      else{
          this.spieler = "o";
      }
  
  }
  setupSpielfeld(div:HTMLElement):void{
      //Das Spielfeld wird in ein div nach Wahl geladen
      //Jedes Feld ist 10x10 Groß
      div.innerHTML = '<svg id ="svg" width="300"height="400"viewBox="0 0 32 32">'
          +   '<line x1="10.5"y1="0"x2="10.5"y2="32"stroke="black"stroke-width="1"></line>'+
  '<line x1="21.5"y1="0"x2="21.5"y2="32"stroke="black"stroke-width="1"></line>'+
  '<line x1="0"y1="10.5"x2="32"y2="10.5"stroke="black"stroke-width="1"></line>'+
  '<line x1="0"y1="21.5"x2="32"y2="21.5"stroke="black"stroke-width="1"></line>'+
  '<rect x="0"y="0"width="10"height="10"fill="white"></rect>'+
  '<rect x="11"y="0"width="10"height="10"fill="white"></rect>'+
  '<rect x="22"y="0"width="10"height="10"fill="white"></rect>'+
  
  '<rect x="0"y="11"width="10"height="10"fill="white"></rect>'+
  '<rect x="11"y="11"width="10"height="10"fill="white"></rect>'+
  '<rect x="22"y="11"width="10"height="10"fill="white"></rect>'+
  
  '<rect x="0"y="22"width="10"height="10"fill="white"></rect>'+
  '<rect x="11"y="22"width="10"height="10"fill="white"></rect>'+
  '<rect x="22"y="22"width="10"height="10"fill="white"></rect>'+
  '</svg>';
  }
  
  addListener(div:HTMLDivElement):void{
    //Click-Listener für jedes Feld
      const rectcollection =Array.from(div.querySelectorAll("rect"));
      //Objekt this-Referenz abspeichern
    var self = this;
      rectcollection.forEach((rect)=>{
          rect.addEventListener("click",function handler(){
  
              //Vergabe einer id für ein Feld
              var listenerid = rectcollection.indexOf(rect);
             
              if(self.istFrei(listenerid,self)){
              //Wenn ein Feld noch nicht bespielt wurde, dann...
              if(self.spieler==="o"){
                  
                 let coords = self.getKoordinaten(this);// Koordinaten des Feldes ermitteln               
                 let circle = self.drawCircle(coords);// Kreis erzeugen
                self.drawOnSpielfeld(circle); // Aufs Spielfeld damit
                self.spielfeld[listenerid]="o";//Feld wird markiert mit aktuellem Spieler
               setTimeout(()=>self.gibtEsEinenGewinner("o",self),10);//Gewinn Bedingungen checken
                 self.changeSpieler(self);//Nächster Spieler ist jetzt dran
              }
             else if(self.spieler==="x"){
              // Spieler mit Kreuz
              // Koordinaten einholen
                  let coords = self.getKoordinaten(this);
                  //Linie erzeugen
                  let linie1 = self.drawLine(coords);
                  //Gedrehte Linie erzeugen
                  let linie2 = self.drawRotatedLine(coords);
                  //Kreuz erzeugen
                  let cross = self.drawCross(linie1,linie2);
                  //Kreuz auf Spielfeld anzeigen
                  self.drawOnSpielfeld(cross);
                  //Feld markieren
                  self.spielfeld[listenerid]="x";
                  //Gewonnen?
                  setTimeout(()=>self.gibtEsEinenGewinner("x",self),10);
                  //Kreis ist jetzt dran
                 self.changeSpieler(self);
  
  
              }
          }
  
  
  
          },{signal: self.controller.signal});
      });
  
  }
  
  changeSpieler(self:tic_tac_toe):void{
    //nach jedem "Zug" wird der Spieler gewechselt
      if(self.spieler==="o"){
          self.spieler="x";
      }
      else{self.spieler="o"};
  
  
  }
  
  istFrei(index:number,self:tic_tac_toe):boolean{
    //Check ob ein Feld schon belegt ist
      if(self.spielfeld[index]===null){
          return true;
      }
      else{return false;}
  
  }
  getKoordinaten(rect:SVGRectElement):number[]{
    // Gibt die (x,y) Koordinaten eines Felds(rect) zurück
    let x = rect.getAttribute("x");
    let y = rect.getAttribute("y")
  return [Number(x),Number(y)];
  
  }
  drawRotatedLine(coords:number[]):SVGLineElement{
    //Gibt eine um 90Grad gedrehte Linie zurück
  let linie = document.createElementNS("http://www.w3.org/2000/svg","line");
  let x1 = coords[0];
  let y1 = coords[1];
  let x1cor = Number(x1)+8;
  let y1cor = Number(y1)+2;
  let x2cor = Number(x1)+2;
  let y2cor = Number(y1)+8;
  linie.setAttribute("x1",String(x1cor));
  linie.setAttribute("y1",String(y1cor));
  linie.setAttribute("x2",String(x2cor));
  linie.setAttribute("y2",String(y2cor));
  linie.setAttribute("stroke","red");
  
  return linie;
  
  
  }
  drawLine(coords:number[]):SVGElement{
  // Gibt eine linie zurück, passend zu den übergebenen Koordinaten
  
  let linie = document.createElementNS("http://www.w3.org/2000/svg","line");
  let x1 = coords[0];
  let y1 = coords[1];
  //Koordinaten werden modifiziert damit die Linie nicht von Rand zu Rand verläuft
  let x1cor = Number(x1)+2;
  let y1cor = Number(y1)+2;
  let x2cor = Number(x1)+8;
  let y2cor = Number(y1)+8;
  linie.setAttribute("x1",String(x1cor));
  linie.setAttribute("y1",String(y1cor));
  linie.setAttribute("x2",String(x2cor));
  linie.setAttribute("y2",String(y2cor));
  linie.setAttribute("stroke","red");
  return linie;
  
  }
  drawCircle(coords:number[]):SVGElement{
    //Gibt einen,in ein Feld passenden Kreis zurück
  let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
  
  let x = Number(coords[0])+5;
  
  
  let y = Number(coords[1])+5;
  circle.setAttribute("cx",String(x));
  circle.setAttribute("cy",String(y));
  circle.setAttribute("r","4");
  circle.setAttribute("fill","royalblue");
  
  return circle;
  
  
  
  }
  drawCross(linie1:SVGElement,linie2:SVGElement):SVGElement{
  //Gibt eine Gruppe Kreuz zurück
  
  let gruppe = document.createElementNS("http://www.w3.org/2000/svg","g");
  gruppe.appendChild(linie1);
  gruppe.appendChild(linie2);
  return gruppe;
  
  
  
  }
  drawOnSpielfeld(element:SVGElement):void{
    //Fügt ein Element dem svg-Element hinzu
  const svg = <SVGElement>document.querySelector("svg");
  
  svg.appendChild(element);
  
  
  }
  
  gibtEsEinenGewinner(zeichen:string,objthisref:tic_tac_toe):void{
    //Hier wird gecheckt ob die Bedingungen für einen Sieg erfüllt sind
  if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[1]===zeichen && objthisref.spielfeld[2]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[3]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[5]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[6]===zeichen && objthisref.spielfeld[7]===zeichen && objthisref.spielfeld[8]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[3]===zeichen && objthisref.spielfeld[6]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[1]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[7]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[2]===zeichen && objthisref.spielfeld[5]===zeichen && objthisref.spielfeld[8]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[8]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  if(objthisref.spielfeld[6]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[2]===zeichen){
      objthisref.controller.abort();
      if(zeichen==="x"){
     alert("Kreuz hat gewonnen!");}
     if(zeichen==="o"){alert("Kreis hat gewonnen!");}
  }
  
  }
  
  
}
class Redner{
  constructor(name:string){
    this.name = name;
    this.std=0;
    this.min=0;
    this.sek=0;
    this.counting=0;
    this.intervalids=[];
    this.startstopsymbol="Stop";
  }
  startstopsymbol:string;
  name:string;
  counting:number;
  std:number;
  min:number;
  sek:number;
  intervalids:any[];
  setStartStopSymbol(string:string):void{
  this.startstopsymbol=string;
  }
  timer(htmlElement:HTMLElement):void{
    this.sek++;
  
  
    if(this.sek===60){
      this.min++;
      this.sek=0;
      if(this.min===60){
        this.std++;
        this.min=0;
      
      }
    }
    htmlElement.textContent = String(this.std)+':'+String(this.min)+':'+String(this.sek);
  }
  swapSymbols():void{
  if(this.startstopsymbol==="Stop"){
    this.startstopsymbol="Start";
  }
  else{this.startstopsymbol="Stop";}
  }
  clearAllIntervalIds():void{
    for(const id of this.intervalids){
      clearInterval(this.intervalids[this.intervalids.indexOf(id)]);
    }
  }
  }
class Vorrang{
    constructor(array2d:any[][]){
  this.array2d = array2d;
  
      this.adj = new Array();
      this.stack = new Array();
      this.besucht = new Array();
     this.alleKnoten = new Array();
      this.knotenSet = new Set();
      this.anzahlVorrang = 0;
      
      this.identifyKnoten();
     this.setupAdj(this.knotenSet.size);
    
      for(let i in this.array2d){
        
            this.addKante(array2d[i][0],array2d[i][1]);
        
      }
      this.knotenSet.forEach((item:any)=>this.topologischSortieren(item));
    }
    array2d:any[][];
    adj:any[];
    stack:any[];
    besucht:any[];
    alleKnoten:any[];
    knotenSet:any;
    anzahlVorrang:number;

    returnSortierung():any[]{
      let ergarray = new Array();
      this.stack.forEach(k=>{ergarray.push(this.stack[this.stack.length-1-this.stack.indexOf(k)])});
return ergarray;
    }

    printAdj():void{
        for(let i in this.adj){
           
            for(let j in this.adj[i]){
                console.log(this.adj[i][j]);
            }
        }
    }

    printStack():void{
for(let i in this.stack){
    console.log(this.stack[i]);
}

    }
    printKnotenSet():void{
       this.knotenSet.forEach((item:any)=>{console.log(item)});
    }
   

  
    identifyKnoten():void{
      
      for(let i in this.array2d){
        
        for(let j in this.array2d[i]){
          this.alleKnoten.push(this.array2d[i][j]);
         this.knotenSet.add(this.array2d[i][j]);
        }
      }
  
    }
  
    setupAdj(setSize:number):void{
      for(let i=0;i<setSize;i++){
        this.adj.push([]);
      }
  
    }
    addKante(k1:any,k2:any):void{
        let index = 0;
        let knotenSetarray = Array.from(this.knotenSet);
        for(let i=0;i<knotenSetarray.length;i++){
            if(knotenSetarray[i]===k1){
                index = i;
            }

        }
        
        this.adj[index].push(k2);
      }
      topsorthelper(knoten:any):void{
       
        this.besucht.push(knoten);
        for(let i in this.array2d){
         this.array2d[i] = this.array2d[i].filter(item => item!= knoten);
         
        }
       var anzahl = 0;
        for(let i in this.array2d){
      
        
        if(this.array2d[i].length!=0){
         anzahl++;
        }
        
        }
        this.anzahlVorrang = anzahl;
        let knotenArray = Array.from(this.knotenSet);
        let indexfuerknoten=0;
        for(let i=0;i<knotenArray.length;i++){
          if(knotenArray[i]===knoten){
            indexfuerknoten=i;
          }
        }
  
        for(let i=0;i<this.adj[indexfuerknoten].length;i++){
         
                      if(!this.besucht.includes(this.adj[indexfuerknoten][i])){
                          
                          this.topsorthelper(this.adj[indexfuerknoten][i])
                      }
                      
                  }
      this.stack.push(knoten);
      }
      topologischSortieren(knoten:any):void{
  
        if (!this.besucht.includes(knoten)){
           
            this.topsorthelper(knoten);
            
        }
  }
  
 * [Symbol.iterator]() {
  

  
  for(let i=0;i<this.knotenSet.size;i++ ){
  
yield this.stack[this.knotenSet.size-1-i];
  }
  

  }
  }

function mouseOver(this: any):void{
 
  this.style.backgroundColor= "#34568B";
  this.style.color="white";
  
    

}
function mouseOut(this: any):void{
  this.style.backgroundColor="white";
  this.style.color ="black";
   

}
(function hoverForSidenavBtn():void{
// hovereffekt für sidenav button
const sidebuttondiv:HTMLDivElement = <HTMLDivElement>document.getElementById("sidebutton");
const buttoncollection:HTMLCollectionOf<HTMLButtonElement> = sidebuttondiv.getElementsByTagName("button");
for(let i=0;i<buttoncollection.length;i++){
  buttoncollection[i].style.cursor = "pointer";
  buttoncollection[i].addEventListener("mouseover",mouseOver);
  buttoncollection[i].addEventListener("mouseout",mouseOut);
}})();

(function AddClickListenerToDropdownButton():void{
  const sidebuttondiv = <HTMLDivElement>document.getElementById("sidebutton");
var sidenavoverlay = <HTMLDivElement>document.getElementById("sidenavoverlay");
sidenavoverlay.addEventListener("click",()=>{openCloseSideNav()});

//Button, die Dropdownbutton sind, bekommen einen listener um den Dropdowncontainer ein- oder auszublenden
    var dropdownbutton = Array.from(sidebuttondiv.getElementsByClassName("drpdwnbtn"));
for(let i=0;i<dropdownbutton.length;i++){
  
  dropdownbutton[i].addEventListener("click",function(this:any){
 
    var dropdown = this.nextElementSibling;
if(dropdown.style.display === "block"){dropdown.style.display = "none";}
else{dropdown.style.display="block";}});
 
 

}
})();
(function addBackgroundEffectToDropdownButton():void{
  // Dropdownbutton haben eine feste Hintergrundfarbe wenn sie geklickt wurden
var buttonclicked:boolean[] = <boolean[]>new Array();
let dropdownbutton:Element[] = Array.from(document.getElementsByClassName("drpdwnbtn"));
dropdownbutton.forEach((button)=>{buttonclicked.push(false)});

dropdownbutton.forEach((button)=>{button.addEventListener("click",function(){
if(buttonclicked[dropdownbutton.indexOf(button)]===false){
  button.removeEventListener("mouseout",mouseOut);
  buttonclicked[dropdownbutton.indexOf(button)]=true;
}
else{button.addEventListener("mouseout",mouseOut);
buttonclicked[dropdownbutton.indexOf(button)]=false;}
  
})});
})();
    

function setupMainBereich():void{
  // Hier wird ein Bereich(header,main) eingerichtet, um später Inhalte dort hineinzuladen
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main"); 
 let main_container:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  main_container.setAttribute("id","main_container");
 let main_header:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  main_header.setAttribute("id","mainheader");
 let main_main:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  main_main.setAttribute("id","main_main");
 let main_footer:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  main_footer.setAttribute("id","main_footer");


mainref.appendChild(main_container);
main_container.appendChild(main_header);

main_container.appendChild(main_main);
main_container.appendChild(main_footer);

}
function MainBereichStyling():void{
  // styling für den Bereich(header,main)
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main");
  const main_header:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
  const main_main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
  const main_container:HTMLDivElement =< HTMLDivElement>document.getElementById("main_container");
  main_header.style.backgroundColor="white";
main_main.style.backgroundColor="white";
main_main.style.marginTop = "40px";

main_container.style.backgroundColor='white';
main_container.style.minHeight="700px";
main_header.style.borderBottom = "1px solid lightgray"
main_container.style.borderLeft = "10px solid white";
main_container.style.borderRight = "10px solid white";
main_header.style.display = "flex";
main_header.style.justifyContent = "center";
mainref.style.marginTop = "30px";

}
function domBenchmarks():void{
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  setupMainBereich();
  MainBereichStyling();
  const main_header:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
  const main_main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
 
 
 
 

  let ueberschrift:HTMLHeadElement = <HTMLHeadElement> document.createElement("h1");
  ueberschrift.appendChild(document.createTextNode("Performanz-Messungen von DOM-Operationen"));
  var tabelle:HTMLTableElement = <HTMLTableElement>document.createElement("table");
  
  tabelle.setAttribute("id","benchmarktabelle");
  tabelle.setAttribute("class","tabelle");
  let reihe0:HTMLTableRowElement = tabelle.insertRow(-1);
  let zelle:HTMLTableCellElement = reihe0.insertCell(0);
  zelle.appendChild(document.createTextNode("Dom-Operation"));
  zelle = reihe0.insertCell(1);
  zelle.appendChild(document.createTextNode("Performance in Millisekunden für 500 Iterationen"))
  
let reihe:HTMLTableRowElement = tabelle.insertRow(-1);
zelle = reihe.insertCell(0);

zelle.appendChild(document.createTextNode("innerHTML"));

zelle = reihe.insertCell(1);
zelle.appendChild(document.createTextNode(String(benchmarkInnerHTML())));
let reihe2:HTMLTableRowElement = tabelle.insertRow(-1);
zelle = reihe2.insertCell(0);
zelle.appendChild(document.createTextNode("innerText"));
zelle = reihe2.insertCell(1);
zelle.appendChild(document.createTextNode(String(benchmarkInnerText())));
let reihe3:HTMLTableRowElement = tabelle.insertRow(-1);
zelle = reihe3.insertCell(0);
zelle.appendChild(document.createTextNode("textContent"));
zelle = reihe3.insertCell(1);
zelle.appendChild(document.createTextNode(String(benchmarkTextContent())));

  ueberschrift.setAttribute("id","headline");
let tabellendiv:HTMLDivElement = document.createElement("div");
tabellendiv.setAttribute("id","tabellendiv");
tabellendiv.appendChild(tabelle);
tabellendiv.style.display = "flex";
tabellendiv.style.justifyContent = "center";
let mainueberschr:HTMLHeadElement = document.createElement("h2");
mainueberschr.appendChild(document.createTextNode("Performanz-Messungen von DOM-Operationen"));
main_header.appendChild(ueberschrift);
main_header.style.textAlign="center";
let codeblock = document.createElement("code");
let codediv:HTMLDivElement = document.createElement("div");
let div = document.createElement("div");
div.style.display ="flex";
div.style.justifyContent="center";
div.style.marginBottom = "40px";
codediv.style.border ="1px solid lightgrey";
codediv.style.padding = "10px";
codediv.style.width = "500px";
codediv.innerHTML = "<b>Codesample</b><br>..."+"<br>"+
"<code>let t0 = performance.now();</code>"+"<br>"+
"<code>for(i=0;i<500;i++){</code>"+"<br>"+
"<code>div.innerHTML+=text;}</code>"+"<br>"+
"<code>let t1 = performance.now();</code>"+"<br>"+
"<code>return t1-t0;</code><br>"+
"...";
codediv.style.backgroundColor="#e7e9eb";

div.appendChild(codediv);
main_main.appendChild(div);
main_main.appendChild(tabellendiv);


tabelle.style.border = "1px solid black";
let trs:HTMLCollectionOf<HTMLTableCellElement> = tabelle.getElementsByTagName("td");
for(let i=0;i<trs.length;i++){
  
trs[i].style.border = "1px solid black";
}
var odd:NodeListOf<HTMLTableRowElement> = tabelle.querySelectorAll("tr");

for(let i=1;i<odd.length;i++){
  odd[0].style.backgroundColor="lightyellow";
  if(i%2 === 1){
  odd[i].style.backgroundColor = "#f4f4f4";}
  else{
    odd[i].style.backgroundColor = "white";
  }
}





}
function benchmarkInnerHTML():number{

  let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
  let div:HTMLDivElement = document.createElement("div");
  
  main.appendChild(div);
  

let text:string = '<h1>Eine Überschrift</h1>';


let t0:number = performance.now();

 for(let i=0;i<500;i++){
div.innerHTML+=text;
 }

let t1:number = performance.now();
main.removeChild(div);

return t1-t0;

}
function benchmarkInnerText():number{

  let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
  let div:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  div.setAttribute("id","testdiv");
  main.appendChild(div);
  

let text:string = '<h1>Eine Überschrift</h1>';


let t0:number = performance.now();

 for(let i=0;i<1000;i++){
div.innerText=text;
 }

let t1:number = performance.now();
main.removeChild(div);

return t1-t0;

}
function benchmarkTextContent():number{

  let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
  let div:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  div.setAttribute("id","testdiv");
  main.appendChild(div);
 

let text:string = '<h1>Eine Überschrift</h1>';


let t0:number = performance.now();

 for(let i=0;i<1000;i++){
div.textContent=text;
 }

let t1:number = performance.now();
main.removeChild(div);

return t1-t0;

}

function setup_tic_tac_toe(){
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main");
  removeChildrenInDiv(mainref);
 setupMainBereich(); 
  MainBereichStyling();
  
  const main_header:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
  const main_main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
  
 
let div:HTMLDivElement = document.createElement("div");
let header:HTMLHeadElement = document.createElement("h1");
header.appendChild(document.createTextNode("Tic Tac Toe"));
main_header.appendChild(header);
let ttt:tic_tac_toe = new tic_tac_toe();
ttt.setupSpielfeld(div);
ttt.addListener(div);
ttt.werFaengtAn();
main_main.appendChild(div);
div.style.display="flex";
div.style.justifyContent="center";
  

}

function setAllButtonTextToStop():void{
  var collection:NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
  var start:string = 'Stop';
  
  
  for (let i = 0; i < collection.length; i++) {
    
      if(collection[i].textContent === start){
        collection[i].textContent = 'Start';
        
      }
  }
}
function stopAll(rednerArray:Redner[]):void{
 rednerArray.forEach((redner)=>{redner.clearAllIntervalIds();redner.counting=0;});

}


function myEventHandler(rednerobj:Redner,htmlElement:HTMLElement,button:HTMLElement,rednerArray:Redner[]):void{
  
   var event:number = rednerobj.counting;
  
  if(event === 0){
   stopAll(rednerArray);
    setAllButtonTextToStop();
    let interval:number = setInterval(rednerobj.timer.bind(rednerobj),1000,htmlElement);
    rednerobj.intervalids.push(interval);
    rednerobj.counting = 1;
    rednerobj.startstopsymbol = 'Stop';
    button.textContent = rednerobj.startstopsymbol;
    
    
  }
  if(event === 1 ){
    
   rednerobj.clearAllIntervalIds();
    
    rednerobj.counting = 0;
    button.textContent = 'Start';
    
  }
  
}


function addRednerInListe(liste:HTMLElement, rednerobjintabelle:any):void{
 
  let li:HTMLLIElement = document.createElement("li");
  li.appendChild(rednerobjintabelle);
  liste.appendChild(li);
  
}


function createRedner(name:string,rednerarray:Redner[]){
  if(name!==""){
  let rednerobj:Redner = new Redner(name);



 
  const tabelle = document.createElement("table");
let reihe = tabelle.insertRow(-1);
var button = document.createElement("button");
button.appendChild(document.createTextNode('Start'));

reihe.insertCell(0);
reihe.appendChild(document.createTextNode(rednerobj.name));
reihe.insertCell(1);
reihe.appendChild(button);
let timer = document.createElement("p");
reihe.insertCell(2);
var display = document.createTextNode("0:0:0");
timer.appendChild(display);
var interval = setInterval(rednerobj.timer.bind(rednerobj),1000,timer);
    button.textContent = rednerobj.startstopsymbol;
    rednerobj.counting = 1;
    
rednerobj.intervalids.push(interval);
button.addEventListener("click",()=>myEventHandler(rednerobj,timer,button,rednerarray));


reihe.appendChild(timer);
if(rednerarray.length!=0){
rednerarray.forEach((redner)=>{redner.clearAllIntervalIds();redner.counting = 0;}); 

  }

  
  
 setAllButtonTextToStop();
  
rednerarray.push(rednerobj);


return tabelle;
  }
  }

 



function setupU_5_2(){
  const main = <HTMLDivElement>document.getElementById("main");
  main.replaceChildren();
  setupMainBereich();
  const main_header = <HTMLDivElement>document.getElementById("mainheader");
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  const main_container = <HTMLDivElement>document.getElementById("main_container");

  main_main.innerHTML = '';
  main_header.innerHTML = '';
  

  let us:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
 let h1 = document.createElement("h1");
 h1.appendChild(document.createTextNode('Übung 5.2'));
  us.appendChild(h1);
  
  let mainref = <HTMLDivElement>document.getElementById("main_main");
  

  let ues = document.createElement("h2");
ues.appendChild(document.createTextNode("Rednerliste mit Zeitmessung"));
mainref.appendChild(ues);
let eingabediv = document.createElement("div");
let listendiv = document.createElement("div");
listendiv.setAttribute("id","listendiv");
var liste = document.createElement("ul");
let eingabe = document.createElement("input");
eingabe.setAttribute("type","search");
eingabe.setAttribute("id","eingabe");
eingabe.appendChild(document.createTextNode(''));
let eingabelabel = document.createElement("label");
eingabelabel.textContent='Neuer Redner:';
eingabelabel.setAttribute("for","eingabe");
var eingabebutton = document.createElement("button");
eingabebutton.setAttribute("id","btn");
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
MainBereichStyling();
var rednerarray:Redner[] = new Array();

 
 
 eingabebutton.addEventListener("click",()=> addRednerInListe(liste,createRedner(eingabe.value,rednerarray)));

}

function setupU_5_3():void{
  const mainref = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  setupMainBereich();

  const main_header = <HTMLDivElement>document.getElementById("mainheader");
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  const main_container =< HTMLDivElement>document.getElementById("main_container");
  main_main.innerHTML = '';
  main_header.innerHTML = '';
  
 var liste = document.createElement("ul");
  var table = document.createElement("table");
  let reihe0 = table.insertRow(-1);
  let zelle = reihe0.insertCell(0);
 var input1:HTMLInputElement = document.createElement("input");
 input1.setAttribute("type","search");
 input1.setAttribute("id","input1");
 var input2:HTMLInputElement = document.createElement("input");
 input2.setAttribute("type","search");
 input2.setAttribute("id","input2");
  let main_header_ref = <HTMLDivElement>document.getElementById("mainheader");
  let main_main_ref = <HTMLDivElement>document.getElementById("main_main");
  let headline = document.createElement("h1");
  headline.appendChild(document.createTextNode("TopSort als Web-App"));
  main_header_ref.appendChild(headline);
  let button:HTMLButtonElement = document.createElement("button");
  button.setAttribute("id","sortbutton");
  button.textContent ='sortieren';
  button.style.height ="1.5rem";
  button.style.width = "5rem";
 
  let div = <HTMLDivElement>document.createElement("div");
  
 
  let inputdiv = document.createElement("div");
 
 
  let buttondiv = document.createElement("div");
  
  let addbutton:HTMLButtonElement = document.createElement("button");
  addbutton.setAttribute("id","addbutton");
  addbutton.textContent = 'hinzufügen';
  addbutton.style.height ="1.5rem";
  addbutton.style.width = "5rem";
  inputdiv.appendChild(input1);
  inputdiv.appendChild(input2);
  buttondiv.appendChild(addbutton);
  buttondiv.appendChild(button);
  

  div.appendChild(input1);
  div.appendChild(input2);
  div.appendChild(addbutton);
  div.appendChild(button);
 


let listdiv = document.createElement("div");


div.style.display="flex";
div.style.flexWrap="wrap";
div.style.justifyContent="center";






MainBereichStyling();


listdiv.appendChild(liste);
  main_main_ref.appendChild(div);
  main_main_ref.appendChild(listdiv);
 
  var sortiert = 0;

  button.addEventListener("click",()=>{
   
if(sortiert===0){
  
var vorrang2dArray:any[][] = new Array();
    let col = Array.from(liste.querySelectorAll("li"));
  
col.forEach(ele=>{let str = ele.textContent!.replaceAll("[","").replaceAll("]","").replaceAll(","," ").split(" ");

   vorrang2dArray.push(str);})


let graph = new Vorrang(vorrang2dArray);
let li = document.createElement("li");
li.style.padding = "5px";
li.style.borderLeft ="1px solid lightgrey";
li.style.borderRight = "1px solid lightgrey";
li.style.borderBottom = "1px solid lightgrey";
li.style.backgroundColor ="lightyellow";
var ergstack = graph.returnSortierung();
var ergstr="";

ergstack.forEach(ele=>{ergstr+=ele+" ";})

li.appendChild(document.createTextNode("Sortierung (v.l.n.r) = "+ergstr))
liste.appendChild(li);
sortiert = 1;

  
}
    
  })
  var ele_cntr = 0;
 addbutton.addEventListener("click",(e)=>{
  const input1 = <HTMLInputElement>document.getElementById("input1")!;
  const input2 = <HTMLInputElement>document.getElementById("input2")!;
  if(input1.value&&input2.value){
 
  if(sortiert === 0){
  let li = document.createElement("li");
  li.style.padding = "5px";
  if(ele_cntr===0){
  li.style.border = "1px solid lightgrey";}
  if(ele_cntr%2===0){
    li.style.backgroundColor ="#f4f4f4";
  }
  if(ele_cntr%2===1){
    li.style.backgroundColor = "white";
  }
  if(ele_cntr!=0){li.style.borderLeft ="1px solid lightgrey";li.style.borderRight = "1px solid lightgrey";li.style.borderBottom = "1px solid lightgrey";};

  
  li.appendChild(document.createTextNode("["+input1.value+","+input2.value+"]"));
  liste.appendChild(li);
  ele_cntr++;
  input1.value="";
  input2.value="";
}
}
 })
}

function setupU_6_1():void{
  const mainref = document.getElementById("main")!;
  mainref.replaceChildren();
  setupMainBereich();
  
  const main_header = document.getElementById("mainheader")!;
  const main_main = document.getElementById("main_main")!;
  const main_container = document.getElementById("main_container")!;
  main_main.replaceChildren();
  main_header.replaceChildren();
  
  MainBereichStyling();
 
  
  let eingabedivu6 = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Klammerpaare"));
  main_header.appendChild(h1);
 
  var eingabeu6 = document.createElement("input");
  eingabeu6.setAttribute("type","search");
  eingabedivu6.appendChild(eingabeu6);
  eingabedivu6.style.display = "flex";
  eingabedivu6.style.justifyContent = "center";
  eingabeu6.style.marginTop = "25px";
  
  main_main.appendChild(eingabedivu6);
 
  eingabeu6.style.width = "700px";
 
  eingabeu6.addEventListener("input",()=>{
    const kp1_1 = '(';
    const kp1_2 = ')';
    const kp2_1 = '{';
    const kp2_2 = '}';
    const kp3_1 = '[';
    const kp3_2 = ']';
    const str = eingabeu6.value;
    var klammerarray = new Array();
    for(let i=0;i<str.length;i++){
      if(str[i]===kp1_1||str[i]===kp2_1||str[i]===kp3_1||str[i]===kp1_2||str[i]===kp2_2||str[i]===kp3_2){
        klammerarray.push(str[i]);
      }
    }
   
    
    if(klammerarray.length%2===1){
eingabeu6.style.backgroundColor = "red";
    }
    else if(klammerarray.length%2===0){
      var zustand = false;
      if(eingabeu6.value===''){
        eingabeu6.style.backgroundColor = "white";
      }
    
   
     for(let i=0; i< klammerarray.length/2;i++){
      if(klammerarray[i]===kp1_1){
        if(klammerarray[(klammerarray.length-1)-i]===kp1_2){
          zustand = true;
        }
        else{zustand = false;break;}
      }
      if(klammerarray[i]===kp1_2){
        zustand=false;break;
      }
      if(klammerarray[i]===kp2_1){
        if(klammerarray[(klammerarray.length-1)-i]===kp2_2){
          zustand = true;
        }
        else{zustand = false;break;}
      }
      if(klammerarray[i]===kp2_2){
        zustand=false;break;
      }
      if(klammerarray[i]===kp3_1){
        if(klammerarray[(klammerarray.length-1)-i]===kp3_2){
          zustand = true;
        }
        else{zustand = false;break;}
      }
      if(klammerarray[i]===kp3_2){
        zustand=false;break;
      }
     }

      if(zustand === false){
        eingabeu6.style.backgroundColor = "red";
      }
      else{
        eingabeu6.style.backgroundColor = "white";
      }
      
    
     }});
    
  
}
async function sleep(ms:number){
    return new Promise(resolve=>setTimeout(resolve,ms));
  }
function setupU_7():void{
  const mainref = document.getElementById("main")!;
  removeChildrenInDiv(mainref);
  setupMainBereich();
 
  const main_header = document.getElementById("mainheader")!;
  const main_main = document.getElementById("main_main")!;
  const main_container = document.getElementById("main_container")!;
      main_main.replaceChildren();
  main_header.replaceChildren();
  
  MainBereichStyling();
 
 let Plagiatsresolution = document.createElement("div");
 Plagiatsresolution.setAttribute("id","plagiatresolution");
 let header = document.createElement("header");

 var ergebnisdiv = document.createElement("div");
 ergebnisdiv.style.display = "flex";

 ergebnisdiv.style.justifyContent ="space-evenly";
 ergebnisdiv.style.flexWrap = "wrap";
 var analysecontainer = document.createElement("div");
 ergebnisdiv.setAttribute("id","ergebnisdiv");

 header.innerHTML = '<h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2>';
let content = document.createElement("div");
content.setAttribute("class","content");
content.innerHTML =  '<div class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full"><div class="field field-name-field-pcf-content"><div class="entity entity-paragraphs-item paragraphs-item-para-text"><div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden"><p><strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p><p>In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die HochschuleBonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmeneinzuleiten.</p> <p> 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p><p> 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohlüber den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- undDenkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p><p>3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p><p> Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p><p><strong>Eckpunkte zur Plagiatsprüfung</strong></p>          <p>Der Senat empfiehlt:</p><p> 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss feste Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p><p>2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p><p>3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p><p> 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p> <p> 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p> <p> 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p><p>  7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule  stichprobenartige Plagiatsprüfungen vor.</p> <p>  <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p> <p>  Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p><p> "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p></div></div></div></div>';;
let ueberschriftcontainer = document.createElement("div");
let brschrft = document.createElement("h1");
brschrft.appendChild(document.createTextNode("Textanalyse mit filter-map-reduce"));
ueberschriftcontainer.appendChild(brschrft);

Plagiatsresolution.appendChild(header);
Plagiatsresolution.appendChild(content);
main_header.appendChild(ueberschriftcontainer);
main_main.appendChild(analysecontainer);
main_main.appendChild(Plagiatsresolution);
(async _=>{
  let response = await fetch('https://raw.githubusercontent.com/stopwords-iso/stopwords-de/master/stopwords-de.txt');
  const stopwörter = await response.text(); 
  let stops = stopwörter.split(/\r?\n/);
  let stoparray2d:any[] = new Array();
  
  let alltext = main_container.textContent!.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll(":","");
  
 let alltextsplitted= alltext.split(" ");
 
 for(let i=0;i<stops.length;i++){
  stoparray2d.push([stops[i],alltextsplitted.reduce((count, num) => num === stops[i] ? count + 1 : count, 0)]);
 }
 let filtered = stoparray2d.filter(x=>x[1]>=10);
 let tabelle = document.createElement("table");
 tabelle.style.textAlign = "center";
 let row = tabelle.insertRow(-1);
 let column = row.insertCell(0);
 column.innerHTML = '<b>Stopwort</b>';
 column = row.insertCell(1);
 column.innerHTML = '<b>Anzahl</b>';
 filtered.forEach(x=>{let row =tabelle.insertRow(-1);
let column = row.insertCell(0);
column.appendChild(document.createTextNode(x[0]));
column = row.insertCell(1);
column.appendChild(document.createTextNode(x[1]));

if(filtered.indexOf(x)%2==0){
    row.style.backgroundColor = "#dddd";
  }
 });

ergebnisdiv.appendChild(tabelle);


  

let Plagiatsresolutionref = document.getElementById("plagiatresolution")!;
let all = Array.from(Plagiatsresolutionref.getElementsByTagName("*"));
let fil = all.map((item:any)=>item=item.nodeName.toLowerCase());


let table = document.createElement("table");

let tagset = new Set();
let array2d = new Array();
fil.forEach((x)=>tagset.add(x));
for(let i=0;i<tagset.size;i++){array2d.push([Array.from(tagset)[i],fil.reduce((count, num) => num === Array.from(tagset)[i] ? count + 1 : count, 0)]);}

let mostusedtag = array2d[0];
for(let i=0;i<array2d.length;i++){if(array2d[i][1]>mostusedtag[1]){mostusedtag = array2d[i];}}
table.style.textAlign = "center";
let reihe = table.insertRow(-1);
let zelle = reihe.insertCell(0);
zelle.innerHTML = '<b>HTML-Tag</b>';
zelle = reihe.insertCell(1);
zelle.innerHTML = '<b>Anzahl</b>';

for(let i=0;i<array2d.length;i++){
let reihe = table.insertRow(-1);
let zelle = reihe.insertCell(0);
zelle.appendChild(document.createTextNode("<"+array2d[i][0]+">"));
zelle = reihe.insertCell(1);
zelle.appendChild(document.createTextNode(array2d[i][1]));
if(i%2==0){reihe.style.backgroundColor = "#dddd";}


} 
setTimeout(()=>ergebnisdiv.appendChild(table),100);
  setTimeout(()=>analysecontainer.appendChild(ergebnisdiv),100);
}
)();
}

     

function setupU_8_1():void{
      const mainref = document.getElementById("main")!;
      mainref.replaceChildren();
      setupMainBereich();
     
  const main_header = document.getElementById("mainheader")!;
  const main_main = document.getElementById("main_main")!;
  const main_container = document.getElementById("main_container")!;
      main_main.replaceChildren();
  main_header.replaceChildren();
  
  MainBereichStyling();
  
  const main_main_ref = document.getElementById("main_main");
  const main_header_ref = document.getElementById("mainheader");
  var promisediv = document.createElement("div");
  promisediv.style.display ="flex";
  promisediv.style.justifyContent="center";
  
  let textAdiv = document.createElement("div");
  let textBdiv = document.createElement("div");
 
  main_main.appendChild(textAdiv);
  main_main.appendChild(textBdiv);
  
  let h1 = document.createElement("h1");
  
  h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit Promises"));
  main_header.appendChild(h1);
  var p = document.createElement("p");
 
 

      fetch('http://127.0.0.1:5500/A.txt').then(response=>response.text()).then(text=>{let arrayA = text.split(/\r?\n/);
      fetch('http://127.0.0.1:5500/B.txt').then(response=>response.text()).then(text=>{let arrayB = text.split(/\r?\n/);
    for(let i=0;i<arrayA.length;i++){
      
      
     
      setTimeout(()=>p.innerHTML += arrayA[i],10);
      setTimeout(()=>p.innerHTML += arrayB[i]+'<br>',10);
    

     
    
      }
      
 
    });
   
  });
  console.log(promisediv);
  promisediv.appendChild(p);
  main_main.appendChild(promisediv);

    }
    
function setupU_8_2():void{
  const mainref = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  setupMainBereich();

  const main_header = <HTMLDivElement>document.getElementById("mainheader");
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  const main_container = <HTMLDivElement>document.getElementById("main_container");
  main_main.replaceChildren();
  main_header.replaceChildren();

  MainBereichStyling();

  let promisediv = document.createElement("div");
  promisediv.style.textAlign ="center";
 
 
  let h1 = document.createElement("h1");
  let h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("Konkateniert werden die Gedichte Erlenkönig von Goethe sowie ... von ..."));
  
  h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit async / await"));
  main_header.appendChild(h1);
  main_main.appendChild(h3);
  main_main.appendChild(promisediv);


(async _=>{
let responsea = await fetch('http://127.0.0.1:5500/A.txt');
let responseb = await fetch('http://127.0.0.1:5500/B.txt');
let texta = await responsea.text();let arrayA = texta.split(/\r?\n/);
let textb = await responseb.text();let arrayB = textb.split(/\r?\n/);
let i = 0;
while(i<arrayA.length){
  sleep(100); promisediv.innerHTML+= arrayA[i];
sleep(100); promisediv.innerHTML+= arrayB[i]+'<br>';
i++;
}


})();

}








function populateHeader(input:any){
  const main_header = <HTMLDivElement>document.getElementById("mainheader");
 
  main_header.replaceChildren();
  let h1 = document.createElement("h1");
  
  h1.appendChild(document.createTextNode(input));
  main_header.appendChild(h1);
}

function populateMain(input:any):void{
  
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  main_main.replaceChildren();
  let contentdiv = document.createElement("div");
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(input));
  contentdiv.appendChild(p);
  
  main_main.appendChild(contentdiv);
}



function changeBackgroundColorAndColor(buttonreferenz:any,backgroundColor:string,textcolor:string):void{
  buttonreferenz.style.backgroundColor = backgroundColor;
buttonreferenz.style.color = textcolor;
}



(function setupU_8_3():void{
  
  (async _=>{
    let response = await fetch('http://127.0.0.1:5500/content.json');
    let json = await response.json();
    const dropdownbuttoncollection = Array.from(document.getElementsByClassName("drpdwnbtn"));
    
   

    for(let o of Object.keys(json)){
      dropdownbuttoncollection[Object.keys(json).indexOf(o)].textContent = o;
      let itag = document.createElement("i");
      itag.setAttribute("class","fa fa-caret-down");
      dropdownbuttoncollection[Object.keys(json).indexOf(o)].appendChild(itag);
      

     
      
      for(let ob of Object.keys(json[o])){
        let button = document.createElement("button");
      button.style.backgroundColor = "#dddddd";
      button.setAttribute("class","dropdowncontainerbutton");
      button.textContent = ob;
      button.style.cursor = "pointer";
       
        dropdwncntnr[Object.keys(json).indexOf(o)].appendChild(button);
        
      
      }
    }
    const dropdowncontainerbuttoncollection = Array.from(document.getElementsByClassName("dropdowncontainerbutton"));
    //hover effekt für die button im dropdowncontainer
    for(let dcb of dropdowncontainerbuttoncollection){
      dcb.addEventListener("mouseover" ,function(this:any){changeBackgroundColorAndColor(this,"#34568B","white")});
      dcb.addEventListener("mouseleave",function(this:any){changeBackgroundColorAndColor(this,"#dddddd","black") })}
    //dropdownicons für button im sidenav
    for(let b of dropdownbuttoncollection){
      b.addEventListener("click",function(this:any){
    
    if(this.lastChild.classList.contains("fa-caret-down")){
      this.removeChild(this.lastChild);
      let itag = document.createElement("i");
      itag.setAttribute("class","fa fa-caret-up");
      this.appendChild(itag);
    }
    else{this.removeChild(this.lastChild);
      let itag = document.createElement("i");
      itag.setAttribute("class","fa fa-caret-down");
      this.appendChild(itag);
    }
    
      })
      
    }



var i =0;
    for(var o of Object.keys(json)){
     
   
      for(var ob of Object.values(json[o])){
       
       let inhalt = Object.values(ob)[0];
       let header = Object.keys(json[o])[Object.values(json[o]).indexOf(ob)];
       
       
        dropdowncontainerbuttoncollection[i].addEventListener("click",()=>{
          const mainref = <HTMLDivElement>document.getElementById("main");
          mainref.replaceChildren();
          setupMainBereich();
          const main_header = <HTMLDivElement>document.getElementById("mainheader");
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  main_header.replaceChildren();
  main_main.replaceChildren();
          MainBereichStyling();
          populateHeader(header);
          populateMain(inhalt);

        });
        
        
       i++;

      }
      
    }

  })();
})();

function setup_covid19_barchart():void{
  const mainref = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  setupMainBereich();
  
  const main_header = <HTMLDivElement>document.getElementById("mainheader");
  const main_main = <HTMLDivElement>document.getElementById("main_main");
  
  main_main.replaceChildren();
  main_header.replaceChildren();
  let h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Covid-19 Fälle"));
  main_header.appendChild(h1);
  let div = document.createElement("div");
  div.setAttribute("id","barchartdiv");
  const mapdiv = document.createElement("div");
  const listendiv = document.createElement("div");
  mapdiv.setAttribute("id","mapdiv");
  div.style.display = "flex";
  div.style.justifyContent = "center";
  mapdiv.style.border = "1px solid red";
  mapdiv.style.display = "flex";
  mapdiv.style.justifyContent = "center";
  main_main.append(div);
 MainBereichStyling();
  (async _=>{
    const georesponse = await fetch("http://127.0.0.1:5500/1_sehr_hoch.geo.json");
    const geo = await georesponse.json();
    const dataresponse = await fetch("http://127.0.0.1:5500/covid-19.json");
    const geodata = await dataresponse.json();
    
            let response = await fetch("http://127.0.0.1:5500/covid-19.json");
            let json = await response.json();
           let tabelle = dataTabelle(json);
            
            listendiv.appendChild(tabelle);
            barChart(json,"#barchartdiv",500,400);
            mapChart(300,400,"#mapdiv",geodata,geo);
 

 

        })();

      

}
function barChart(json:any,divid:string,breite:number,hoehe:number){
  const data:any[] = Object.values(json);
  const datasorted = data.sort((a,b) => d3.descending(a.anzahl,b.anzahl));
  var margin = {top: 10, right: 30, bottom: 90, left: 60},
    width = breite - margin.left - margin.right,
    height = hoehe - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(divid)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox",`0 0 ${width+margin.left+margin.right} ${height+margin.top+margin.bottom}`)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(datasorted.map(function(d:any) { return d.name; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, d3.max(datasorted,(d:any)=>d.anzahl)])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("svg")
  .data(datasorted)
  .enter()
  .append("rect")
    .attr("x", function(d:any) { return x(d.name); })
    .attr("width", x.bandwidth())
    .attr("fill", "royalblue")
    // no bar at the beginning thus:
    .attr("height", function(d:any) { return height - y(0); }) // always equal to 0
    .attr("y", function(d:any) { return y(0); })

// Animation
svg.selectAll("rect")
  .transition()
  .duration(800)
  .attr("y", function(d:any) { return y(d.anzahl); })
  .attr("height", function(d:any) { return height - y(d.anzahl); })
  .delay(function(d:any,i:any){return(i*100)})
}
function dataTabelle(data:any):HTMLTableElement{
  var i =0;
  var tabelle = document.createElement("table");
  tabelle.style.textAlign="center";
  let row = tabelle.insertRow(-1);
  let cell = row.insertCell(0);
  cell.innerHTML = "<b>Bundesland</b>"
cell = row.insertCell(1);
cell.innerHTML = "<b>Fälle</b>";
 Array.from(data).forEach(d=>{
    let row = tabelle.insertRow(-1);
  let cell = row.insertCell(0);
  cell.textContent = data[data.indexOf(d)].name;
  cell = row.insertCell(1);
  cell.textContent = data[data.indexOf(d)].anzahl;
  if(i%2===0){row.style.backgroundColor="#dddddd";}
   
    
   
    i++;

  });
return tabelle;

}
function mapChart(breite:number,hoehe:any,divid:string,geodata:any,geojson:any){
  var width = breite;
  var height = hoehe;
  const geodatavalues = Object.values(geodata);
    var svg = d3.select(divid).append("svg").attr("width",width).attr("height",height);
  var projection = d3.geoMercator()
    .center([10, 50])
                
    .scale(1500)                       
    .translate([width / 2, height / 2]);
    var data = d3.map();
    geodatavalues.forEach((d:any)=>{data.set(d.id,d.anzahl)}); // Daten der Bundesländer in einer map speichern
    var colorScheme = d3.schemeReds[6];


var colorScale = d3.scaleThreshold()
  .domain([1000,10000,100000,1000000,3000000,7000000])
  .range(colorScheme);
    
      

      // Draw the map
      svg.append("g")
        .selectAll("path")
        .data(geojson .features)
        .enter()
        .append("path")
          // draw each country
          .attr("d", d3.geoPath()
            .projection(projection)
          )
          // set the color of each country
          .attr("fill", function (d:any) {
            // Für jedes Land holen wir uns die Fallzahlen aus der Map
            // Die Werte wurden in der Map mit dem Kürzel des jeweiligen Bundeslandes(hier id) gespeichert
            let dataforbl = data.get(d.properties.id);
             
            
           
            return colorScale(dataforbl);
          });

}         

class SideNavigation{
constructor(){
  this.open=false;
}
private open:boolean;
getOpen():boolean{
  return this.open;
}
swapOpen():void{
  if(this.open==false){
    this.open=true;
  }
else{this.open=false;}
}
}
var sidenav = new SideNavigation();
       
       
       function openCloseSideNav():void{
        
       
         
         if(sidenav.getOpen() === false){
           openSidenav();
           
           sidenav.swapOpen();
           return;
         }
         if(sidenav.getOpen() === true){
           closeSidenav();
           sidenav.swapOpen();
           return;
         }
       }
       function openSidenav():void{
       
       
       let sidenav = <HTMLDivElement>document.getElementById("sidenav");
       let sidenavoverlay =  <HTMLDivElement>document.getElementById("sidenavoverlay");
       sidenav.style.display = "block";
        sidenav.style.width = "250px";
         sidenavoverlay.style.display="block";
         sidenavoverlay.style.width="100%";
        
    
        
       
       }
       
       function closeSidenav():void{
        let sidenav = <HTMLDivElement>document.getElementById("sidenav");
       let sidenavoverlay =  <HTMLDivElement>document.getElementById("sidenavoverlay");
         sidenav.style.display = "none";
         sidenav.style.display = "0px";
         sidenavoverlay.style.display="none";
        sidenavoverlay.style.width="0px";
        
        
       }
     
function vue_singlefile():void{
  const mainref = document.getElementById("main")!;
  removeChildrenInDiv(mainref);
  setupMainBereich();
  MainBereichStyling();
  const main_header = document.getElementById("mainheader")!;
  const main_main = document.getElementById("main_main")!;
  let headerdiv = document.createElement("div");
  let header = document.createElement("h1");
  header.appendChild(document.createTextNode("Vue Single Component")); 
  headerdiv.appendChild(header);
  main_header.appendChild(headerdiv);
  let div = document.createElement("div");
  div.setAttribute("id","vuediv");
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");
  let para3 = document.createElement("p");
 
  para1.textContent = "Buchstaben : {{buchstaben}}";
  para2.appendChild(document.createTextNode("Leerzeichen :{{leerzeichen}}"));
  para3.appendChild(document.createTextNode("Worte : {{worte}}"));
  div.appendChild(para1);
  div.appendChild(para2);
  div.appendChild(para3);
  
     let input = document.createElement("input");
     input.setAttribute("type","text");
     input.setAttribute("v-on:input","handler");
     input.setAttribute("ref","inputfield");
     div.appendChild(input);
  main_main.appendChild(div);
var vm = new Vue({
el:'#vuediv',
data:{
  buchstaben:0,
  leerzeichen:0,
  worte:0,
  

},
methods : {
  handler: function(event:any){
  let text = (this as any).$refs.inputfield.value;
  
 (this as any).buchstaben = Array.from(text.replaceAll(" ","")).length;
 (this as any).leerzeichen = Array.from(text).length-Array.from(text.replaceAll(" ","")).length;
 let woerter:string[] = Array.from(text.split(" "));
 let arr = woerter.filter(wort=>wort!="");


 (this as any).worte = arr.length;


 

  },
 
 
}


});

}
function profileCard(){
  //Under Construction ...
  const mainref = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  var picdiv = document.createElement("div");
  let i = document.createElement("i");
  picdiv.style.borderRadius="100%";
  i.setAttribute("class","fa fa-user-circle-o fa-5x");
  picdiv.appendChild(i);
  mainref.appendChild(picdiv);


  
}


      
    
     
      
 
 