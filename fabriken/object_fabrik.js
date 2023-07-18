"use strict";
function elementFactory(typ, attributes, style, ishtml = false, ...children) {
    const el = document.createElement(typ);
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, String(value));
    }
    el.style.cssText = style;
    for (const c of children) {
        if (ishtml === false && typeof c === "string") {
            el.appendChild(document.createTextNode(c));
        }
        else if (ishtml === true) {
            el.innerHTML = c;
        }
        else {
            el.appendChild(c);
        }
    }
    return el;
}
