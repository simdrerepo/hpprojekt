"use strict";
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
const obj = { name: "horst", adrresse: { plz: "12345", strasse: "strasse", a: { b: "irgendwas" } } };
const objcopy = deepClone(obj);
