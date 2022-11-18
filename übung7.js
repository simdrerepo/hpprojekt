function identity_function(para){
return ()=>para;
}
//unär
function addf(x){
return (y)=>x+y;
}

function applyf(bfunc){
    return (x)=>{return (y)=>{return bfunc(x,y);}};
}

//binär
const mul = (x,y) => x*y;
function add(x,y){
    return x+y;
}

function curry(func,para){
    return (x)=>{return func(para,x)};

}
function methodize(wert){
return this+wert;
}
function demethodize(func){
return (x,y)=>{return func.bind(x)(y);};
}
function counterf(zahl){
return {cnt : zahl,
inc(){this.cnt++;},
dec(){this.cnt--;}}
;}
function revocable(func){
return {function : func,
    invoke(variable){if(this.function===null){throw new Error("Error");}else{this.function(variable);}},
revoke(){this.function = null;}}
}
function alert(para){
console.log(para);
}
function vector(){
    var array = new Array();
    return {append(para){array.push(para);},
get(index){return array[index];},
store(index, para){if(index > array.length){
    array.push(para);
}
else{array[index]=para;}
}
}
}


Number.prototype.add = methodize;


console.log(addf(3)(10));
console.log(applyf(add)(3)(10));
console.log(curry(add,3)(4));
console.log(curry(mul,10)(3));
// inc (x+1)
const inc_v1 = addf(1);
const inc_v2 = applyf(add)(1);
const inc_v3 = curry(add,1);

console.log(inc_v1(10));
console.log(inc_v2(10));
console.log(inc_v3(10));
console.log((3).add(4));
console.log(demethodize(Number.prototype.add)(5,6));
var counter = counterf(10);
counter.inc()
console.log(counter.cnt);
counter.dec();
console.log(counter.cnt);
var temp = revocable(alert);
temp.invoke(7);
temp.revoke();
//temp.invoke(8);
var my_vector = vector();
my_vector.append(7);
my_vector.store(1,8);
console.log(my_vector.get(0));
console.log(my_vector.get(1));
console.log(my_vector.array);





