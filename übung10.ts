

const add = (x:number | boolean,y:number | boolean):number => {let erg=0;if(typeof x === "number"&& typeof y ==="number"){ erg= x+y;}
if(typeof x === "boolean" && typeof y === "boolean"){
    if(x===true){
        x=1;
    }
    if(x===false){
        x=0;
    }
    if(y===true){
        y=1;
    }
    if(y===false){
        y=0;
    }
    erg = x+y;
}
return erg;};
const equals = (x:number|boolean,y:number|boolean):boolean => x===y;

console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
const x =1;const y = 1;
console.log( add(equals(x,y), equals(y,x)) );