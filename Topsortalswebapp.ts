import { resetMainbereich } from "./script.js";
import { Vorrang } from "./Vorrang.js";
import { elementFactory } from "./script.js";
export {setup_TopSortAlsWebApp};

const setup_TopSortAlsWebApp = ():void => {
  const [main,main_header,main_main] = resetMainbereich();
    
   var liste:HTMLUListElement = document.createElement("ul");
    
   var input1:HTMLInputElement = <HTMLInputElement>elementFactory("input",{type:"search",id:"input1"},"grid-area:input1;");
   var input2:HTMLInputElement = <HTMLInputElement>elementFactory("input",{type:"search",id:"input2"},"grid-area:input2;");
    let headline:HTMLHeadElement = elementFactory("h1",{},"","TopSort als Web-App");
    let h1div:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"");
   h1div.appendChild(headline);

    main_header.appendChild(h1div);
    var resetbutton:HTMLButtonElement = <HTMLButtonElement>elementFactory("button",{id:"resetbutton"},"height:1.5rem; width:5rem; grid-area:reset;","reset");
   
   resetbutton.addEventListener("click",()=>setup_TopSortAlsWebApp());
    let button:HTMLButtonElement = <HTMLButtonElement>elementFactory("button",{id:"sortbutton"},"height:1.5rem; width:5rem; grid-area:sortieren;","sortieren");
    let div:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"topsortinputsdiv"},"");
   let inputdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"inputdiv"},"grid-area:inputdiv;");
    let buttondiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"buttondiv"},"grid-area:buttondiv;");
    let addbutton:HTMLButtonElement = <HTMLButtonElement>elementFactory("button",{id:"addbutton"},"grid-area:hinzufügen; height:1.5rem; width:5rem;","hinzufügen");
    
    inputdiv.appendChild(input1);
    inputdiv.appendChild(input2);
    buttondiv.appendChild(addbutton);
    buttondiv.appendChild(button);
    buttondiv.appendChild(resetbutton);
    div.appendChild(inputdiv);
    div.appendChild(buttondiv);
   let listdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"");
  
   listdiv.appendChild(liste);
    main_main.appendChild(div);
    main_main.appendChild(listdiv);
   
    var sortiert = 0;
  
    button.addEventListener("click",()=>{
     
   if(sortiert===0){
    
   var vorrang2dArray:any[][] = new Array();
      let col:Element[] = Array.from(liste.querySelectorAll("li"));
    
   col.forEach(ele=>{let str = ele.textContent!.replaceAll("[","").replaceAll("]","").replaceAll(","," ").split(" ");
   
  
     vorrang2dArray.push(str);})
  
  
   let graph:Vorrang<any> = new Vorrang(vorrang2dArray);
   
   let li:HTMLLIElement = <HTMLLIElement>elementFactory("li",{},"padding:5px; border-left:1px solid lightgrey; border-right:1px solid lightgrey; border-bottom:1px solid lightgrey; background-color:lightyellow;");
   
   var ergstack:any[] = graph.returnSortierung();
   var ergstr="";
  
   ergstack.forEach(ele=>{ergstr+=ele+" ";})
  
   li.appendChild(document.createTextNode("Sortierung (v.l.n.r) = "+ergstr))
   liste.appendChild(li);
   sortiert = 1;
  
    
  }
      
    })
    var ele_cntr = 0;
   addbutton.addEventListener("click",(e)=>{
    const input1:HTMLInputElement = <HTMLInputElement>document.getElementById("input1")!;
    const input2:HTMLInputElement = <HTMLInputElement>document.getElementById("input2")!;
    if(input1.value&&input2.value){
   
    if(sortiert === 0){
    let li = document.createElement("li");
    li.style.padding = "5px";
    if(ele_cntr===0){
    li.style.border = "1px solid lightgrey";}
    if(ele_cntr%2===0){
      li.style.backgroundColor ="#f4f4f4";
    }
    if(ele_cntr%2===1){
      li.style.backgroundColor = "white";
    }
    if(ele_cntr!=0){li.style.borderLeft ="1px solid lightgrey";li.style.borderRight = "1px solid lightgrey";li.style.borderBottom = "1px solid lightgrey";};
  
    
    li.appendChild(document.createTextNode("["+input1.value.trim()+","+input2.value.trim()+"]"));
    liste.appendChild(li);
    ele_cntr++;
    input1.value="";
    input2.value="";
  }
  }
   })
  }