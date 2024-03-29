<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.25.6/d3-legend.min.js"></script>

<script src="https://unpkg.com/vue@2.7"></script>
<script scr="charts.js"></script>


    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Solution Navigator</title>
   
  
    
    
    <style>
      
    
    *  {
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
     /* Declare text styles */
 p {
  /* Font minimum, preferred and maximum value */
  /*font-size: clamp(var(--min), var(--val), var(--max));*/
  font-size: clamp(0.6em, 4vw, 1.2em);
}
input{
  font-size: clamp(0.6em, 4vw, 1.2em);
}
h1{
  font-size: clamp(1.5em, 4vw, 2.5em);
}
h2{
  font-size: clamp(1.2em, 4vw, 2.4em);
}

code{
  font-size: clamp(0.6em, 4vw, 1.2em);
}



     .dropdown-div{
      display:flex;
      justify-content: center;
      align-items: center;
      
     }

     .dropdown{
      color:white;
      background-color:#34568B;
      border:none;
      padding: 5px;
      
     }
    
    
     
.container{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto auto 1fr auto;
    background-color: #e7e9eb;
    z-index: 0;
    
    

}
#sidenavoverlay{
display:none;
z-index: 1;
background-color: black;
height:100%;
margin-left:250px;
opacity:0.5;
position:fixed;
top:0;
}


#main{
 
  background-color: #e7e9eb;
 min-height:900px;
  

  
grid-column: 1/5;
grid-row:3/4;}
#header{ grid-column: 1/5;grid-row: 1/2;background-color:#34568B; ;display:flex;
  justify-content: space-between; 
  position:sticky;




}
#brotkrümel{
 
    min-height: 20px;
    display:flex;
    align-items: center;
    padding:5px;
    
    font-size: clamp(0.6em, 4vw, 1.2em);
    
    background-color: white;
    
    
    
   
    

}

#footer{
  grid-column: 1/5;grid-row: 4/5;
  background-color: 
  #34568B;
  
}
.sidebuttondiv>*{
  
  font-size: 16px;

}



.dropdown-container{
display:none;
width:250px;
margin-left: 12px;

}
#sidenav {
  display:none;
  height: 100%;
  width: 0;
  z-index: 1;
  background-color: white;
  overflow-x: hidden;
  position:fixed;
  transition: 0.5s;
  top:0;
}



.iconbar a:hover{


  transform: scale(1.4);
   
}

.iconbar{
   display:flex;
   justify-content: center;
   align-items: center;

}
.navbar{
  display:flex;
  justify-content: center;
  align-items: center;
}
.navbardropdowndiv{
  position: relative;
  display: inline-block;
 

  
}


.navbardropdownbutton{

  background-color: #34568B;
  border:none;
  color:white;
  font-size: clamp(0.6em, 4vw, 1.2em);
  
  

}
.navbardropdownbutton:hover{
  cursor: pointer;
}
.navbardropdownbutton i{
  margin-left:10px;
}


.navbardropdown{
  background-color: #34568B;
  display: none;
  position:absolute;
  z-index:1;
 
  min-width: 160px;
  min-height: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.navbardropdown button{
  font-size: clamp(0.6em, 4vw, 1.2em);
  text-align:left;
}



.navbardropdowndiv:hover  .navbardropdown{

  display:block;
}

.iconbar>*{
  color:white;
  
  padding:7px;

}
#homebutton{
  font-size: 1.5rem;
}
.loginbar{
 display:block;
 grid-column: 3/4;
}




#exitbutton{
  padding:12px;
  display:grid;
  justify-content: left;
}

#sidebutton button{
  border:none;
  background-color: white;
  display:block;
  text-decoration:none;
 padding:12px;
 width:100%;
 color: black;

  text-align: left;
}



.drpdwnbtn>*{
  float:right;
}



.footerbar{
  display:flex;
  justify-content: center;
  align-items: center;
}
.footerbar>*{
  
  color: white;
  font-size: 1.5rem;
  padding:12px;
  
}
#loginbuttondiv{
  display:flex;
  justify-content: center;
  
  
}

#u1button:hover{
  background-color: #e7e9eb;
}
#topsortinputsdiv{
  display : grid;
  justify-content: center;
  grid-template-rows: 1fr;
  
  
grid-template-areas: "inputdiv" 
                     "buttondiv";

}
#buttondiv{
 display:grid;
 justify-content: center;
 grid-template-rows: 1fr;
 grid-template-areas: "hinzufügen"
                      "sortieren"
                      "reset";

}
#inputdiv{
 display:grid;
 grid-template-rows: 1fr;
 grid-template-areas: "input1" 
                     "input2";
}
#input1{
 width:10rem;
}
#input2{
  width:10rem;

}

@media screen and (min-width: 450px){

  .container{
    grid-template-columns: repeat(8,1fr);
 grid-template-rows: auto auto 1fr auto;

  }
  #header{grid-column:1/9;
grid-row:1/2;}


#footer{
  grid-column: 1/9;grid-row: 4/5;
  
}

#main{
  
 grid-column:2/8;
 grid-row:3/4;
}
#main_main{
  margin-left:20px;
margin-right:20px;


}
.sidebuttondiv>*{
  
  font-size: 17px;

}

#topsortinputsdiv{
  display : grid;
  grid-template-rows: 1fr;
  
  
grid-template-areas: "inputdiv" 
                     "buttondiv";

}
#buttondiv{
display:grid;
justify-content: center;
grid-template-rows: 1fr;
grid-template-areas: "hinzufügen sortieren reset";

}
#inputdiv{
display:grid;
grid-template-rows: 1fr;
grid-template-areas: "input1" 
                     "input2";
}
#input1{
width:10rem;
}
#input2{
  width:10rem;


}
}
@media screen and (min-width: 1200px) {
 
.container{
grid-template-columns: repeat(12,1fr);
 grid-template-rows: auto auto 1fr auto;
}

#header{grid-column:1/13;
grid-row:1/2;
position:sticky;
}


#footer{
  grid-column: 1/13;grid-row: 4/5;
  
}

#main{
  
 grid-column:4/10;
 grid-row:3/4;
}
#main_main{
  margin-left:40px;
margin-right:40px;


}
.sidebuttondiv>*{
  
  font-size: 19px;

}


#topsortinputsdiv{
  display : grid;
  grid-template-rows: 1fr;
  
  
grid-template-areas: "inputdiv buttondiv";

}
#buttondiv{
display:grid;
justify-content: start;
grid-template-rows: 1fr;
grid-template-areas: "hinzufügen sortieren reset";

}
#inputdiv{
display:grid;
grid-template-rows: 1fr;
grid-template-areas: "input1 input2";
}
#input1{
width:10rem;
}
#input2{
  width:10rem;

}


}
    </style>
</head>
<body>
    <div class="container" id="containerid">
<div id="header">
    
    <div class="iconbar">
 
  <a href="#" id="homebutton"><i class="fa fa-home"></i></a> 
  <div class="navbar">
    <div class="navbardropdowndiv">
     <button class="navbardropdownbutton" >CONTENT<i class="fa fa-caret-down"></i></button>
     <div class="navbardropdown">
     
     </div>
      
     </div>

     <div class="navbardropdowndiv">
     <button class="navbardropdownbutton">PLACEHOLDER<i class="fa fa-caret-down"></i></button>
     <div class="navbardropdown">
     
     </div>
      
     </div>
     <div class="navbardropdowndiv">
     <button class="navbardropdownbutton" >PLACEHOLDER<i class="fa fa-caret-down"></i></button>
     <div class="navbardropdown">
     
     </div>
      
     </div>
     <div class="navbardropdowndiv">
     <button class="navbardropdownbutton" >PLACEHOLDER<i class="fa fa-caret-down"></i></button>
     <div class="navbardropdown">
     
     </div>
      
     </div>
    
    </div>

   </div>
   

   <div class="loginbar">
    <button id="loginbutton">Login</button>

   </div>
</div>

<main id="main">

</main>

<div id="footer">
<div class="footerbar">
  <a href="#"><i class="fa fa-envelope"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
</div>
</div>


 <div class="sidenavigation" id="sidenav">
 <div id="exitbutton">
  <a id="sidenavclosebutton" href="#"><i class="fa fa-times"></i></a> 
 </div>
    
 
 <div id="sidebutton" class="sidebuttondiv">
 
<p style="text-align:center">Hallo, Gast</p>
<hr style="width:90%">
<button class="regularButton">Web Inventors</button>
<button class="regularButton">Performanz-Messungen von DOM-Operationen</button>
<button class="regularButton">Rednerliste mit Zeitmessung</button>
<button class="regularButton">TopSort als Web-App</button>
<button class="regularButton">Klammerpaare</button>
<button class="regularButton">Textanalyse</button>
<button class="regularButton">Promise</button>
<button class="regularButton">Async/await</button>
<button class="drpdwnbtn" onclick=""></button>
<div class="dropdown-container"></div>
<button class="drpdwnbtn" onclick=""></button> 
<div class="dropdown-container"></div>
<button class="drpdwnbtn" onclick=""></button>
<div class="dropdown-container"></div>
<button class="regularButton">Tic Tac Toe</button>
<button class="regularButton">Covid19 Fälle in Deutschland</button>
<button class="regularButton">Vue single component</button>
<button class="regularButton">Fragen / Anworten</button>
<button class="regularButton">Funktionen in Javascript</button>

 </div>
  
  
  <div id="sidenavoverlay"></div>
 
</div>


<script>var exports = {};</script>
<script type="module" src="script.js"></script>





</body>
</html>