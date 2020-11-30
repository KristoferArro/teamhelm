// Funktsiooni "sorteeri" koostamisel kasutasime linki: https://www.w3schools.com/howto/howto_js_sort_table.asp 
function sorteeri(n) {
  // Funktsioonile muutujad
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sorteeritav");
    switching = true;
    // Mis järjekorras sortimine toimub, algselt "asc" ehk kasvavas järjekorras (ascending)
    dir = "asc"; 
    while (switching) {
      // Algselt tuleb öelda, et vahetusi pole tehtud.
      switching = false;
      rows = table.rows;
      // Tsükkel käib läbi kõik read peale esimese
      for (i = 1; i < (rows.length - 1); i++) {
        // Algul ridasid ei vaheta
        shouldSwitch = false;
        // Võtab elemendi reast ja siis ka elemendi järgmisest reast, et neid omavahel võrrelda
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        // Kontrollib, kas read peaksid kohad vahetama, samuti kontrollib, kas sorditakse kasvavas (ascending) või kahanevas (descending) järjekorras
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      // Kui vahetus peaks toimuma, vahetab read ja jätab meelde, et vahetus on tehtud
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        // Kui ühtegi vahetust ei toimunud, muudab sortimise järjekorda (asc/desc ehk kasvavas/kahanevas järjekorras)
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    // Paneb peale sortimist esimesse veergu õige järjekorranumbri
    for (let i=1; i < (rows.length); i++) {
        table.rows[i].firstChild.innerHTML = i + "."
    }
  }