const setup_side_navigation = () => {
    var sidenavmixin = addopensidenav(addclosesidenav(addswapopen(addgetopen(SideNavigation))));
    var sidenav = new sidenavmixin();
    const sidenavoverlay = document.getElementById("sidenavoverlay");
    const sandwichbutton = document.getElementById("sandwichbutton");
    const closebutton = document.getElementById("sidenavclosebutton");
    closebutton?.addEventListener("click", () => openCloseSideNav(sidenav));
    sandwichbutton.addEventListener("click", () => openCloseSideNav(sidenav));
    sidenavoverlay.addEventListener("click", () => { openCloseSideNav(sidenav); });
};
const openCloseSideNav = (ref) => {
    if (ref.open === false) {
        ref.openSidenav();
        ref.swapOpen();
        return;
    }
    if (ref.open === true) {
        ref.closeSidenav();
        ref.swapOpen();
        return;
    }
};
class SideNavigation {
    constructor() {
        this.open = false;
    }
    open;
}
const addgetopen = (baseclass) => {
    return class extends baseclass {
        get open() { return this.open; }
    };
};
function addswapopen(anyBaseClass) {
    return class extends anyBaseClass {
        swapOpen() {
            if (this.open === false) {
                this.open = true;
            }
            else {
                this.open = false;
            }
        }
    };
}
const addopensidenav = (anyBaseClass) => {
    return class extends anyBaseClass {
        openSidenav() {
            let sidenav = document.getElementById("sidenav");
            let sidenavoverlay = document.getElementById("sidenavoverlay");
            sidenav.style.display = "block";
            sidenav.style.width = "250px";
            sidenavoverlay.style.display = "block";
            sidenavoverlay.style.width = "100%";
        }
    };
};
const addclosesidenav = (anyBaseClass) => {
    return class extends anyBaseClass {
        closeSidenav() {
            let sidenav = document.getElementById("sidenav");
            let sidenavoverlay = document.getElementById("sidenavoverlay");
            sidenav.style.display = "none";
            sidenav.style.display = "0px";
            sidenavoverlay.style.display = "none";
            sidenavoverlay.style.width = "0px";
        }
    };
};
export { SideNavigation };
export { addclosesidenav };
export { addopensidenav };
export { addgetopen };
export { addswapopen };
export { setup_side_navigation };
export { openCloseSideNav };
