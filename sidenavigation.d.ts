declare class SideNavigation {
    constructor();
    private open;
    openSidenav(): void;
    closeSidenav(): void;
    getOpen(): boolean;
    swapOpen(): void;
}
declare function setup_side_navigation(): void;
declare function openCloseSideNav(ref: SideNavigation): void;
export { SideNavigation };
export { setup_side_navigation };
export { openCloseSideNav };
