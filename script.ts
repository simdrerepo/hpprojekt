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




setup_JsonImportieren();
export function filterObject(obj:any,string:string){
 

  return Object.fromEntries(Object.entries(obj).filter(([a,b])=>{return a===string;}));

}
export function objectFabric(){
  const obj = { 
    webinventors:{textcontent:"Web Inventors",funktion:setup_webInventors},
    dombenchmarks:{textcontent:"Dom Benchmarks",funktion:domBenchmarks},
    rednermitzeitmessung:{textcontent:"Redner mit Zeitmessung",funktion:setup_RednerMitZeitmessung},
    topsort:{textcontent:"Topsort als Webapp",funktion:setup_TopSortAlsWebApp},
    klammerpaare:{textcontent:"Klammerpaare",funktion:setup_Klammerpaare},
    textanalyse:{textcontent:"Textanalyse",funktion:setup_TextAnalyse},
    asyncawait:{textcontent:"Textkonkatenierung mit async/await",funktion:setup_TextkonkatenierungMitAwait},
    promises:{textcontent:"Textkonkatenierung mit Promises",funktion:setup_TextkonkatenierungMitPromises},
    tictactoe:{textcontent:"Tic Tac Toe",funktion:setup_tic_tac_toe},
    mapchart:{textcontent:"Covid-19 mapchart",funktion:setup_covid19_mapchart},
    vuesinglefile:{textcontent:"Vue Single Component",funktion:vue_singlefile},
    fragen:{textcontent:"Fragen und Antworten",funktion:fragenAntworten},
    code:{textcontent:"Funktionen in Javascript",funktion:codeUebung}
  
  }
  return obj;
}

(function ListenerVergeben():void{
  const buttonarray:Element[] = Array.from(document.getElementsByClassName("regularButton"));
  const obj = { 
    webinventors:{textcontent:"Web Inventors",funktion:setup_webInventors},
    dombenchmarks:{textcontent:"Dom Benchmarks",funktion:domBenchmarks},
    rednermitzeitmessung:{textcontent:"Redner mit Zeitmessung",funktion:setup_RednerMitZeitmessung},
    topsort:{textcontent:"Topsort als Webapp",funktion:setup_TopSortAlsWebApp},
    klammerpaare:{textcontent:"Klammerpaare",funktion:setup_Klammerpaare},
    textanalyse:{textcontent:"Textanalyse",funktion:setup_TextAnalyse},
    asyncawait:{textcontent:"Textkonkatenierung mit async/await",funktion:setup_TextkonkatenierungMitAwait},
    promises:{textcontent:"Textkonkatenierung mit Promises",funktion:setup_TextkonkatenierungMitPromises},
    tictactoe:{textcontent:"Tic Tac Toe",funktion:setup_tic_tac_toe},
    mapchart:{textcontent:"Covid-19 mapchart",funktion:setup_covid19_mapchart},
    vuesinglefile:{textcontent:"Vue Single Component",funktion:vue_singlefile},
    fragen:{textcontent:"Fragen und Antworten",funktion:fragenAntworten},
    code:{textcontent:"Funktionen in Javascript",funktion:codeUebung}
  
  }

  setup_headernav(obj);
  

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
    b.addEventListener("mouseover",function(){ this.style.backgroundColor= this.style.backgroundColor="#cfe8fd";});
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
function mouseOver(this:any,farbe:string="#34568B"):void{
 
  this.style.backgroundColor=farbe;
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
export function elementFactory(typ:string, attributes:any,style:string,ishtml=false,...children:any[]):HTMLElement{
  const el = document.createElement(typ);
  for(const [key, value] of Object.entries(attributes)){
    el.setAttribute(key, String(value));
  }
  

  el.style.cssText=style;

  for(const c of children){
   
    if(ishtml===false&&typeof c==="string"){
      
      el.appendChild(document.createTextNode(c));
    }
    else if(ishtml===true){
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
  homebutton.addEventListener("click",()=>{mainref.replaceChildren(); addBrotkrümel("Startseite");});
  
 
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
    if(isHTML(cellContent[i][j])){
      let cell = row.insertCell(j);
    cell.innerHTML = cellContent[i][j];
    }
    else if(typeof cellContent[i][j] === "string"){
      let cell = row.insertCell(j);
      cell.textContent = cellContent[i][j];

    }
    else{
    let cell = row.insertCell(j);
    cell.appendChild(cellContent[i][j]);
    }
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

function setup_headernav(object:any){
  const navdropdown = document.getElementById("navbardropdown");

  for(const key of Object.values(object)){
    

  const button = elementFactory("button",{},"border:none; color:white; padding:7px; background-color:#34568B; align:left; cursor:pointer;width100%;");
    
    button.textContent = Object(key).textcontent;
    button.addEventListener("click",Object(key).funktion);
   
    navdropdown?.appendChild(button);
     

  }
 
    
   
    

  
}
function setup_headerbar_withjsonimports(functionArray:any[]){
  functionArray.forEach(f=>{
    const button = elementFactory("button",{},"");
    const div = elementFactory("div",{},"");
    
  });


}
export function addBrotkrümel(...brotkrümel:any[]){
  const bkdiv = document.getElementById("brotkrümel");
  
  bkdiv?.replaceChildren();
  const href = elementFactory("a",{href:"#"},"",false,"Link");
  href.addEventListener("click",()=>setup_webInventors());
  
 
    for(const c of brotkrümel){
      const arrow = elementFactory("i",{class:"fa fa-angle-right"},"margin-left:10px; margin-right:10px;");
      bkdiv?.appendChild(document.createTextNode(c));
      bkdiv?.appendChild(arrow);
    }
    const lastchild:ChildNode = <ChildNode>bkdiv?.lastChild;
    bkdiv?.removeChild(lastchild);
   



}
export function addBrotkrümelv2(obj:any,icon:string){
  const bkdiv = document.getElementById("brotkrümel");
  const mainref:HTMLDivElement = <HTMLDivElement>document.getElementById("main")!;
  bkdiv?.replaceChildren();
  const href = elementFactory("a",{href:"#"},"");
  const arrow = elementFactory("i",{class:icon},"margin-left:10px; margin-right:10px;");
  href.textContent = "Startseite";
  bkdiv?.appendChild(href);
  bkdiv?.appendChild(arrow);
  href.addEventListener("click",()=>{mainref.replaceChildren();addBrotkrümelv2({},"fa fa-angle-right")});

  for(const key of Object.values(obj)){
    const href = elementFactory("a",{href:"#"},"");
    href.textContent = Object(key).textcontent;
    href.addEventListener("click",()=>Object(key).funktion);
    const arrow = elementFactory("i",{class:icon},"margin-left:10px; margin-right:10px;");
    bkdiv?.appendChild(href);
    bkdiv?.appendChild(arrow);

  }
  const lastchild:ChildNode = <ChildNode>bkdiv?.lastChild;
  bkdiv?.removeChild(lastchild);
  


}

export {setup_tic_tac_toe}; 
    
     
      
 
 