class SideNavigation {
    constructor() {
        this.open = false;
    }
    open;
    openSidenav() {
        let sidenav = document.getElementById("sidenav");
        let sidenavoverlay = document.getElementById("sidenavoverlay");
        sidenav.style.display = "block";
        sidenav.style.width = "250px";
        sidenavoverlay.style.display = "block";
        sidenavoverlay.style.width = "100%";
    }
    closeSidenav() {
        let sidenav = document.getElementById("sidenav");
        let sidenavoverlay = document.getElementById("sidenavoverlay");
        sidenav.style.display = "none";
        sidenav.style.display = "0px";
        sidenavoverlay.style.display = "none";
        sidenavoverlay.style.width = "0px";
    }
    getOpen() {
        return this.open;
    }
    swapOpen() {
        if (this.open == false) {
            this.open = true;
        }
        else {
            this.open = false;
        }
    }
}
function setup_side_navigation() {
    var sidenav = new SideNavigation();
    var sidenavoverlay = document.getElementById("sidenavoverlay");
    var sandwichbutton = document.getElementById("sandwichbutton");
    const closebutton = document.getElementById("sidenavclosebutton");
    closebutton?.addEventListener("click", () => openCloseSideNav(sidenav));
    sandwichbutton.addEventListener("click", () => openCloseSideNav(sidenav));
    sidenavoverlay.addEventListener("click", () => { openCloseSideNav(sidenav); });
}
function openCloseSideNav(ref) {
    if (ref.getOpen() === false) {
        ref.openSidenav();
        ref.swapOpen();
        return;
    }
    if (ref.getOpen() === true) {
        ref.closeSidenav();
        ref.swapOpen();
        return;
    }
}
export { SideNavigation };
export { setup_side_navigation };
export { openCloseSideNav };
