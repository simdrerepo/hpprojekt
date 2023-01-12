class Vorrang{
    constructor(array2d){
  this.array2d = array2d;
  
      this.adj = new Array();
      this.stack = new Array();
      this.besucht = new Array();
     this.alleKnoten = new Array();
      this.knotenSet = new Set();
      this.anzahlVorrang = 0;
      
      this.identifyKnoten(array2d);
     this.setupAdj(this.knotenSet.size);
    
      for(let i in this.array2d){
        
            this.addKante(array2d[i][0],array2d[i][1]);
        
      }
      this.knotenSet.forEach((item)=>this.topologischSortieren(item));
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
          this.alleKnoten.push(this.array2d[i][j]);
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
      topsorthelper(knoten){
       
        this.besucht.push(knoten);
        for(let i in this.array2d){
         this.array2d[i] = this.array2d[i].filter(item => item!= knoten);
         
        }
       var anzahl = 0;
        for(let i in this.array2d){
      
        
        if(this.array2d[i].length!=0){
         anzahl++;
        }
        
        }
        this.anzahlVorrang = anzahl;
        let knotenArray = Array.from(this.knotenSet);
        let indexfuerknoten=0;
        for(let i=0;i<knotenArray.length;i++){
          if(knotenArray[i]===knoten){
            indexfuerknoten=i;
          }
        }
  
        for(let i=0;i<this.adj[indexfuerknoten].length;i++){
         
                      if(!this.besucht.includes(this.adj[indexfuerknoten][i])){
                          
                          this.topsorthelper(this.adj[indexfuerknoten][i])
                      }
                      
                  }
      this.stack.push(knoten);
      }
      topologischSortieren(knoten){
  
        if (!this.besucht.includes(knoten)){
           
            this.topsorthelper(knoten);
            
        }
  }
  
 * [Symbol.iterator]() {
  
  
  
 
  
  for(let i=0;i<this.knotenSet.size;i++ ){
  
yield this.stack[this.knotenSet.size-1-i];
  }
  

  }
  }
  const handler = {
    
    get: function(target,prop,value){
      
    if(prop===){
      console.log(target[prop]);

    }

    }
  };
 



  const vorrangProxy = new Proxy(new Vorrang([
    [ "essen", "studieren" ],
    [ "schlafen", "essen" ],
    [ "studieren", "prüfen" ]
  ]),handler);
  
  
  
  
  
  


  
