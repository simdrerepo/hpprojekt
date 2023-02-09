import { sidenavHandler } from "./script.js";
import { setCssProperties } from "./script.js";
const setup_side_navigation=():void=>{
 
        var sidenavmixin = addopensidenav(addclosesidenav(addswapopen(addgetopen(SideNavigation))));
        var sidenav = sidenavSingleton().getInstance();
       
      
       
        
        //const handler = sidenavHandler();
        //var sidenavproxy= new Proxy(sidenav,handler);

     
      
       
       
        const sidenavoverlay:HTMLDivElement = <HTMLDivElement>document.getElementById("sidenavoverlay");
        const sandwichbutton:HTMLElement = document.getElementById("sandwichbutton")!;
 const closebutton:HTMLElement= document.getElementById("sidenavclosebutton")!;
 closebutton?.addEventListener("click",()=>openCloseSideNav(sidenav));
 sandwichbutton.addEventListener("click",()=>openCloseSideNav(sidenav));
    sidenavoverlay.addEventListener("click",()=>{openCloseSideNav(sidenav)});
        
      }
const openCloseSideNav=(ref:any):void=>{
 
             if(ref.getopen() === false){
               ref.openSidenav();
               
               ref.swapOpen();
               return;
             }
             if(ref.getopen() === true){
               ref.closeSidenav();
               ref.swapOpen();
               return;
             }
           }

function sidenavClosure() {
  
 
  var open:boolean = false;
  
            return {
              getopen(){return open;},
              swapOpen(){if(open===false){open=true;}else{open=false;}},
              openSidenav():void{
                setCssProperties(document.getElementById("sidenav")!,"display:block; width:250px;");
                setCssProperties(document.getElementById("sidenavoverlay")!,"display:block; width:100%;");
              },
              closeSidenav():void{
                setCssProperties(document.getElementById("sidenav")!,"display:none; width:0px;");
                setCssProperties(document.getElementById("sidenavoverlay")!,"display:none; width:0px;");
               }
            };
          
           
          }

          var sidenavSingleton = function () {
            var instance:any;
        
            function init() {
        
               function getOpen() {
                  //private method
               }
        
               var open = false; // private property
        
              
        
               return {
                   getopen: function () {  
                       return open;
                   },
                   swapOpen(){if(open===false)open=true;else{open=false;}},
                   openSidenav():void{
                    setCssProperties(document.getElementById("sidenav")!,"display:block; width:250px;");
                    setCssProperties(document.getElementById("sidenavoverlay")!,"display:block; width:100%;");
                  },
                  closeSidenav():void{
                    setCssProperties(document.getElementById("sidenav")!,"display:none; width:0px;");
                    setCssProperties(document.getElementById("sidenavoverlay")!,"display:none; width:0px;");
                   }
               };
            };
        
            return {
                getInstance: function () {
        
                    if (!instance) {
                        instance = init();
                    }
                    return instance;
                }
            };
        };

class SideNavigation{
        constructor(){
           this.open=false;
          }
           open:boolean;
         
            }


    const addgetopen=(baseclass:any):any=>{
      return class extends baseclass{
        getopen():boolean{return this.open}
      }
    } 
    function addswapopen(anyBaseClass:any):any{
      return class extends anyBaseClass{
        swapOpen():void{if(this.open===false){
          this.open=true;
        }
      else{this.open=false;}
      }
      }

    }
    const addopensidenav=(anyBaseClass:any):any=>{
      return class extends anyBaseClass{
        openSidenav():void{
            setCssProperties(document.getElementById("sidenav")!,"display:block; width:250px;");
            setCssProperties(document.getElementById("sidenavoverlay")!,"display:block; width:100%;");
          }

      }
    }
    const addclosesidenav=(anyBaseClass:any):any=>{

      return class extends anyBaseClass{
        closeSidenav():void{
          setCssProperties(document.getElementById("sidenav")!,"display:none; width:0px;");
          setCssProperties(document.getElementById("sidenavoverlay")!,"display:none; width:0px;");
         }



      }
    }
      
    export { SideNavigation };
    export { addclosesidenav };
    export { addopensidenav };
    export { addgetopen };
    export { addswapopen };
    export {setup_side_navigation };
    export { openCloseSideNav };
    