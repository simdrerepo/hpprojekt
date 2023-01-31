import { resetMainbereich } from "./script.js";
export const setup_webInventors = () => {
    const [main, main_header, main_main] = resetMainbereich();
    const h1 = document.createElement("h1");
    h1.textContent = "Inventors of the web";
    main_header.appendChild(h1);
    main_main.innerHTML = "<ul><li><b><u><mark>Tim Berners-Lee</mark>:</u></b> WWW,HTTP,HTML,URI</li><li><b>Hakom Lie and Bert Bos:</b> CSS</li><li><b>Brendan Eich:</b> Java Script</li></ul><hr><br>" +
        "<h2> Inventors of the WWW</h2><div style='overflow-x:auto;'><table border='10'><tr><th colspan = '4'>Inventors of the WWW</th></tr><tr><th>WWW</th><th>HTML</th><th>CSS</th><th>JavaScript</th></tr><tr><td><mark>Tim Berners-Lee</mark></td><td><mark>Tim Berners-Lee</mark></td><td>Hakom Lie and Bert Bos</td><td>Brendan Eich</td></t></table></div><br><hr>" +
        "<h3>Inventors of the WWW</h3><hr width='50%' align='left'>" +
        "<table><tr><th>HTML</th><th>|</th><th>JavaScript</th></tr>" +
        "<tr><td><img id='bernerslee' src='https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/tbl.jpg'></td><th>|</th><td><img id='eich' src='https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/eich.jpg'></td></<tr>" +
        "<tr><th><mark>Tim Berners-Lee</mark></th><th>|</th><th>Brendan Eich</th></tr></table><hr> ";
    var berners = document.getElementById("bernerslee");
    const eich = document.getElementById("eich");
    berners.style.width = "100%";
    eich.style.width = "100%";
    berners.style.height = "auto";
    eich.style.height = "auto";
};