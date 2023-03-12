import { resetMainbereich } from "./script.js";
export {vue_singlefile};
import { elementFactory } from "./script.js";
import { addBrotkrümel } from "./script.js";

 function vue_singlefile():void{
    const [mainref,main_header,main_main] = resetMainbereich();
     
      
      let header:HTMLDivElement = <HTMLDivElement>elementFactory("h1",{},"",false,"Vue Single Component");
      addBrotkrümel("Startseite","Vue Single Component");
      let headerdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"");  
      headerdiv.appendChild(header);
      main_header.appendChild(headerdiv);
      let div:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"vuediv"},"");
      let vuedivcontainer:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"display:flex; justify-content:center;");
      vuedivcontainer.appendChild(div);
      let para1:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"",false,"Buchstaben : {{buchstaben}}");
      let para2:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"",false,"Leerzeichen :{{leerzeichen}}");
      let para3:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"",false,"Worte : {{worte}}");
    
     
      div.appendChild(para1);
      div.appendChild(para2);
      div.appendChild(para3);
      
         let input:HTMLInputElement = <HTMLInputElement>elementFactory("input",{type:"text",},"");
        
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
      handler: function(event:any):void{
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