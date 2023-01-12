import { setup_tic_tac_toe } from "./script.js";
class tic_tac_toe{

    constructor(div:HTMLElement){
        this.spieler="";
       this.controller = new AbortController();
        this.spielfeld = [null,null,null,null,null,null,null,null,null];
        this.spielfelddiv = div;
        this.werFaengtAn();
        this.setupSpielfeld();
        this.addListener();
        this.werFaengtAn();
    }
    spieler:string;
    controller:AbortController;
    spielfeld:string[]|null[];
    spielfelddiv:HTMLElement;
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
    setupSpielfeld():void{
        //Das Spielfeld wird in ein div nach Wahl geladen
        //Jedes Feld ist 10x10 Groß
        this.spielfelddiv.innerHTML = '<svg id ="svg" width="300"height="400"viewBox="0 0 32 32">'
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
    
    addListener():void{
      //Click-Listener für jedes Feld
        const rectcollection =Array.from(this.spielfelddiv.querySelectorAll("rect"));
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
                 setTimeout(()=>self.alertBannerAnzeigen(self.gibtEsEinenGewinner("o",self)),10);//Gewinn Bedingungen checken
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
                   
                    setTimeout(()=>self.alertBannerAnzeigen(self.gibtEsEinenGewinner("x",self)),10);
                    
                    //Kreis ist jetzt dran
                   self.changeSpieler(self);
    
    
                }
            }
    
    
    
            },{signal: self.controller.signal});
        });
    
    }
    addResetButton(){
      let button = document.createElement("button");
      let buttondiv = document.createElement("div");
      buttondiv.style.display = "flex";
      buttondiv.style.justifyContent="center";
      button.textContent = "reset";
      button.addEventListener("click",()=>setup_tic_tac_toe());
      buttondiv.appendChild(button);
      this.spielfelddiv.parentElement!.appendChild(buttondiv);
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
  
    alertBannerAnzeigen(xOdero:string|null):void{
      const gewinner = xOdero;
   
      if(gewinner === "x"){
       alert("Kreuz hat gewonnen! Hurra...");
       this.addResetButton();
      
      }
    if(gewinner === "o"){
      alert("Kreis hat gewonnen! Hurra...");
      this.addResetButton();
  
    }
  
  
  
    }
    
    gibtEsEinenGewinner(zeichen:string,objthisref:tic_tac_toe):string|null{
      //Hier wird gecheckt ob die Bedingungen für einen Sieg erfüllt sind
    if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[1]===zeichen && objthisref.spielfeld[2]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
       return "x";
        }
       if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[3]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[5]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[6]===zeichen && objthisref.spielfeld[7]===zeichen && objthisref.spielfeld[8]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[3]===zeichen && objthisref.spielfeld[6]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[1]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[7]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[2]===zeichen && objthisref.spielfeld[5]===zeichen && objthisref.spielfeld[8]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[0]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[8]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    if(objthisref.spielfeld[6]===zeichen && objthisref.spielfeld[4]===zeichen && objthisref.spielfeld[2]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return "x";
           }
          if(zeichen==="o"){return "o";}
    }
    return null;
    }
    
    
  }
  export {tic_tac_toe};