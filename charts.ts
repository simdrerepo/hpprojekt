
import { resetMainbereich } from "./script.js";
import { fetchJsonData } from "./script.js";
import { elementFactory } from "./script.js";

function dataTabelle(data:any):HTMLTableElement{
    var i = 0;
    var tabelle:HTMLTableElement = <HTMLTableElement>elementFactory("table",{},"test-align:center;")
    let row:HTMLTableRowElement = tabelle.insertRow(-1);
    let cell:HTMLTableCellElement = row.insertCell(0);
    cell.innerHTML = "<b>Bundesland</b>";cell = row.insertCell(1);cell.innerHTML = "<b>Fälle</b>";
   Array.from(data).forEach(d=>{
      let row:HTMLTableRowElement = tabelle.insertRow(-1);
    let cell:HTMLTableCellElement = row.insertCell(0);
    cell.textContent = data[data.indexOf(d)].name;
    cell = row.insertCell(1);
    cell.textContent = data[data.indexOf(d)].anzahl;
    if(i%2===0){row.style.backgroundColor="#dddddd";}
     
      
     
      i++;
  
    });
  return tabelle;
  
  }
 function mapChart(breite:number,hoehe:any,divid:string,geodata:any,geojson:any):void{
    var width = breite;
    var height = hoehe;
    var data = new Map();
    var colorScheme = d3.schemeReds[6];
    const geodatavalues = Object.values(geodata);
    var svg = d3.select(divid).append("svg").attr("width",width).attr("height",height).attr("viewBox",`0 0 ${width} ${height}`);
    var projection = d3.geoMercator().center([10, 50]).scale(1500).translate([width / 2, 250]);
    geodatavalues.forEach((d:any)=>{data.set(d.id,d.anzahl)}); // Daten der Bundesländer in einer map speichern
    var colorScale = d3.scaleThreshold().domain([10000,100000,1000000,3000000,7000000]).range(colorScheme);
    svg.append("g").selectAll("path").data(geojson .features).enter().append("path").attr("d", d3.geoPath().projection(projection)).attr("fill", function (d:any) {
              // Für jedes Land holen wir uns die Fallzahlen aus der Map
              // Die Werte wurden in der Map mit dem Kürzel des jeweiligen Bundeslandes(hier id) gespeichert
              let dataforbl = data.get(d.properties.id);
              return colorScale(dataforbl);
            });
        
    var labels = [">1.000<10.000",">10.000<100.000",">100.000<1.000.000",">1.000.000>3.000.000",">3.000.000<7.000.000",">7.000.000"];
    svg.append("g").attr("class","legend").attr("transform", `translate(${100},${400})`);
    var legend = d3.legendColor().labels(labels).title("Fälle").scale(colorScale);
    svg.select(".legend").call(legend);
  }    
  export async function setup_covid19_mapchart():Promise<void>{
  const [mainref,main_header,main_main] = resetMainbereich();
    let h1:HTMLHeadElement = elementFactory("h1",{},"","Covid-19 Fälle")
    const mapdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"mapdiv"},"display:flex; justify-content:center;")
    main_header.appendChild(h1);
    main_main.append(mapdiv);
    const [geo, geodata] = await Promise.all([fetchJsonData("http://127.0.0.1:5500/1_sehr_hoch.geo.json"),fetchJsonData("http://127.0.0.1:5500/covid-19.json")]);
    mapChart(400,600,"#mapdiv",geodata,geo);
  }
  
  
  export {dataTabelle};
  export {mapChart};