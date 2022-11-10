class Vorrang{
    constructor(array2d){
  this.array2d = array2d;
  this.knotenArray = new Array();
      this.adj = new Array();
      this.stack = new Array();
     
      this.knotenSet = new Set();
      this.identifyKnoten(array2d);
     this.setupAdj(this.knotenSet.size);
      for(let i in this.array2d){
        
            this.addKante(array2d[i][0],array2d[i][1]);
        
      }
      this.topologischSortieren();
    }
    printAdj(){
        for(let i in this.adj){
           
            for(let j in this.adj[i]){
                console.log(this.adj[i][j]);
            }
        }
    }

    printStack(){
for(let i in this.stack){
    console.log(this.stack[i]);
}

    }
    printKnotenSet(){
       this.knotenSet.forEach((item)=>{console.log(item)});
    }

  
    identifyKnoten(){
      
      for(let i in this.array2d){
        
        for(let j in this.array2d[i]){
          
         this.knotenSet.add(this.array2d[i][j]);
        }
      }
  
    }
  
    setupAdj(setSize){
      for(let i=0;i<setSize;i++){
        this.adj.push([]);
      }
  
    }
    addKante(k1,k2){
        let index = 0;
        let knotenSetarray = Array.from(this.knotenSet);
        for(let i=0;i<knotenSetarray.length;i++){
            if(knotenSetarray[i]===k1){
                index = i;
            }

        }
        
        this.adj[index].push(k2);
      }
      topsorthelper(knoten, besucht,stack){
        besucht.push(knoten);
        let knotenArray = Array.from(this.knotenSet);
        let indexfuerknoten=0;
        for(let i=0;i<knotenArray.length;i++){
          if(knotenArray[i]===knoten){
            indexfuerknoten=i;
          }
        }
  
        for(let i=0;i<this.adj[indexfuerknoten].length;i++){
                      if(!besucht.includes(this.adj[indexfuerknoten][i])){
                          
                          this.topsorthelper(this.adj[indexfuerknoten][i], besucht, stack)
                      }
                      
                  }
      stack.push(knoten);
     
      
      }
      topologischSortieren(){
      let stack = new Array();
      let besucht = new Array();
      let knotenArray = Array.from(this.knotenSet);
      
      for (let i = 0 ; i < knotenArray.length ; i++){
    
        if (!besucht.includes(knotenArray[i])){
           
            this.topsorthelper(knotenArray[i], besucht, stack);
            
        }
    }
   while(stack.length!=0){
    this.stack.push(stack.pop());
   }
   
  }
  
  [Symbol.iterator]() {
 
  let i = 0;
  return {
  next:()=> { if(i<this.stack.length){
    return {value: this.stack[i++],done:false};
  }
  else{
    return{done:true};
  }
  
  }
  }
  }
  }
  const vrng = new Vorrang([
    [ "essen", "studieren" ],
    [ "schlafen", "essen" ],
    [ "studieren", "prüfen" ]
  ]);
  
  
  
  for(const x of vrng){
console.log(x);
  }

  
