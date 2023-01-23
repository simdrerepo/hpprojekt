import { sidenavHandler } from "./script.js";
const setup_side_navigation=():void=>{
        var sidenavmixin = addopensidenav(addclosesidenav(addswapopen(addgetopen(SideNavigation))));
        var sidenav = new sidenavmixin();
        const handler = sidenavHandler();
        var sidenavproxy= new Proxy(sidenav,handler);
     
       
       
        const sidenavoverlay:HTMLDivElement = <HTMLDivElement>document.getElementById("sidenavoverlay");
        const sandwichbutton:HTMLElement = document.getElementById("sandwichbutton")!;
 const closebutton:HTMLElement= document.getElementById("sidenavclosebutton")!;
 closebutton?.addEventListener("click",()=>openCloseSideNav(sidenavproxy));
 sandwichbutton.addEventListener("click",()=>openCloseSideNav(sidenavproxy));
    sidenavoverlay.addEventListener("click",()=>{openCloseSideNav(sidenavproxy)});
        
      }
const openCloseSideNav=(ref:any):void=>{
 
             if(ref.open === false){
               ref.openSidenav();
               
               ref.swapOpen();
               return;
             }
             if(ref.open === true){
               ref.closeSidenav();
               ref.swapOpen();
               return;
             }
           }
class SideNavigation{
        constructor(){
           this.open=false;
          }
           open:boolean;
         
            }


    const addgetopen=(baseclass:any):any=>{
      return class extends baseclass{
        get open():boolean{return this.open}
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
          let sidenav:HTMLDivElement = <HTMLDivElement>document.getElementById("sidenav");
          let sidenavoverlay:HTMLDivElement =  <HTMLDivElement>document.getElementById("sidenavoverlay");
          sidenav.style.display = "block";
           sidenav.style.width = "250px";
            sidenavoverlay.style.display="block";
            sidenavoverlay.style.width="100%";
          }

      }
    }
    const addclosesidenav=(anyBaseClass:any):any=>{

      return class extends anyBaseClass{
        closeSidenav():void{
          let sidenav:HTMLDivElement = <HTMLDivElement>document.getElementById("sidenav");
         let sidenavoverlay:HTMLDivElement =  <HTMLDivElement>document.getElementById("sidenavoverlay");
           sidenav.style.display = "none";
           sidenav.style.display = "0px";
           sidenavoverlay.style.display="none";
          sidenavoverlay.style.width="0px";
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
    