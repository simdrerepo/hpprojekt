import { resetMainbereich } from "./script.js";

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

  export {benchmarkInnerHTML};
  export {benchmarkInnerText};
  export {benchmarkTextContent};