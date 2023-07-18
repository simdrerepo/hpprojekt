import { resetMainbereich } from "./script.js";
import { elementFactory } from "./script.js";
import { addBrotkrümel } from "./script.js";

var frage = {
   frage:"",
   setFrage:function(string:string):void{
      this.frage=string;

   }
  
}
var antwort = {
    __proto__:frage,
    antwort:"",
    setAntwort:function(string:string):void{
      this.antwort=string;

    }
 
}
const fragen = [
   "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
   "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
   "Was wäre der Preis für die garantierte Verhinderung von “broken links?",
   "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?",
   "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?",
   "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?",
   "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?",
   "In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?",
   "Was ist HTML?",
   "Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?",
   "Wie ist eine HTML-Tabelle aufgebaut?",
    "Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?",
   "Wie baut man in HTML ein Menü?",
   "Welche Attribute sollte man bei Bildern wie verwenden"
   ];
const antworten = [
   "Unterschiedliche Vorstellung der Jury über das Thema Hypertext (Wissenschaft sei schon weiter fortgeschritten).Es gäbe Hyperlinks die ins Leere zeigen (broken links).Berner-Lee`s Vorschlag sei ein Rückschritt.",
   "Stetige arbeit am Web bis heute. Lebendigkeit des Webs gibt Berner-Lee`s  Idee recht.",
   "Zentrale Kontrolle und damit einhergehende Geschlossenheit.",
   "Erfolgreiche Anfrage.",
   "Eine ehemalige URL wird auf eine neue URL weitergeleitet.",
   "Fehlerhaft aufgebaute Anfrage.",
   "Fehlende Zugriffsberechtigung.",
   "Man könnte den Server einmalig anfragen und sich die Options merken.",
   "HTML ist eine textbasierte kontextfreie Auszeichnungssprache(<...>) zur Strukturierung von Dokumenten.",
   "eine geordnete Liste legt man mit dem html-tag <ol>an. Eine geschachtelte List der tiefe 3 sieht folgendermassen aus "+
   "<ul><li></li><ul><li></li><ul></ul></ul></ul> um zu schachteln, verwenden man einfach einen weiterem <ul> tag anstatt einen <li>.",
   "Eine Tabelle wird mit dem <table> tag angelegt. Reihen werden mit <tr> (tablerow) hinzugefügt. Spalten lassen sich mit <td> erzeugen.",
   "Bei Pfaden sollte man relative anstatt absolute nutzen.",
   "Man könnte z.B. ein Div element anlegen und darin seine Menuelemente wrappen.Um auf verschiedene Seiten zu verlinken könnte man <a> tags oder <button> tags verwenden. Diese könnte man noch in einer unsortierten Liste oder einer Tabelle anordnen.",
   "Width and Height sollten immer defininiert sein. Außerdem wird empfohlen, letztere Attribute in Kombination mit dem style attribut zu nutzen. Also <img src='...' style='width:...; height:...;'"
];
const codeaufgaben = [
   "Schreiben Sie eine Funktion identity_function, die einen Parameter entgegennimmt und eine Funktion zurückgibt, die dieses Argument zurückgibt.",
   "Schreiben Sie eine Funktion addf, sodass addf(x)(y) genau x + y zurückgibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
   "Schreiben Sie eine Funktion applyf, die aus einer binären Funktion wie add(x,y) eine Funktion addf berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend soll applyf(mul)(5)(6) für Multiplikation 30 liefern.",
   "Schreiben Sie eine Funktion curry (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegennimmt. Beispiele: add3 = curry(add, 3); add3(4) ergibt 7 und curry(mul, 5)(6) ergibt 30.",
   "Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc selbst zu implementieren. inc(x) soll immer x + 1 zurückgeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe. Vielleicht schaffen Sie es, drei Varianten der inc-Implementierung zu schreiben?",
   "Schreiben Sie eine Funktion methodize, die eine binäre Funktion (z.B. add oder mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add) soll (3).add(4) genau 7 ergeben.",
   "Schreiben Sie eine Funktion demethodize, die eine unäre Methode (z.B. add oder mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.",
   "Schreiben Sie eine Funktion twice, die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Also z.B. var double = twice(add); double(11) soll 22 ergeben und var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.",
   "Schreiben Sie eine Funktion composeu, die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft. Also z.B. soll composeu(double, square)(3) genau 36 ergeben.",
   "Schreiben Sie eine Funktion composeb, die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft. Also z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.",
   "Schreiben Sie eine Funktion once, die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden. Also z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.",
   "Schreiben Sie eine Fabrik-Funktion counterf, die zwei Funktionen inc und dec berechnet, die einen Zähler hoch- und herunterzählen. Also z.B. counter = counterf(10). Dann soll counter.inc() genau 11 und counter.dec() wieder 10 ergeben.",
   "Schreiben Sie eine rücknehmbare Funktion revocable, die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurückgenommen wurde, führt ein erneuter Aufruf zu einem Fehler. Also z.B.:temp = revocable(alert);temp.invoke(7); // führt zu alert(7);temp.revoke();temp.invoke(8); // Fehlerabbruch!",
   "Schreiben Sie ein 'Array Wrapper'-Objekt mit den Methoden get, store und append, sodass ein Angreifer keinen Zugriff auf das innere, private Array hat. Also z.B.:my_vector = vector();my_vector.append(7);my_vector.store(1, 8); my_vector.get(0); // 7my_vector.get(1); // 8"
];
const codeloesungen = [
   "<code>function identity_function( para ){<br>"+
   "&nbsp return () => para; <br>"+
   "}",
   "<code>function addf( x ){<br>"+
      "&nbsp return ( y ) => x+y; <br>"+
      "}<br><br>"+
      "console.log(addf(3)(10)); // -> 13</code>",
   "<code>function applyf( bfunc ){<br>"+
      "&nbsp return (x) => { return ( y ) => { return bfunc(x,y); } };<br>"+
  "}<br><br>"+
  "console.log(applyf(add)(5)(6)); // -> 30</code>",
  "<code> function add(x,y){ return x+y; } <br><br> function mul(x,y){ return x*y; }<br><br>function curry(func,para){<br>"+
   "&nbsp return (x) => { return func(para,x); };<br>"+
 "}<br><br>console.log(curry(add,3)(4)); // -> 7<br><br>console.log(curry(mul,5)(6)); // -> 30</code>",
 "<code>const inc_v1 = addf(1);<br>const inc_v2 = applyf(add)(1);<br>const inc_v3 = curry(add,1);<br><br>"+
 "console.log(inc_v1(10)); // -> 11<br>console.log(inc_v2(10)); // -> 11<br>console.log(inc_v3(10)); // -> 11</code>",
 "<code>function methodize(wert){<br>&nbsp return this+wert; }<br><br>"+
 "Number.prototype.add = methodize;<br><br>"+
 "console.log((3).add(4)); // -> 7 </code>",
 "<code>function demethodize(func){<br>&nbspreturn (x,y) => { return func.bind(x)(y); };}<br><br>"+
 "console.log(demethodize(Number.prototype.add)(5,6)); // -> 11</code>",
 "<code> function twice(func){<br>&nbspreturn (x) => { return func(x,x); }<br> }<br><br>var double = twice(add);<br>var square = twice(mul);<br><br> "+
 "console.log(double(11)) // -> 22;<br>console.log(square(11)); // -> 121 </code>",
 "<code>function composeu(funca,funcb){<br>&nbsp return (x) => { return funcb(funca(x)); }<br> }<br><br>console.log(composeu(double, square)(3)); // -> 36</code>",
 "<code>function composeb(funca,funcb){<br>&nbsp return (x,y,z) => { return funcb(funca(x,y),z); } <br>}<br><br>console.log(composeb(add,mul)(2,3,5)); // -> 25</code>",
 "<code>function once (func){<br>&nbsp var funktion = func;<br>&nbsp var called = false;<br>&nbsp var inner = function(x,y){<br>&nbsp&nbsp if(called!=true){<br>&nbsp&nbsp&nbsp called = true;<br>&nbsp&nbsp&nbsp return funktion(x,y);<br>&nbsp&nbsp&nbsp}<br>&nbsp&nbsp&nbsp else throw new Error('Error');<br>&nbsp}<br>&nbsp return inner;<br>}"+
 "<br><br>var add_once = once(add);<br>console.log(add_once(3,4)); // -> 7<br>console.log(add_once(3,4)); // -> Error</code>",
 "<code>function counterf(zahl){<br>&nbsp return {<br>&nbsp&nbsp cnt : zahl,<br>&nbsp&nbsp inc(){this.cnt++;}, <br>&nbsp&nbsp dec(){this.cnt--;}<br>&nbsp};<br>}<br><br>"+
 "var counter = counterf(10);<br>counter.inc();<br>console.log(counter.cnt) // -> 11;<br>counter.dec() // -> ;<br>console.log(counter.cnt);</code>",
 "<code>function alert(para){<br>&nbsp console.log(para);<br>}<br><br>function revocable(func){<br>&nbsp return {<br>&nbsp&nbsp function : func,<br>&nbsp&nbsp invoke(variable){if(this.function===null){<br>&nbsp&nbsp&nbsp throw new Error('Error');}else{this.function(variable);}},<br>&nbsp&nbsp revoke(){this.function = null;}<br>&nbsp&nbsp}<br>&nbsp}<br><br>"+
 "var temp = revocable(alert);<br>temp.invoke(7) // -> console.log(7);<br>temp.revoke();<br>temp.invoke(8); // -> Error</code>",
 "<code>function vector(){<br>&nbsp var array = new Array();<br>&nbsp&nbsp return {<br>&nbsp&nbsp&nbsp append(para){array.push(para);},<br>&nbsp&nbsp&nbsp get(index){return array[index];},<br>&nbsp&nbsp&nbsp store(index, para){if(index > array.length)<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{array.push(para);}else{array[index]=para;}<br>&nbsp&nbsp}<br>&nbsp}<br>}<br><br>"+
 "var my_vector = vector();<br>my_vector.append(7);<br>my_vector.store(1,8);<br>console.log(my_vector.get(0)); // -> 7<br>console.log(my_vector.get(1)); // -> 8<br>console.log(my_vector.array); // -> undefined  </code>"
 


];
export const codeUebung=():void=>{
   const [main,main_header,main_main] = resetMainbereich();
   
   addBrotkrümel("Startseite","Funktionen in Javascript");
   
  
   var array = new Array();
 
   for(let i=0;i<codeaufgaben.length;i++){
      let Antwort = Object.create(antwort);
      Antwort.setFrage(codeaufgaben[i]);
      Antwort.setAntwort(codeloesungen[i]);
      array.push(Antwort);
   }
 
   addCodeFragen(main_main,array);



}
export const fragenAntworten = ():void=>{
   const [main,main_header,main_main] = resetMainbereich();
   
   addBrotkrümel("Startseite","Fragen und Antworten");
   var array = new Array();
   for(let i=0;i<fragen.length;i++){
      let Antwort = Object.create(antwort);
      Antwort.setFrage(fragen[i]);
      Antwort.setAntwort(antworten[i]);
      array.push(Antwort);
   }
   addDivs(main_main,array);
   
 


}
const addDivs=(mainref:HTMLDivElement,array:any[]):void=>{

   const h1 = elementFactory("h1",{},"",false,"Fragen / Antworten");
   mainref.appendChild(h1);
  
   for(const s of array){
      let fragediv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"padding:10px; background-color:#e7e9eb; border-left:5px solid grey;");
      let p:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"",false,s.frage);
      let antwortdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"margin-top:10px; margin-bottom:10px; border-left:4px solid #455f93; background-color:#edf5f6; padding:10px;")
      let pa:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"color:#455f93;",false,s.antwort);
      fragediv.appendChild(p);
      antwortdiv.appendChild(pa);
      mainref.appendChild(fragediv);
      mainref.appendChild(antwortdiv);
   
     }
   
   }
const addCodeFragen=(mainref:HTMLDivElement,array:any[]):void=>{

   let h1:HTMLDivElement = <HTMLDivElement>elementFactory("h1",{},"",false,"Funktionen in Javascript");
   mainref.appendChild(h1);


   for(const c of array){
      let fragediv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"display:flex; padding:10px; border-left:5px solid grey; background-color:#e7e9eb;"); 
      let p:HTMLParagraphElement = <HTMLParagraphElement>elementFactory("p",{},"",false,c.frage);
      let antwortdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"display:flex; margin-top:10px; margin-bottom:10px; padding:10px; border-left:5px solid yellow; background-color:lightyellow;",true,c.antwort);
      fragediv.appendChild(p);
      mainref.appendChild(fragediv);
      mainref.appendChild(antwortdiv);




   }



}





