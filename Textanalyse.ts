import { resetMainbereich } from "./script.js";
export {setup_TextAnalyse};
import { fetchJsonData } from "./script.js";

const setup_TextAnalyse=async():Promise<void>=>{

    
      let response = await fetchJsonData('./stopwords-de.txt');
     
      const stopwörter:string = await response.text(); 
      const mainref:HTMLElement = document.getElementById("main")!;
      const [main,main_header,main_main] = resetMainbereich();
     
     let Plagiatsresolution = document.createElement("div");
     Plagiatsresolution.setAttribute("id","plagiatresolution");
     let header = document.createElement("header");
    
     var ergebnisdiv = document.createElement("div");
     ergebnisdiv.style.display = "flex";
    
     ergebnisdiv.style.justifyContent ="space-evenly";
     ergebnisdiv.style.flexWrap = "wrap";
     var analysecontainer = document.createElement("div");
     ergebnisdiv.setAttribute("id","ergebnisdiv");
    
     header.innerHTML = '<h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2>';
     let content = document.createElement("div");
     content.setAttribute("class","content");
     content.innerHTML =  '<div class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full"><div class="field field-name-field-pcf-content"><div class="entity entity-paragraphs-item paragraphs-item-para-text"><div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden"><p><strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p><p>In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die HochschuleBonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmeneinzuleiten.</p> <p> 1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p><p> 2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohlüber den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- undDenkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p><p>3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p><p> Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p><p><strong>Eckpunkte zur Plagiatsprüfung</strong></p>          <p>Der Senat empfiehlt:</p><p> 1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss feste Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p><p>2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p><p>3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p><p> 4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p> <p> 5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p> <p> 6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p><p>  7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule  stichprobenartige Plagiatsprüfungen vor.</p> <p>  <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p> <p>  Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p><p> "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p></div></div></div></div>';;
     let ueberschriftcontainer = document.createElement("div");
     let brschrft = document.createElement("h1");
     brschrft.appendChild(document.createTextNode("Textanalyse mit filter-map-reduce"));
     ueberschriftcontainer.appendChild(brschrft);
    
     Plagiatsresolution.appendChild(header);
     Plagiatsresolution.appendChild(content);
     main_header.appendChild(ueberschriftcontainer);
     main_main.appendChild(analysecontainer);
     main_main.appendChild(Plagiatsresolution);
      let stops = stopwörter.split(/\r?\n/);
      let stoparray2d:any[] = new Array();
      
      let alltext = main.textContent!.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll(":","");
      
     let alltextsplitted= alltext.split(" ");
     
     for(let i=0;i<stops.length;i++){
      stoparray2d.push([stops[i],alltextsplitted.reduce((count, num) =>  num === stops[i] ? count + 1 : count, 0)]);
     }
     let filtered = stoparray2d.filter(x=>x[1]>=10);
     let tabelle = document.createElement("table");
     tabelle.style.textAlign = "center";
     let row = tabelle.insertRow(-1);
     let column = row.insertCell(0);
     column.innerHTML = '<b>Stopwort</b>';
     column = row.insertCell(1);
     column.innerHTML = '<b>Anzahl</b>';
     filtered.forEach(x=>{let row =tabelle.insertRow(-1);
     let column = row.insertCell(0);
     column.appendChild(document.createTextNode(x[0]));
     column = row.insertCell(1);
     column.appendChild(document.createTextNode(x[1]));
    
     if(filtered.indexOf(x)%2==0){
        row.style.backgroundColor = "#dddd";
      }
     });
    
     ergebnisdiv.appendChild(tabelle);
    
    
      
    
     let Plagiatsresolutionref = document.getElementById("plagiatresolution")!;
     let all = Array.from(Plagiatsresolutionref.getElementsByTagName("*"));
     let fil = all.map((item:any)=>item=item.nodeName.toLowerCase());
    
    
     let table = document.createElement("table");
    
     let tagset = new Set();
     let array2d = new Array();
     fil.forEach((x)=>tagset.add(x));
     for(let i=0;i<tagset.size;i++){array2d.push([Array.from(tagset)[i],fil.reduce((count, num) => num === Array.from(tagset)[i] ? count + 1 : count, 0)]);}
    
     let mostusedtag = array2d[0];
     for(let i=0;i<array2d.length;i++){if(array2d[i][1]>mostusedtag[1]){mostusedtag = array2d[i];}}
     table.style.textAlign = "center";
     let reihe = table.insertRow(-1);
     let zelle = reihe.insertCell(0);
     zelle.innerHTML = '<b>HTML-Tag</b>';
     zelle = reihe.insertCell(1);
     zelle.innerHTML = '<b>Anzahl</b>';
    
     for(let i=0;i<array2d.length;i++){
     let reihe = table.insertRow(-1);
     let zelle = reihe.insertCell(0);
     zelle.appendChild(document.createTextNode("<"+array2d[i][0]+">"));
     zelle = reihe.insertCell(1);
     zelle.appendChild(document.createTextNode(array2d[i][1]));
     if(i%2==0){reihe.style.backgroundColor = "#dddd";}
    
    
     } 
     setTimeout(()=>ergebnisdiv.appendChild(table),100);
      setTimeout(()=>analysecontainer.appendChild(ergebnisdiv),100);
     
    }