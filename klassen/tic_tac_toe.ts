import { setup_tic_tac_toe } from "../script.js";



class tic_tac_toe{

    constructor(div:HTMLElement){
        this.spieler="";
       this.controller = new AbortController();
        this.spielfeld = [new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array()];
        this.spielfelddiv = div;
        this.werFaengtAn();
        this.setupSpielfeld();
        this.addListener();
        this.werFaengtAn();
        this.kreuzId = 0;
        this.kreisId = 0;
        this.freiefelder=9;
    }
    kreuzId:number;
    kreisId:number;
    spieler:string;
    controller:AbortController;
    spielfeld:any[];
    spielfelddiv:HTMLElement;
    freiefelder:number;
    
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
    printSpielfeld(){
      for(const ar of this.spielfeld){
        console.log(ar);
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
    '<rect id="feld1" x="0"y="0"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld2" x="11"y="0"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld3" x="22"y="0"width="10"height="10"fill="white"></rect>'+
    
    '<rect id="feld4" x="0"y="11"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld5" x="11"y="11"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld6" x="22"y="11"width="10"height="10"fill="white"></rect>'+
    
    '<rect id="feld7" x="0"y="22"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld8" x="11"y="22"width="10"height="10"fill="white"></rect>'+
    '<rect id="feld9" x="22"y="22"width="10"height="10"fill="white"></rect>'+
    '</svg>';
    }
    animiereKreuz(id:string){
      const kreuz = document.getElementById(id)!;
      kreuz.animate([
        
     
        {transform:"rotate(0deg)",transformBox:"fill-box",transformOrigin:"center"},
        {transform:"rotate(360deg",transformBox:"fill-box",transformOrigin:"center"}
      
      ],{duration: 2000, iterations: Infinity});


    }
    animiereKreis(id:string){
      const kreis = document.getElementById(id)!;
      kreis.animate({
        r:[ 4, 1]
      },{duration: 2000, iterations: Infinity});


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
                  self.freiefelder--;
                  let array = new Array();
                  array.push("o");
                  let id = self.getId(circle);
                  array.push(id);
                  
                  self.spielfeld[listenerid]=array;//Feld wird markiert mit aktuellem Spieler
                 
                
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
                    let array = new Array();
                  array.push("x");
                  let id = self.getId(cross);
                  array.push(id);
                    //Feld markieren
                    self.spielfeld[listenerid]=array;
                    self.freiefelder--;
                   
                    //Gewonnen?
                   
                    setTimeout(()=>self.alertBannerAnzeigen(self.gibtEsEinenGewinner("x",self)),10);
                    
                    //Kreis ist jetzt dran
                   self.changeSpieler(self);
    
    
                }
            }
    
    
    
            },{signal: self.controller.signal});
        });
    
    }
    getId(ref:SVGElement){
    let id = ref.getAttribute("id");
    return id;


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
        if(self.spielfeld[index].length===0){
            return true;
        }
        else{return false;}
    
    }
    
    getKoordinaten(rect:SVGRectElement):number[]{
      // Gibt die (x,y) Koordinaten eines Felds(rect) zurück (Den Punkt links oben).
      let x = rect.getAttribute("x");
      let y = rect.getAttribute("y");
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
    circle.setAttribute("id","kreis"+String(this.kreisId));
   
    this.kreisId++;
   
    
    return circle;
    
    
    
    }
    drawCross(linie1:SVGElement,linie2:SVGElement):SVGElement{
    //Gibt eine Gruppe Kreuz zurück
    
    let gruppe = document.createElementNS("http://www.w3.org/2000/svg","g");
    gruppe.appendChild(linie1);
    gruppe.appendChild(linie2);
    gruppe.setAttribute("id","kreuz"+String(this.kreuzId));
    
   
    this.kreuzId++;
    return gruppe;
    
    
    
    }
    drawOnSpielfeld(element:SVGElement):void{
      //Fügt ein Element dem svg-Element hinzu
    const svg = <SVGElement>document.querySelector("svg");
    
    svg.appendChild(element);
    
    
    }
  
    alertBannerAnzeigen(xOdero:any[]):void{
     
   
      if(xOdero[0] === "x"){
        setTimeout(()=>this.animiereKreuz(xOdero[1]),10);
        setTimeout(()=>this.animiereKreuz(xOdero[2]),10);
        setTimeout(()=>this.animiereKreuz(xOdero[3]),10);
      
       this.addResetButton();
      
      }
    if(xOdero[0] === "o"){
      setTimeout(()=>this.animiereKreis(xOdero[1]),10);
      setTimeout(()=>this.animiereKreis(xOdero[2]),10);
      setTimeout(()=>this.animiereKreis(xOdero[3]),10);
      this.addResetButton();
  
    }
  
  
  
    }
    
    gibtEsEinenGewinner(zeichen:string,objthisref:tic_tac_toe):any[]{
      //Hier wird gecheckt ob die Bedingungen für einen Sieg erfüllt sind
      
    if(objthisref.spielfeld[0][0]===zeichen && objthisref.spielfeld[1][0]===zeichen && objthisref.spielfeld[2][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
       return ["x",objthisref.spielfeld[0][1],objthisref.spielfeld[1][1],objthisref.spielfeld[2][1]];
        }
       if(zeichen==="o"){return ["o",objthisref.spielfeld[0][1],objthisref.spielfeld[1][0],objthisref.spielfeld[2][0]];}
    }
    if(objthisref.spielfeld[3][0]===zeichen && objthisref.spielfeld[4][0]===zeichen && objthisref.spielfeld[5][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[3][1],objthisref.spielfeld[4][1],objthisref.spielfeld[5][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[3][1],objthisref.spielfeld[4][1],objthisref.spielfeld[5][1]];}
    }
    if(objthisref.spielfeld[6][0]===zeichen && objthisref.spielfeld[7][0]===zeichen && objthisref.spielfeld[8][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[6][1],objthisref.spielfeld[7][1],objthisref.spielfeld[8][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[6][1],objthisref.spielfeld[7][1],objthisref.spielfeld[8][1]];}
    }
    if(objthisref.spielfeld[0][0]===zeichen && objthisref.spielfeld[3][0]===zeichen && objthisref.spielfeld[6][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[0][1],objthisref.spielfeld[3][1],objthisref.spielfeld[6][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[0][1],objthisref.spielfeld[3][1],objthisref.spielfeld[6][1]];}
    }
    if(objthisref.spielfeld[1][0]===zeichen && objthisref.spielfeld[4][0]===zeichen && objthisref.spielfeld[7][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[1][1],objthisref.spielfeld[4][1],objthisref.spielfeld[7][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[1][1],objthisref.spielfeld[4][1],objthisref.spielfeld[7][1]];}
    }
    if(objthisref.spielfeld[2][0]===zeichen && objthisref.spielfeld[5][0]===zeichen && objthisref.spielfeld[8][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[2][1],objthisref.spielfeld[5][1],objthisref.spielfeld[8][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[2][1],objthisref.spielfeld[5][1],objthisref.spielfeld[8][1]];}
    }
    if(objthisref.spielfeld[0][0]===zeichen && objthisref.spielfeld[4][0]===zeichen && objthisref.spielfeld[8][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[0][1],objthisref.spielfeld[4][1],objthisref.spielfeld[8][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[0][1],objthisref.spielfeld[4][1],objthisref.spielfeld[8][1]];}
    }
    if(objthisref.spielfeld[6][0]===zeichen && objthisref.spielfeld[4][0]===zeichen && objthisref.spielfeld[2][0]===zeichen){
        objthisref.controller.abort();
        if(zeichen==="x"){
          return ["x",objthisref.spielfeld[6][1],objthisref.spielfeld[4][1],objthisref.spielfeld[2][1]];
           }
          if(zeichen==="o"){return ["o",objthisref.spielfeld[6][1],objthisref.spielfeld[4][1],objthisref.spielfeld[2][1]];}
    }
    if(this.freiefelder===0){
      this.addResetButton();
    }
   return [];
    }
    
    
  }
 

 
  

  
  export {tic_tac_toe};