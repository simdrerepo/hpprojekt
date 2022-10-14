function add(arg1,arg2){
    return arg1+arg2;
}
function mul(arg1,arg2){
    return arg1*arg2;
}

function identity(arg){
    return arg;
}

function identity_function(arg){

    return function(){return arg;};
}

function addf(arg1){
return function(arg2){return arg1+arg2;};
}
function applyf(arg1){
if(arg1===mul){
    return function(arg2){return function(arg3){return arg2*arg3;};}
}
if(arg1===add){
    return function(arg2){return function(arg3){return arg2+arg3;};}
}
else return 0;
}

class Person{ constructor(firstName,lastName,auto){this.firstName=firstName;this.lastName=lastName;this.auto=auto;};
firstName;
lastName;
auto;
}

class Auto{ constructor(name){this.name=name;}
name;
}
function conflict(auto,personenarray){
    for(const element of personenarray){
if(element.auto.name===auto.name){
    return true;
}
    }
return false;
}

p1 = new Person("Ha","Nuta",new Auto("Audi"));
p2 = new Person("John","cena",new Auto("Audi"));
p3 = new Person("Chin","Chan",new Auto("BMW"));



const personarray = [p1,p2,p3];


console.log(conflict(new Auto("Opel"),personarray));

function fibonacci(){
    let fiboarr = new Array(2000);
   fiboarr[0] = 1;
   fiboarr[1] = 1;
   let erg;
   for(i = 2;i<fiboarr.length;i++){
fiboarr[i] = fiboarr[i-1] + fiboarr[i-2];
console.log(fiboarr[i]); 
   }

   


}
fibonacci();
