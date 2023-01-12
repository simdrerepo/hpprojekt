function benchmarkInnerHTML() {
    let main = document.getElementById("main_main");
    let div = document.createElement("div");
    main.appendChild(div);
    let text = '<h1>Eine Überschrift</h1>';
    let t0 = performance.now();
    for (let i = 0; i < 500; i++) {
        div.innerHTML += text;
    }
    let t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
function benchmarkInnerText() {
    let main = document.getElementById("main_main");
    let div = document.createElement("div");
    div.setAttribute("id", "testdiv");
    main.appendChild(div);
    let text = '<h1>Eine Überschrift</h1>';
    let t0 = performance.now();
    for (let i = 0; i < 1000; i++) {
        div.innerText = text;
    }
    let t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
function benchmarkTextContent() {
    let main = document.getElementById("main_main");
    let div = document.createElement("div");
    div.setAttribute("id", "testdiv");
    main.appendChild(div);
    let text = '<h1>Eine Überschrift</h1>';
    let t0 = performance.now();
    for (let i = 0; i < 1000; i++) {
        div.textContent = text;
    }
    let t1 = performance.now();
    main.removeChild(div);
    return t1 - t0;
}
export { benchmarkInnerHTML };
export { benchmarkInnerText };
export { benchmarkTextContent };
