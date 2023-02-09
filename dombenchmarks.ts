import { resetMainbereich } from "./script.js";
import { elementFactory } from "./script.js";
import { addToTable } from "./script.js";

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
  export function domBenchmarks():void{
  const [main_ref,main_header,main_main] = resetMainbereich();
    let ueberschrift:HTMLHeadElement = <HTMLHeadElement>elementFactory("h1",{id:"headline"},"","Performanz-Messungen von DOM-Operationen")
   
    var tabelle:HTMLTableElement = <HTMLTableElement>elementFactory("table",{id:"benchmarktabelle",class:"tabelle"},"border:1px solid black;");
   
    const content =  [["innerHTML",String(benchmarkInnerHTML())],["innerText",String(benchmarkInnerText())],["textContent",String(benchmarkTextContent())]];
    addToTable(tabelle,content,["Dom-Operation","Performance in Millisekunden für 500 Iterationen"],"lighyellow","#dddddd");   
  
  
  
   
   let tabellendiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"tabellendiv"},"display:flex; justify-content:center;")
  
   tabellendiv.appendChild(tabelle);
  
  
  
   main_header.appendChild(ueberschrift);
   main_header.style.textAlign="center";
  
   let codediv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"border:1px solid lightgrey; padding:10px; width:500px; background-color:#e7e9eb;","<b>Codesample</b><br>...<br><code>let t0 = performance.now();</code><br><code>for(i=0;i<500;i++){</code>"+"<br><code>div.innerHTML+=text;}</code><br><code>let t1 = performance.now();</code>"+"<br><code>return t1-t0;</code><br>...");
   let div:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"display:flex; justify-content:center; margin-Bottom:40px");

 
 
  
  div.appendChild(codediv);
  main_main.appendChild(div);
  main_main.appendChild(tabellendiv);
  
  
 
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

  export {benchmarkInnerHTML};
  export {benchmarkInnerText};
  export {benchmarkTextContent};