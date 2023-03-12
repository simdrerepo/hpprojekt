
function deepClone(obj:any) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    let clone:any = Array.isArray(obj) ? [] : {};
    for (let key in obj) { 
       
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }

const obj = {name:"horst",adresse:{plz:"12345",strasse:"strasse",a:{b:"irgendwas"}}};
const objcopy = deepClone(obj);


