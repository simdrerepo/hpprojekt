function benchmarkInnerHTML():number{

    let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
    let div:HTMLDivElement = document.createElement("div");
    
    main.appendChild(div);
    
  
  let text:string = '<h1>Eine Überschrift</h1>';
  
  
  let t0:number = performance.now();
  
   for(let i=0;i<500;i++){
  div.innerHTML+=text;
   }
  
  let t1:number = performance.now();
  main.removeChild(div);
  
  return t1-t0;
  
  }
function benchmarkInnerText():number{
  
    let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
    let div:HTMLDivElement = <HTMLDivElement>document.createElement("div");
    div.setAttribute("id","testdiv");
    main.appendChild(div);
    
  
  let text:string = '<h1>Eine Überschrift</h1>';
  
  
  let t0:number = performance.now();
  
   for(let i=0;i<1000;i++){
  div.innerText=text;
   }
  
  let t1:number = performance.now();
  main.removeChild(div);
  
  return t1-t0;
  
  }
function benchmarkTextContent():number{
  
    let main:HTMLDivElement = <HTMLDivElement>document.getElementById("main_main");
    let div:HTMLDivElement = <HTMLDivElement>document.createElement("div");
    div.setAttribute("id","testdiv");
    main.appendChild(div);
   
  
  let text:string = '<h1>Eine Überschrift</h1>';
  
  
  let t0:number = performance.now();
  
   for(let i=0;i<1000;i++){
  div.textContent=text;
   }
  
  let t1:number = performance.now();
  main.removeChild(div);
  
  return t1-t0;
  
  }

  export {benchmarkInnerHTML};
  export {benchmarkInnerText};
  export {benchmarkTextContent};