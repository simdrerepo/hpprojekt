import { resetMainbereich } from "./script.js";
import { makeRedner } from "./Redner.js";
export {setup_RednerMitZeitmessung};
const setup_RednerMitZeitmessung=():void=>{
    const [main,main_header,main_main] = resetMainbereich();
    
  
    let us:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader");
   let h1:HTMLHeadElement = document.createElement("h1");
   h1.appendChild(document.createTextNode('Rednerliste mit Zeitmessung'));
  
    us.appendChild(h1);

   let eingabediv:HTMLDivElement = document.createElement("div");
   
   let listendiv:HTMLDivElement = document.createElement("div");
   listendiv.setAttribute("id","rednerdiv");
   var liste:HTMLUListElement = document.createElement("ul");
   let eingabe:HTMLInputElement = document.createElement("input");
   eingabe.setAttribute("type","search");
   eingabe.setAttribute("id","eingabe");
   eingabe.style.gridArea="eingabe";
   eingabe.appendChild(document.createTextNode(''));
   let eingabelabel:HTMLLabelElement = document.createElement("label");
   eingabelabel.textContent='Neuer Redner:';
   eingabelabel.setAttribute("for","eingabe");
   eingabelabel.style.gridArea="label";
   var eingabebutton:HTMLButtonElement = document.createElement("button");
   eingabebutton.setAttribute("id","btn");
   eingabebutton.style.gridArea="button";
   eingabebutton.textContent = 'hinzufügen';
   eingabediv.appendChild(eingabelabel);
   eingabediv.appendChild(eingabe);
   eingabediv.appendChild(eingabebutton);
   eingabediv.style.display = "flex";
   eingabediv.style.justifyContent = "center";
  
   listendiv.appendChild(liste);
   main_main.appendChild(eingabediv);
   main_main.appendChild(listendiv);
  
  
   main_main.style.display = "block";
   listendiv.style.display = "flex";
   listendiv.style.justifyContent = "center";
  
  
   var rednerarray:any[] = new Array();
   //addRednerInListe(liste,createRedner(eingabe.value,rednerarray);
  
   
   
   eingabebutton.addEventListener("click",()=>{if(eingabe.value!=""){ let redner = makeRedner(eingabe.value.trim());
    
    redner.addRednerInListe(liste,redner.createRedner(rednerarray));eingabe.value="";}
   });
  
  }

  