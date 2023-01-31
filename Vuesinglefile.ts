import { resetMainbereich } from "./script.js";
export {vue_singlefile};

 function vue_singlefile():void{
    const [mainref,main_header,main_main] = resetMainbereich();
     
      let headerdiv:HTMLDivElement = document.createElement("div");
      let header:HTMLDivElement = document.createElement("h1");
      header.appendChild(document.createTextNode("Vue Single Component")); 
      headerdiv.appendChild(header);
      main_header.appendChild(headerdiv);
      let div:HTMLDivElement = document.createElement("div");
      let vuedivcontainer:HTMLDivElement = document.createElement("div");
      vuedivcontainer.style.display="flex";
      vuedivcontainer.style.justifyContent="center";
      vuedivcontainer.appendChild(div);
      div.setAttribute("id","vuediv");
     
      let para1:HTMLParagraphElement = document.createElement("p");
      let para2:HTMLParagraphElement = document.createElement("p");
      let para3:HTMLParagraphElement = document.createElement("p");
     
      para1.textContent = "Buchstaben : {{buchstaben}}";
      para2.appendChild(document.createTextNode("Leerzeichen :{{leerzeichen}}"));
      para3.appendChild(document.createTextNode("Worte : {{worte}}"));
      div.appendChild(para1);
      div.appendChild(para2);
      div.appendChild(para3);
      
         let input:HTMLInputElement = document.createElement("input");
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