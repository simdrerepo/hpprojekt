import { setup_TopSortAlsWebApp } from "./Topsortalswebapp.js";
import { setup_tic_tac_toe } from "./Tictactoespiel.js";
import { benchmarkInnerHTML } from "./dombenchmarks.js";
import { benchmarkInnerText } from "./dombenchmarks.js";
import { benchmarkTextContent } from "./dombenchmarks.js";
import { mapChart } from "./charts.js";
import { setup_side_navigation } from "./sidenavigation.js";
import { setup_TextkonkatenierungMitAwait } from "./textkonkatenierungmitawait.js";
import { setup_TextkonkatenierungMitPromises } from "./textkonkatenierungmitpromise.js";
import { setup_RednerMitZeitmessung } from "./Rednermitzeitmessung.js";
import { setup_Klammerpaare } from "./Klammerpaare.js";
import { setup_TextAnalyse } from "./Textanalyse.js";
import { setup_JsonImportieren } from "./Jsonimportierung.js";
import { fragenAntworten } from "./fragen.js";
import { codeUebung } from "./fragen.js";
export { sleep };
export {setupMainBereich};
export {MainBereichStyling};
export { resetMainbereich };
export { fetchJsonData };
export { sidenavHandler };




setup_side_navigation();
setup_JsonImportieren();






(function AddClickListenerToSideNavButton(){
  //Clicklistener für die Button im Sidenav
 const buttonarray:Element[] = Array.from(document.getElementsByClassName("regularButton"));
 const functionArray = [domBenchmarks,setup_RednerMitZeitmessung,setup_TopSortAlsWebApp,setup_Klammerpaare,setup_TextAnalyse,setup_TextkonkatenierungMitPromises,setup_TextkonkatenierungMitAwait,setup_tic_tac_toe,setup_covid19_barchart,vue_singlefile,fragenAntworten,codeUebung];
 buttonarray.forEach(button=>{button.addEventListener("click",functionArray[buttonarray.indexOf(button)])});
})();

const resetMainbereich = ():HTMLDivElement[]=>{
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main")!;
  mainref.replaceChildren();
 setupMainBereich();
  MainBereichStyling();
 const main_header:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader")!;
 const main_main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main")!;
 
 return [mainref,main_header,main_main];
}
(function ListenerVergeben():void{
  const dropdownbuttoncol = Array.from(document.getElementsByClassName("drpdwnbtn"));
  const sidebuttondiv:HTMLDivElement = <HTMLDivElement>document.getElementById("sidebutton");
 const buttoncollection = Array.from(sidebuttondiv.getElementsByTagName("button"));
 var buttonclicked:boolean[] = <boolean[]>new Array();
 dropdownbuttoncol.forEach(()=>{buttonclicked.push(false)});

  for(const c of dropdownbuttoncol){
  c.addEventListener("click",hideShowDropDownContainer.bind(c));
 }
  for(const b of buttoncollection){
    b.style.cursor="pointer";
    b.addEventListener("mouseover",mouseOver);
    b.addEventListener("mouseout",mouseOut);
  }
 for(const c of dropdownbuttoncol){
 
  c.addEventListener("click",function(){
    
    if(buttonclicked[dropdownbuttoncol.indexOf(c)]===false){
     
      c.removeEventListener("mouseout",mouseOut);
      buttonclicked[dropdownbuttoncol.indexOf(c)]=true;
     }
     else{c.addEventListener("mouseout",mouseOut);
     buttonclicked[dropdownbuttoncol.indexOf(c)]=false;}
     
    });


 }
 
  

})();
function mouseOver(this: any):void{
 
  this.style.backgroundColor= "#34568B";
  this.style.color="white";
  
    

}
function mouseOut(this: any):void{
  this.style.backgroundColor="white";
  this.style.color ="black";
   

}
function hideShowDropDownContainer(this:any):void{

  var dropdown = this.nextElementSibling;
  if(dropdown.style.display === "block"){dropdown.style.display = "none";}
  else{dropdown.style.display="block";}

}
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
 main_main.style.display ="block";

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
async function sleep(ms:number){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function fetchJsonData(url:string):Promise<any>{
  let response;
  let data;
  try{
response = await fetch(url);
if(!response.ok){
  console.log(response.status);
}
data = await response.json();

  }
  catch(error){
    console.log(error);
  }

return data;
}
function sidenavHandler():Object{
 //logging für den Seitennavigator

  return {
    set(target:any,key:any,value:any):boolean{
      console.log(key+" wurde auf "+value+" gesetzt");
      target[key] = value;
      return true;
    },
    get(target:any,key:any):any{
      console.log(key+" wurde gelesen");
      return target[key];
    }
  };
}
function setup_covid19_barchart():void{
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main");

  mainref.replaceChildren();
  setupMainBereich();
 
  MainBereichStyling();
  const main_header:HTMLDivElement  = <HTMLDivElement>document.getElementById("mainheader");
  const main_main:HTMLDivElement  = <HTMLDivElement>document.getElementById("main_main");
  let h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("Covid-19 Fälle"));
  main_header.appendChild(h1);
  const mapdiv:HTMLDivElement = document.createElement("div");
 mapdiv.setAttribute("id","mapdiv");
  mapdiv.style.display = "flex";
  mapdiv.style.justifyContent = "center";
  main_main.append(mapdiv);

  (async _=>{
    const [georesponse, dataresponse] = await Promise.all([fetch("http://127.0.0.1:5500/1_sehr_hoch.geo.json"),fetch("http://127.0.0.1:5500/covid-19.json")]);
    if(!georesponse.ok){
      throw new Error(georesponse.statusText);
    }
    if(!dataresponse){
      throw new Error("Error");
    }
    const geo = await georesponse.json();
  
    const geodata = await dataresponse.json();
  
 
            mapChart(400,600,"#mapdiv",geodata,geo);
 

 

        })();

      

}
function Schleife({start=0,end=10,step=1,func=console.log}){
  for(let i=start;i<end;i+=step){
    func( i );
  }


}




  
       
       
     
function vue_singlefile():void{
  const mainref = document.getElementById("main")!;
  mainref.replaceChildren();
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
  let vuedivcontainer = document.createElement("div");
  vuedivcontainer.style.display="flex";
  vuedivcontainer.style.justifyContent="center";
  vuedivcontainer.appendChild(div);
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
  main_main.appendChild(vuedivcontainer);
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
  // Under Construction ...
  const mainref = <HTMLDivElement>document.getElementById("main");
  mainref.replaceChildren();
  var picdiv = document.createElement("div");
  let i = document.createElement("i");
  picdiv.style.borderRadius="100%";
  i.setAttribute("class","fa fa-user-circle-o fa-5x");
  picdiv.appendChild(i);
  mainref.appendChild(picdiv);


  
}


export {setup_tic_tac_toe}; 
    
     
      
 
 