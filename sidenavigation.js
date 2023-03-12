import { setCssProperties } from "./script.js";
const setup_side_navigation = () => {
    var sidenavmixin = addopensidenav(addclosesidenav(addswapopen(addgetopen(SideNavigation))));
    var sidenav = sidenavSingleton().getInstance();
    //const handler = sidenavHandler();
    //var sidenavproxy= new Proxy(sidenav,handler);
    const sidenavoverlay = document.getElementById("sidenavoverlay");
    const sandwichbutton = document.getElementById("sandwichbutton");
    const closebutton = document.getElementById("sidenavclosebutton");
    closebutton?.addEventListener("click", () => openCloseSideNav(sidenav));
    sandwichbutton.addEventListener("click", () => openCloseSideNav(sidenav));
    sidenavoverlay.addEventListener("click", () => { openCloseSideNav(sidenav); });
};
const openCloseSideNav = (ref) => {
    if (ref.getopen() === false) {
        ref.openSidenav();
        ref.swapOpen();
        return;
    }
    if (ref.getopen() === true) {
        ref.closeSidenav();
        ref.swapOpen();
        return;
    }
};
function sidenavClosure() {
    var open = false;
    return {
        getopen() { return open; },
        swapOpen() { if (open === false) {
            open = true;
        }
        else {
            open = false;
        } },
        openSidenav() {
            setCssProperties(document.getElementById("sidenav"), "display:block; width:250px;");
            setCssProperties(document.getElementById("sidenavoverlay"), "display:block; width:100%;");
        },
        closeSidenav() {
            setCssProperties(document.getElementById("sidenav"), "display:none; width:0px;");
            setCssProperties(document.getElementById("sidenavoverlay"), "display:none; width:0px;");
        }
    };
}
var sidenavSingleton = function () {
    var instance;
    function init() {
        function getOpen() {
            //private method
        }
        var open = false; // private property
        return {
            getopen: function () {
                return open;
            },
            swapOpen() { if (open === false)
                open = true;
            else {
                open = false;
            } },
            openSidenav() {
                setCssProperties(document.getElementById("sidenav"), "display:block; width:250px;");
                setCssProperties(document.getElementById("sidenavoverlay"), "display:block; width:100%;");
            },
            closeSidenav() {
                setCssProperties(document.getElementById("sidenav"), "display:none; width:0px;");
                setCssProperties(document.getElementById("sidenavoverlay"), "display:none; width:0px;");
            }
        };
    }
    ;
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
};
class SideNavigation {
    constructor() {
        this.open = false;
    }
    open;
}
const addgetopen = (baseclass) => {
    return class extends baseclass {
        getopen() { return this.open; }
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
            setCssProperties(document.getElementById("sidenav"), "display:block; width:250px;");
            setCssProperties(document.getElementById("sidenavoverlay"), "display:block; width:100%;");
        }
    };
};
const addclosesidenav = (anyBaseClass) => {
    return class extends anyBaseClass {
        closeSidenav() {
            setCssProperties(document.getElementById("sidenav"), "display:none; width:0px;");
            setCssProperties(document.getElementById("sidenavoverlay"), "display:none; width:0px;");
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
