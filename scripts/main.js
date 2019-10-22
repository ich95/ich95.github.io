window.onbeforeunload = function(event)
    {
        return confirm("Confirm refresh");
    };


function init() {
    var zahl = document.getElementById("zahl").value;
    var deck = document.getElementById("deck").value;
    var allgemein = [
        'ČSS',
        'required',
        'ruhe bitte',
        'Zeits ("Size")',
        'grausames Formatieren mit Leerzeichen',
        'zu schnelles Taben zwischen Fenstern',
        'alte dt. Rechtschreibung',
        'faile ("failed")',
        'Sabmit',
        'Freifeld',
        'Ordnung ist wichtig',
        'inteegeer',
        'nutzt tun-Satz',
        'konfliktlösungs-Skill = 0',
        'nutzlose Hinweise',
        'allgemein falsche Aussprache von Wörtern',
        'dämliche rhetorische Frage',
        'Haben das jetzt alle?',
        'Fragen bis hier hin?',
    ];
    var bestOf = [
        'Freifeld',
        'nutzt tun-Satz',
        'konfliktlösungs-Skill = 0',
        'nutzlose Hinweise',
        'allgemein falsche Aussprache von Wörtern',
        'dämliche rhetorische Frage',
        'Haben das jetzt alle?',
        'Fragen bis hier hin?',
        'ruhe bitte',
        'darf ich das bitte erklären'
    ];

    var phpDeck = [
        'fuhit ("Fruit")',
        'Konztraktor ("Constructor")',
        'zis ("this")',
        'dämliche rhetorische Frage',
        'Freifeld',
        'ruhe bitte',
        'Zeits ("Size")',
        'grausames Formatieren mit Leerzeichen',
        'zu schnelles Taben/scrollen zwischen Fenstern',
        'nutzlose Hinweise',
        'allgemein falsche Aussprache von Wörtern',
        'Haben das jetzt alle?',
        'Fragen bis hier hin?',
        'inteegeer',
        'nutzt tun-Satz',
        'Diemenschion ("Dimension")',
        'weit ("width")',
        'noch jemand, bei dem das nicht läuft?',
        
    ];
  

    var classID = 0;
    console.log(zahl);
    var wahl;
    switch(deck){
        case "php": wahl = phpDeck;break;
        case "allgemein": wahl = allgemein;break;
        case "bestof":wahl = bestOf;break;
    }

    switch (zahl) {
        case "9": classID = 3; break;
        case "16": classID = 4; break;
        case "25": classID = 5; break;
        default: classID = 3; break;
    }
    for (f = 0; f < zahl; f++) {
        var div = document.createElement("div");
        div.innerHTML = wahl[Math.floor(Math.random() * wahl.length)];
        div.setAttribute("id", f);
        div.setAttribute("class", "feld" + classID);
        div.setAttribute("onclick", "klasseAendern(" + f + ")");
        document.getElementById('hier').parentNode.insertBefore(div, document.getElementById('hier'));


    }

}

function klasseAendern(a) {


    document.getElementById(a).classList.toggle("rot");





}