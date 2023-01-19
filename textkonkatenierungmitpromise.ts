import { resetMainbereich } from "./script.js";
export { setup_TextkonkatenierungMitPromises};


const setup_TextkonkatenierungMitPromises=():void=>{
  const [main,main_header,main_main] = resetMainbereich();


var promisediv = document.createElement("div");
promisediv.style.display ="flex";
promisediv.style.justifyContent="center";
let div = document.createElement("div");
let textdiv = document.createElement("div");
div.style.display ="flex";
div.style.justifyContent="center";
div.style.marginBottom = "40px";
textdiv.style.border ="1px solid lightgrey";
textdiv.style.padding = "10px";


textdiv.style.backgroundColor="#e7e9eb";

textdiv.innerHTML ="Konkateniert werden die Gedichte <b>Erlkönig</b> von <i>Johann Wolfgang von Goethe</i> sowie <b>Eine Frage</b> von <i>Kurt Tucholsky</i>";
div.appendChild(textdiv);
main_main.appendChild(div);

let h1 = document.createElement("h1");
h1.style.textAlign="center";

h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit Promises"));

main_header.appendChild(h1);
var p = document.createElement("p");



    fetch('http://127.0.0.1:5500/A.txt').catch((error)=>{throw new Error("Error : "+error)}).then(response=>response.text()).then(text=>{let arrayA = text.split(/\r?\n/);
    fetch('http://127.0.0.1:5500/B.txt').catch(error=>{throw new Error("Error : ")+error}).then(response=>response.text()).then(text=>{let arrayB = text.split(/\r?\n/);
  for(let i=0;i<arrayA.length;i++){
    
    
   
    setTimeout(()=>p.innerHTML += arrayA[i],10);
    setTimeout(()=>p.innerHTML += arrayB[i]+'<br>',10);
  
    
  }
  });
 
});

promisediv.appendChild(p);
main_main.appendChild(promisediv);

  }