import { resetMainbereich } from "./script.js";
import { makeRedner } from "./Redner.js";
export {setup_RednerMitZeitmessung};
const setup_RednerMitZeitmessung=():void=>{
    const [main,main_header,main_main] = resetMainbereich();
    
  
    let us:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
   let h1:HTMLHeadElement = document.createElement("h1");
   const labelinputdiv:HTMLDivElement = document.createElement("div");
   labelinputdiv.setAttribute("id","labelinputdiv");
   labelinputdiv.style.gridArea="labelinputdiv";
   h1.style.textAlign="center";
   h1.appendChild(document.createTextNode('Rednerliste mit Zeitmessung'));
  
    us.appendChild(h1);

   let eingabediv:HTMLDivElement = document.createElement("div");
   
   eingabediv.setAttribute("id","rednerdiv");
   eingabediv.style.gridArea="eingabediv";
   
   let listendiv:HTMLDivElement = document.createElement("div");
  
   var liste:HTMLUListElement = document.createElement("ul");
   let eingabe:HTMLInputElement = document.createElement("input");
   eingabe.style.width = "5rem";
   eingabe.style.height ="1.5rem";

   eingabe.setAttribute("type","search");
   eingabe.setAttribute("id","eingabe");
   eingabe.style.gridArea="input";
   eingabe.appendChild(document.createTextNode(''));
   let eingabelabel:HTMLLabelElement = document.createElement("label");
   eingabelabel.textContent='Neuer Redner:';
   eingabelabel.setAttribute("for","eingabe");
   eingabelabel.setAttribute("id","label");
  
   eingabelabel.style.gridArea="label";
   var eingabebutton:HTMLButtonElement = document.createElement("button");
   eingabebutton.style.width = "5rem";
   eingabebutton.style.height ="1.5rem";
   eingabebutton.setAttribute("id","button");
   eingabebutton.style.gridArea="button";
   eingabebutton.textContent = 'hinzufügen';
  eingabediv.appendChild(eingabelabel);
   eingabediv.appendChild(eingabe);
   
   eingabediv.appendChild(eingabebutton);
  
   
   
  
   listendiv.appendChild(liste);
   
   main_main.appendChild(eingabediv);
   main_main.appendChild(listendiv);
   eingabediv.style.display="flex";
  eingabediv.style.justifyContent="center";
  eingabediv.style.flexWrap="wrap";
 
  
  
   main_main.style.display = "block";
   listendiv.style.display = "flex";
   listendiv.style.justifyContent = "center";
  
  
   var rednerarray:any[] = new Array();
   //addRednerInListe(liste,createRedner(eingabe.value,rednerarray);
  
   
   
   eingabebutton.addEventListener("click",()=>{if(eingabe.value!=""){ let redner = makeRedner(eingabe.value.trim());
    
    redner.addRednerInListe(liste,redner.createRedner(rednerarray));eingabe.value="";}
   });
  
  }

  