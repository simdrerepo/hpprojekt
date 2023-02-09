import { resetMainbereich } from "./script.js";
export {setup_TextAnalyse};
import { fetchTextData } from "./script.js";
import { elementFactory } from "./script.js";
import { addToTable } from "./script.js";

const setup_TextAnalyse=async():Promise<void>=>{

      const stopwörter:string = await fetchTextData('./stopwords-de.txt');
      const [main,main_header,main_main] = resetMainbereich();

     let Plagiatsresolution:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"plagiatresolution"},"");
     let header:HTMLHeadElement = elementFactory("div",{},"",'<h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2>');
     var ergebnisdiv:HTMLDivElement = <HTMLDivElement>elementFactory("div",{},"display:flex; justify-content:space-evenly; flex-wrap:wrap;");
     var analysecontainer:HTMLDivElement = <HTMLDivElement>elementFactory("div",{id:"ergebnisdiv"},"");
    
     let content:HTMLDivElement = <HTMLDivElement>elementFactory("div",{class:"content"},"");
     content.innerHTML =  '<div class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full"><div class="field field-name-field-pcf-content"><div class="entity entity-paragraphs-item paragraphs-item-para-text"><div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden"><p><strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p><p>In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die HochschuleBonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmeneinzuleiten.</p> <p> 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p><p> 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohlüber den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- undDenkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p><p>3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p><p> Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p><p><strong>Eckpunkte zur Plagiatsprüfung</strong></p>          <p>Der Senat empfiehlt:</p><p> 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss feste Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p><p>2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p><p>3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p><p> 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p> <p> 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p> <p> 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p><p>  7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule  stichprobenartige Plagiatsprüfungen vor.</p> <p>  <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p> <p>  Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p><p> "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p></div></div></div></div>';
     let brschrft:HTMLHeadElement = elementFactory("h1",{},"","Textanalyse mit filter-map-reduce");
     Plagiatsresolution.appendChild(header);
     Plagiatsresolution.appendChild(content);
     main_header.appendChild(brschrft);
     main_main.appendChild(analysecontainer);
     main_main.appendChild(Plagiatsresolution);
      let stops:string[] = stopwörter.split(/\r?\n/);
      let stoparray2d = new Array();
      
      let alltext:string = main.textContent!.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll(":","");
      
     let alltextsplitted:string[] = alltext.split(" ");
     
     for(let i=0;i<stops.length;i++){
      stoparray2d.push([stops[i],alltextsplitted.reduce((count, num) =>  num === stops[i] ? count + 1 : count, 0)]);
     }
     let filtered:string[][] = stoparray2d.filter(x=>x[1]>=10);
    
     let tabelle:HTMLTableElement = document.createElement("table");
     tabelle.style.textAlign = "center";
     addToTable(tabelle,filtered,['<b>Stopwort</b>','<b>Anzahl</b>']);
   
   
    
     ergebnisdiv.appendChild(tabelle);
    
    
      
    
     let Plagiatsresolutionref = document.getElementById("plagiatresolution")!;
     
     let all:Element[] = Array.from(Plagiatsresolutionref.getElementsByTagName("*"));
     let fil = all.map((item:any)=>item=item.nodeName.toLowerCase());
     let table:HTMLTableElement = document.createElement("table");
     let tagset:Set<string> = new Set();
     let array2d = new Array();
     fil.forEach((x)=>tagset.add(x));
     for(let i=0;i<tagset.size;i++){array2d.push([Array.from(tagset)[i],fil.reduce((count, num) => num === Array.from(tagset)[i] ? count + 1 : count, 0)]);}
    
     let mostusedtag = array2d[0];
     for(let i=0;i<array2d.length;i++){if(array2d[i][1]>mostusedtag[1]){mostusedtag = array2d[i];}}
     
     table.style.textAlign = "center";
     array2d.filter(ar=>ar[0]="<"+ar[0]+">");
     addToTable(table,array2d,['<b>HTML-Tag</b>','<b>Anzahl</b>']);
     
     
     
  
     setTimeout(()=>ergebnisdiv.appendChild(table),100);
      setTimeout(()=>analysecontainer.appendChild(ergebnisdiv),100);
     
    }