import { setup_TopSortAlsWebApp } from "./Topsortalswebapp.js";
import { setup_tic_tac_toe } from "./Tictactoespiel.js";
import { setup_covid19_mapchart } from "./charts.js";
import { setup_side_navigation } from "./sidenavigation.js";
import { setup_TextkonkatenierungMitAwait } from "./textkonkatenierungmitawait.js";
import { setup_TextkonkatenierungMitPromises } from "./textkonkatenierungmitpromise.js";
import { setup_RednerMitZeitmessung } from "./Rednermitzeitmessung.js";
import { setup_Klammerpaare } from "./Klammerpaare.js";
import { setup_TextAnalyse } from "./Textanalyse.js";
import { setup_JsonImportieren } from "./Jsonimportierung.js";
import { fragenAntworten } from "./fragen.js";
import { codeUebung } from "./fragen.js";
import { setup_webInventors } from "./inventorsoftheweb.js";
import { domBenchmarks } from "./dombenchmarks.js";
import { vue_singlefile } from "./Vuesinglefile.js";

export { sleep };
export { setupMainBereich };

export { resetMainbereich };
export { fetchJsonData };
export { sidenavHandler };
export { fetchTextData };




setup_side_navigation();
setup_JsonImportieren();


(function ListenerVergeben():void{
  const buttonarray:Element[] = Array.from(document.getElementsByClassName("regularButton"));
 const functionArray = [setup_webInventors, domBenchmarks,setup_RednerMitZeitmessung,setup_TopSortAlsWebApp,setup_Klammerpaare,setup_TextAnalyse,setup_TextkonkatenierungMitPromises,setup_TextkonkatenierungMitAwait,setup_tic_tac_toe,setup_covid19_mapchart,vue_singlefile,fragenAntworten,codeUebung];
  const dropdownbuttoncol = Array.from(document.getElementsByClassName("drpdwnbtn"));
  const sidebuttondiv:HTMLDivElement = <HTMLDivElement>document.getElementById("sidebutton");
 const buttoncollection = Array.from(sidebuttondiv.getElementsByTagName("button"));
 var buttonclicked:boolean[] = <boolean[]>new Array();
 dropdownbuttoncol.forEach(()=>{buttonclicked.push(false)});

 buttonarray.forEach(button=>{button.addEventListener("click",functionArray[buttonarray.indexOf(button)])});

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
const resetMainbereich = ():HTMLDivElement[]=>{
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main")!;
  mainref.replaceChildren();
 setupMainBereich();

 const main_header:HTMLDivElement = <HTMLDivElement>document.getElementById("mainheader")!;
 const main_main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main")!;
 
 return [mainref,main_header,main_main];
}
function setupMainBereich():void{
  // Hier wird ein Bereich(header,main) eingerichtet, um später Inhalte dort hineinzuladen
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main"); 
 
 let main_container:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"main_container"},"background-color:white; min-height:700px; padding-left:10px;padding-right:10px;");
 let main_header:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"mainheader"},"background-color:white; border-bottom:1px solid lightgray; display:flex; justify-content:center;");

 let main_main:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"main_main"},"background-color:white; display:block;margin-top:20px;");
 
 let main_footer:HTMLDivElement = <HTMLDivElement>elementFactory("id",{id:"main_footer"},"");
 mainref.appendChild(main_container);
 main_container.appendChild(main_header);

 main_container.appendChild(main_main);
 main_container.appendChild(main_footer);

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
async function fetchTextData(url:string):Promise<any>{
  let response;
  let data;
  try{
response = await fetch(url);
if(!response.ok){
  console.log(response.status);
}
data = await response.text();

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

function Schleife({start=0,end=10,step=1,func=console.log}){
  for(let i=start;i<end;i+=step){
    func( i );
  }


}

export function elementFactory(typ:string, attributes:any,style:string,...children:any[]):HTMLElement{
  const el = document.createElement(typ);
  for(const [key, value] of Object.entries(attributes)){
    el.setAttribute(key, String(value));
  }
  

  el.style.cssText=style;

  for(const c of children){
   
    if(isHTML(c)===false){
      
      el.appendChild(document.createTextNode(c));
    }
    else if(isHTML(c)){
      el.innerHTML = c;
    }
    else{
      el.appendChild(c);
    }
  }

  return el;
}

export function setCssProperties(htmlElement:HTMLElement,props:string):void{

  htmlElement.style.cssText = props;

}

function isHTML(string:string):boolean{
  var ret:boolean = false;
  const div:HTMLDivElement = document.createElement("div");
  div.innerHTML = string;
  const childnodes:Element[] = Array.from(div.getElementsByTagName("*"));
  childnodes.forEach(node=>{if(node.nodeType===1){ret=true;}});
  return ret;
}

(function home():void{
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main")!;
  const homebutton:HTMLButtonElement = <HTMLButtonElement>document.getElementById("homebutton")!;
  homebutton.addEventListener("click",()=>mainref.replaceChildren());
 
})();

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

export function addToTable(table:HTMLTableElement,cellContent:any[][],headlinecontent:string[],colorHeadline:string="white",colorRows:string="#dddddd"){
  // For headline
  if(headlinecontent.length>0){
  var firstrow = table.insertRow(-1);
  setCssProperties(firstrow,`background-color:${colorHeadline};`);

  for(const c of headlinecontent){
    let firstcells = firstrow.insertCell(headlinecontent.indexOf(c));
    firstcells.innerHTML = c;
  }
 }
 // actual content

 for(let i=0;i<cellContent.length;i++){
  let row = table.insertRow(-1);
  if(i%2===0){
  setCssProperties(row,`background-color:${colorRows};`);
  }
  for(let j=0;j<cellContent[i].length;j++){
   let cell = row.insertCell(j);
   cell.textContent = cellContent[i][j];

  }
}  


}

export function addToList(liste:HTMLElement,content:any[],color_notodd:string="#dddddd"):HTMLElement{
 
 content.forEach(c=>{
  const li = document.createElement("li");
 content.indexOf(c) === 0 ? li.style.backgroundColor=color_notodd : li.style.backgroundColor="white";
  if(isHTML(c)){
  li.innerHTML = c;
  }
  else{
    li.textContent = c;
  }
  liste.appendChild(li);
  

 });
 return liste;
}

function createSidenav(){

  const sidenav = elementFactory("div",{id:"1200pxsidenav"},"grid-row:2/3; grid-column:1/3; background-color:white;margin-left:20px; ");
  const container = document.getElementById("containerid");
  let button = elementFactory("button",{},"border:none;background-color:white;width:100%;font-size:1.3rem;text-align:left;padding:10px;","Platzhalter");
  let button2 = elementFactory("button",{},"border:none;background-color:white;width:100%;font-size:1.3rem;text-align:left;padding:10px;","Platzhalter")
button.addEventListener("mouseover",function(){this.style.color="#dddddd";});
button.addEventListener("mouseleave",function(){this.style.color="black";});
 console.log(sidenav);
  sidenav.appendChild(button);
  sidenav.appendChild(button2);
  container?.appendChild(sidenav);
  container!.style.gap="20px 20px";
  
}



export {setup_tic_tac_toe}; 
    
     
      
 
 