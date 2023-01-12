class SideNavigation{
    constructor(){
      this.open=false;
    }
    private open:boolean;
   openSidenav():void{
        let sidenav = <HTMLDivElement>document.getElementById("sidenav");
        let sidenavoverlay =  <HTMLDivElement>document.getElementById("sidenavoverlay");
        sidenav.style.display = "block";
         sidenav.style.width = "250px";
          sidenavoverlay.style.display="block";
          sidenavoverlay.style.width="100%";
        }
    closeSidenav():void{
            let sidenav = <HTMLDivElement>document.getElementById("sidenav");
           let sidenavoverlay =  <HTMLDivElement>document.getElementById("sidenavoverlay");
             sidenav.style.display = "none";
             sidenav.style.display = "0px";
             sidenavoverlay.style.display="none";
            sidenavoverlay.style.width="0px";
           }
    getOpen():boolean{
      return this.open;
    }
    swapOpen():void{
      if(this.open==false){
        this.open=true;
      }
    else{this.open=false;}
    }
    }
function setup_side_navigation(){
        var sidenav = new SideNavigation();
        var sidenavoverlay = <HTMLDivElement>document.getElementById("sidenavoverlay");
        var sandwichbutton:HTMLElement = document.getElementById("sandwichbutton")!;
const closebutton:HTMLElement= document.getElementById("sidenavclosebutton")!;
closebutton?.addEventListener("click",()=>openCloseSideNav(sidenav));
sandwichbutton.addEventListener("click",()=>openCloseSideNav(sidenav));
    sidenavoverlay.addEventListener("click",()=>{openCloseSideNav(sidenav)});
        
      }
function openCloseSideNav(ref:SideNavigation):void{
             if(ref.getOpen() === false){
               ref.openSidenav();
               
               ref.swapOpen();
               return;
             }
             if(ref.getOpen() === true){
               ref.closeSidenav();
               ref.swapOpen();
               return;
             }
           }
      
    export {SideNavigation};
    export {setup_side_navigation};
    export {openCloseSideNav};