import { resetMainbereich } from "./script.js";
export {setup_Klammerpaare};
import { elementFactory } from "./script.js";

const setup_Klammerpaare=():void=>{
  
   const [main,main_header,main_main] = resetMainbereich();
    
    let eingabedivu6:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},`display:flex; justify-content:center;margin-top:10px;`);
    let h1:HTMLHeadElement = <HTMLHeadElement>elementFactory("h1",{},"","Klammerpaare");
    var eingabeu6:HTMLInputElement = <HTMLInputElement>elementFactory("input",{type:"text"},"");
    let p:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},`text-align:center;`,"Der eingegebene Text wird auf korrekte Klammerung geprüft. Folgende Klammerpaare werden dabei berücksichtigt : (,) {,} [,].");
    const textdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"border:1px solid lightgrey; padding:10px; background-color:#e7e9eb;");
    textdiv.appendChild(p);
    main_header.appendChild(h1);
    eingabedivu6.appendChild(eingabeu6);
    main_main.appendChild(textdiv);
    main_main.appendChild(eingabedivu6);
   
   
   
    eingabeu6.addEventListener("input",()=>{
      const kp1_1 = '(';
      const kp1_2 = ')';
      const kp2_1 = '{';
      const kp2_2 = '}';
      const kp3_1 = '[';
      const kp3_2 = ']';
      const str:string = eingabeu6.value;
      var klammerarray = new Array();
      for(let i=0;i<str.length;i++){
        if(str[i]===kp1_1||str[i]===kp2_1||str[i]===kp3_1||str[i]===kp1_2||str[i]===kp2_2||str[i]===kp3_2){
          klammerarray.push(str[i]);
        }
      }
    
      
      if(klammerarray.length%2===1){
      eingabeu6.style.backgroundColor="red";
      }
      else if(klammerarray.length%2===0){
        var zustand = false;
        if(klammerarray.length===0){
          zustand = true;
        }
      
     
       for(let i=0; i< klammerarray.length/2;i++){
        if(klammerarray[i]===kp1_1){
          if(klammerarray[(klammerarray.length-1)-i]===kp1_2){
            zustand = true;
          }
          else{zustand = false;break;}
        }
        if(klammerarray[i]===kp1_2){
          zustand=false;break;
        }
        if(klammerarray[i]===kp2_1){
          if(klammerarray[(klammerarray.length-1)-i]===kp2_2){
            zustand = true;
          }
          else{zustand = false;break;}
        }
        if(klammerarray[i]===kp2_2){
          zustand=false;break;
        }
        if(klammerarray[i]===kp3_1){
          if(klammerarray[(klammerarray.length-1)-i]===kp3_2){
            zustand = true;
          }
          else{zustand = false;break;}
        }
        if(klammerarray[i]===kp3_2){
          zustand=false;break;
        }
       }
  
        if(zustand === false){
          eingabeu6.style.backgroundColor="red";
        }
        else{
          eingabeu6.style.backgroundColor="white";
        }
        
      
       }});
      
    
  }