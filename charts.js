import { resetMainbereich } from "./script.js";
import { fetchJsonData } from "./script.js";
function dataTabelle(data) {
    var i = 0;
    var tabelle = document.createElement("table");
    tabelle.style.textAlign = "center";
    let row = tabelle.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = "<b>Bundesland</b>";
    cell = row.insertCell(1);
    cell.innerHTML = "<b>Fälle</b>";
    Array.from(data).forEach(d => {
        let row = tabelle.insertRow(-1);
        let cell = row.insertCell(0);
        cell.textContent = data[data.indexOf(d)].name;
        cell = row.insertCell(1);
        cell.textContent = data[data.indexOf(d)].anzahl;
        if (i % 2 === 0) {
            row.style.backgroundColor = "#dddddd";
        }
        i++;
    });
    return tabelle;
}
function mapChart(breite, hoehe, divid, geodata, geojson) {
    var width = breite;
    var height = hoehe;
    var data = new Map();
    var colorScheme = d3.schemeReds[6];
    const geodatavalues = Object.values(geodata);
    var svg = d3.select(divid).append("svg").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);
    var projection = d3.geoMercator().center([10, 50]).scale(1500).translate([width / 2, 250]);
    geodatavalues.forEach((d) => { data.set(d.id, d.anzahl); }); // Daten der Bundesländer in einer map speichern
    var colorScale = d3.scaleThreshold().domain([10000, 100000, 1000000, 3000000, 7000000]).range(colorScheme);
    svg.append("g").selectAll("path").data(geojson.features).enter().append("path").attr("d", d3.geoPath().projection(projection)).attr("fill", function (d) {
        // Für jedes Land holen wir uns die Fallzahlen aus der Map
        // Die Werte wurden in der Map mit dem Kürzel des jeweiligen Bundeslandes(hier id) gespeichert
        let dataforbl = data.get(d.properties.id);
        return colorScale(dataforbl);
    });
    var labels = [">1.000<10.000", ">10.000<100.000", ">100.000<1.000.000", ">1.000.000>3.000.000", ">3.000.000<7.000.000", ">7.000.000"];
    svg.append("g").attr("class", "legend").attr("transform", `translate(${100},${400})`);
    var legend = d3.legendColor().labels(labels).title("Fälle").scale(colorScale);
    svg.select(".legend").call(legend);
}
export async function setup_covid19_mapchart() {
    const [mainref, main_header, main_main] = resetMainbereich();
    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Covid-19 Fälle"));
    main_header.appendChild(h1);
    const mapdiv = document.createElement("div");
    mapdiv.setAttribute("id", "mapdiv");
    mapdiv.style.display = "flex";
    mapdiv.style.justifyContent = "center";
    main_main.append(mapdiv);
    const [geo, geodata] = await Promise.all([fetchJsonData("http://127.0.0.1:5500/1_sehr_hoch.geo.json"), fetchJsonData("http://127.0.0.1:5500/covid-19.json")]);
    mapChart(400, 600, "#mapdiv", geodata, geo);
}
export { dataTabelle };
export { mapChart };
