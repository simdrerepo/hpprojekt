
import { resetMainbereich } from "./script.js";
export {setup_JsonImportieren};
import { fetchJsonData } from "./script.js";

const setup_JsonImportieren=async():Promise<void>=>{
    
      const json = await fetchJsonData("http://127.0.0.1:5500/content.json");
     
      const dropdownbuttoncollection:Element[] = Array.from(document.getElementsByClassName("drpdwnbtn"));
      const dropdwncntnr:Element[] = Array.from(document.getElementsByClassName("dropdown-container"));
      var array = new Array();

      for(let o of Object.keys(json)){
        for(let ob of Object.keys(json[o])){
          let button:HTMLButtonElement = document.createElement("button");
          button.style.backgroundColor = "#dddddd";
          button.setAttribute("class","dropdowncontainerbutton");
        array.push(ob);
        button.style.fontSize="16px";
          button.style.cursor = "pointer";
           dropdwncntnr[Object.keys(json).indexOf(o)].appendChild(button);
        }
      }
      const dropdowncontainerbuttoncollection:Element[] = Array.from(document.getElementsByClassName("dropdowncontainerbutton"));
      const jsonkeys:string[] = Object.keys(json); // Highestlevel

      setNameForButton(dropdownbuttoncollection,jsonkeys[0],jsonkeys[1],jsonkeys[2]);
      setNameForButton(dropdowncontainerbuttoncollection,array[0],array[1],array[2],array[3],array[4],array[5]);
      var i = 0;
      for(const [title, inhalte] of Object.entries(json)){
       //dropdownbuttoncollection[Object.keys(json).indexOf(title)].textContent = title;
           let itag:HTMLElement = document.createElement("i");
           itag.setAttribute("class","fa fa-caret-down");
           dropdownbuttoncollection[Object.keys(json).indexOf(title)].appendChild(itag);
           
         
       for(const [a, b] of Object.entries(json[title])){
         
         dropdowncontainerbuttoncollection[i].addEventListener("click",()=>{
           resetMainbereich();
           populateHeader(a);
           populateMain(Object(b).content);
           
     
         });
     
         i++;
        
       
       }
       
     
      }
      
      //hover effekt für die button im dropdowncontainer
      for(let dcb of dropdowncontainerbuttoncollection){
        dcb.addEventListener("mouseover" ,function(this:any){changeBackgroundColorAndColor(this,"#34568B","white")});
        dcb.addEventListener("mouseleave",function(this:any){changeBackgroundColorAndColor(this,"#dddddd","black") })}
      //dropdownicons für button im sidenav
      for(let b of dropdownbuttoncollection){
        b.addEventListener("click",function(this:any){
         
       
           if(this.lastChild.classList.contains("fa-caret-down")){this.removeChild(this.lastChild);let itag = document.createElement("i");
          itag.setAttribute("class","fa fa-caret-up");this.appendChild(itag);
        }
        else{this.removeChild(this.lastChild);let itag = document.createElement("i");itag.setAttribute("class","fa fa-caret-down");
          this.appendChild(itag);
        }
          
     
      
        })
        
      }
    
  }
  const populateMain=(input:any):void=>{
  
    const main_main = <HTMLDivElement>document.getElementById("main_main");
    main_main.replaceChildren();
    let contentdiv = document.createElement("div");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(input));
    contentdiv.appendChild(p);
    
    main_main.appendChild(contentdiv);
  }
  const populateHeader=(input:any):void=>{
    const main_header = <HTMLDivElement>document.getElementById("mainheader");
   
    main_header.replaceChildren();
    let h1 = document.createElement("h1");
    
    h1.appendChild(document.createTextNode(input));
    main_header.appendChild(h1);
  }
  const changeBackgroundColorAndColor=(buttonreferenz:any,backgroundColor:string,textcolor:string):void=>{
    buttonreferenz.style.backgroundColor = backgroundColor;
   buttonreferenz.style.color = textcolor;
  }

  function setNameForButton(button:any,...args:any):void{
   
    for(const c of args){
      button[args.indexOf(c)].textContent = c


  }
}

