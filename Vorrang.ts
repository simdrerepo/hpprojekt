class Vorrang<T>{
    constructor(array2d:T[][]){
  this.array2d = array2d;
  
      this.adj = new Array();
      this.stack = new Array();
      this.besucht = new Array();
     this.alleKnoten = new Array();
      this.knotenSet = new Set();
      this.anzahlVorrang = 0;
      this.verbleibend=this.array2d;
      
      this.identifyKnoten();
     this.setupAdj();
    
      for(let i=0;i<this.array2d.length;i++){
        
            this.addKante(array2d[i][0],array2d[i][1]);
        
      }
      
      this.knotenSet.forEach((item:T)=>this.topologischSortieren(item));
    }
    verbleibend:Array<T>[];
    array2d:Array<T>[];
    adj:Array<T>[];
    stack:Array<T>;
    besucht:Array<T>;
    alleKnoten:Array<T>;
    knotenSet:Set<T>;
    anzahlVorrang:number;

    setupAdj():void{
   for(let i=0;i<this.knotenSet.size;i++){
    this.adj.push([]);
   }


    }

    printAdj():void{
        for(let i=0;i<this.adj.length;i++){
           
            for(let j=0;j<this.adj[i].length;j++){
                console.log(this.adj[i][j]);
            }
        }
    }

    printStack():void{
for(let i=0;i<this.stack.length;i++){
    console.log(this.stack[i]);
}

    }
    printKnotenSet():void{
       this.knotenSet.forEach((item:T)=>{console.log(item)});
    }
    returnSortierung():T[]{
      let tmpar:T[] = this.stack;
      let ar:T[] = new Array();
      while(tmpar.length!=0){
        ar.push(<T>tmpar.pop());
      }
      return ar;

    }
   

  
    identifyKnoten():void{
      
      for(let i=0;i<this.array2d.length;i++){
        
        for(let j=0;j<this.array2d[i].length;j++){
          this.alleKnoten.push(this.array2d[i][j]);
         this.knotenSet.add(this.array2d[i][j]);
        }
      }
  
    }
  
    
    addKante(k1:T,k2:T):void{
        let index = 0;
        let knotenSetarray:T[] = Array.from(this.knotenSet);
        for(let i=0;i<knotenSetarray.length;i++){
            if(knotenSetarray[i]===k1){
                index = i;
            }

        }
        
        this.adj[index].push(k2);
      }
      topsorthelper(knoten:T):void{
       
        this.besucht.push(knoten);
        for(let i=0;i<this.array2d.length;i++){
         this.array2d[i] = this.array2d[i].filter(item => item!= knoten);
         
        }
       var anzahl = 0;
        for(let i=0;i<this.array2d.length;i++){
      
        
        if(this.array2d[i].length!=0){
         anzahl++;
        }
        
        }
        this.anzahlVorrang = anzahl;
        let knotenArray:T[] = Array.from(this.knotenSet);
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
    
      topologischSortieren(knoten:T):void{
        
  
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
  export {Vorrang};