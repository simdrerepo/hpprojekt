import { resetMainbereich } from "./script";


export const fragenAntworten =  ():void=>{
   (async ()=>{
    //const [main,main_header,main_main] = resetMainbereich();
    const response = await fetch('./fragen.json');
    const data = await response.json();
    
    

   })();


}
