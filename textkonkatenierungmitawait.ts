import { sleep } from "./script.js";
import { fetchJsonData } from "./script.js";
import { resetMainbereich } from "./script.js";
export {setup_TextkonkatenierungMitAwait};
const setup_TextkonkatenierungMitAwait =async ():Promise<void>=>{

  var [responsea, responseb] = await Promise.all([fetchJsonData('http://127.0.0.1:5500/A.txt'),fetchJsonData('http://127.0.0.1:5500/B.txt')]);

  const [main,main_header,main_main] = resetMainbereich();

  let promisediv = document.createElement("div");
 
 
 
  let h1 = document.createElement("h1");
  let headerdiv = document.createElement("div");
  headerdiv.appendChild(h1);
  headerdiv.style.display="flex";
  headerdiv.style.justifyContent="center";
  headerdiv.style.textAlign="center";
 
  let div = document.createElement("div");
  let textdiv = document.createElement("div");
  div.style.display ="flex";
 div.style.justifyContent="center";
 div.style.marginBottom = "40px";
 textdiv.style.border ="1px solid lightgrey";
 textdiv.style.padding = "10px";
 
  textdiv.style.backgroundColor="#e7e9eb";
  
  textdiv.innerHTML ="Konkateniert werden die Gedichte <b>Erlkönig</b> von <i>Johann Wolfgang von Goethe</i> sowie <b>Eine Frage</b> von <i>Kurt Tucholsky</i>";
  let p:HTMLParagraphElement = document.createElement("p");
  promisediv.append(p);
  h1.appendChild(document.createTextNode("Zeilenweise Textkonkatenierung mit async / await"));
  main_header.appendChild(headerdiv);
  div.appendChild(textdiv);
  main_main.appendChild(div);
  main_main.appendChild(promisediv);
  
  
  let texta = await responsea.text();let arrayA = texta.split(/\r?\n/);
  let textb = await responseb.text();let arrayB = textb.split(/\r?\n/);
  let i = 0;
  while(i<arrayA.length){
    sleep(100); p.innerHTML+= arrayA[i];
  sleep(100); p.innerHTML+= arrayB[i]+'<br>';
  i++;
  }
  
  
 
  
  }