function barChart(json, divid, breite, hoehe) {
    const data = Object.values(json);
    const datasorted = data.sort((a, b) => d3.descending(a.anzahl, b.anzahl));
    var margin = { top: 10, right: 30, bottom: 90, left: 60 }, width = breite - margin.left - margin.right, height = hoehe - margin.top - margin.bottom;
    var svg = d3.select(divid)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var x = d3.scaleBand()
        .range([0, width])
        .domain(datasorted.map(function (d) { return d.name; }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    var y = d3.scaleLinear()
        .domain([0, d3.max(datasorted, (d) => d.anzahl)])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    svg.selectAll("svg")
        .data(datasorted)
        .enter()
        .append("rect")
        .attr("x", (d) => { return Number(x(d.name)); })
        .attr("width", x.bandwidth())
        .attr("fill", "royalblue")
        .attr("height", function (d) { return height - y(0); })
        .attr("y", function (d) { return y(0); });
    svg.selectAll("rect")
        .transition()
        .duration(800)
        .attr("y", function (d) { return y(d.anzahl); })
        .attr("height", function (d) { return height - y(d.anzahl); })
        .delay(function (d, i) { return (i * 100); });
}
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
    const geodatavalues = Object.values(geodata);
    var svg = d3.select(divid).append("svg").attr("width", width).attr("height", height);
    var projection = d3.geoMercator()
        .center([10, 50])
        .scale(1500)
        .translate([width / 2, height / 2]);
    var data = new Map();
    geodatavalues.forEach((d) => { data.set(d.id, d.anzahl); }); // Daten der Bundesländer in einer map speichern
    var colorScheme = d3.schemeReds[6];
    var colorScale = d3.scaleThreshold()
        .domain([1000, 10000, 100000, 1000000, 3000000, 7000000])
        .range(colorScheme);
    svg.append("g")
        .selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", d3.geoPath().projection(projection))
        .attr("fill", function (d) {
        // Für jedes Land holen wir uns die Fallzahlen aus der Map
        // Die Werte wurden in der Map mit dem Kürzel des jeweiligen Bundeslandes(hier id) gespeichert
        let dataforbl = data.get(d.properties.id);
        return colorScale(dataforbl);
    });
}
export { barChart };
export { dataTabelle };
export { mapChart };
