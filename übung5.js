class Graph{
    constructor(){
     this.knotenArray = new Array();
    this.adj = new Array();
    }
    knotenArray;
    adj;
    addKnoten(knoten){
      this.knotenArray.push(knoten);
      this.adj.push([]);
    }
    addKante(k1,k2){
      let indexfuerknoten=0;
      for(let i=0;i<this.knotenArray.length;i++){
        if(this.knotenArray[i]===k1){
          indexfuerknoten=i;
        }
      }
      
      this.adj[indexfuerknoten].push(k2);
    }
    print(){
    
      for(let i=0;i<this.knotenArray.length;i++){
        console.log(this.knotenArray[i]+" : ");
        for(let j=0;j<this.adj.length;j++){
          console.log(this.adj[i][j]);
        }
    
      }
    }
    
    topsorthelper(knoten, besucht,stack){
      besucht.push(knoten);
      console.log(knoten);
      let indexfuerknoten=0;
      for(let i=0;i<this.knotenArray.length;i++){
        if(this.knotenArray[i]===knoten){
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
    
      for (let i = 0 ; i < this.knotenArray.length ; i++){
        if (!besucht.includes(this.knotenArray[i])){
           
            this.topsorthelper(this.knotenArray[i], besucht, stack);
            
        }
    }
    for(let i =0;i<stack.length;i++){
        console.log(stack[i]);
    }
    }
    
    }
    

    graph = new Graph();
   
    graph.addKnoten("Katze");
    graph.addKnoten("Hund");
    graph.addKnoten("Esel");
    graph.addKnoten("Hahn");
    
    graph.addKante("Katze", "Hund");
    graph.addKante("Hahn", "Katze");
    graph.addKante("Hund", "Esel");
  
    graph.topologischSortieren();
   