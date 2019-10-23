
window.onbeforeunload = function (event) {
    return confirm("Confirm refresh");
};


function init() {
    var zahl = document.getElementById("zahl").value;
    var deck = document.getElementById("deck").value;
    var que = document.querySelectorAll("div.feld3, div.feld4,div.feld5");
    var lis = document.querySelectorAll("li.li");
console.log(lis);

    for (i = 0; i < que.length; i++) {
        document.getElementById(i).remove();
    }
    for (f = 0; f < lis.length; f++) {
        document.getElementById("li"+f).remove();
    }


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
        'Satzbau des Todes of Doom',
        'konfliktlösungs-Skill = 0',
        'nutzlose Hinweise',
        'allgemein falsche Aussprache von Wörtern',
        'dämliche rhetorische Frage',
        'Haben das jetzt alle?',
        'Fragen bis hier hin?',
    ];
    var bestOf = [
        'Freifeld',
        'Satzbau des Todes of Doom',
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
        'Satzbau des Todes of Doom',
        'Diemenschion ("Dimension")',
        'weit ("width")',
        'noch jemand, bei dem das nicht läuft?',

    ];


    var classID = 0;
    console.log(zahl);
    var wahl;
    switch (deck) {
        case "php": wahl = phpDeck; break;
        case "allgemein": wahl = allgemein; break;
        case "bestof": wahl = bestOf; break;
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
    for (i = 0; i < wahl.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("id", "li"+i);
        li.setAttribute("class","li");
        li.innerHTML = wahl[i];
        document.getElementById("deckInfo").parentNode.insertBefore(li, document.getElementById("deckInfo"));
    }
    if (document.getElementById("c").checked == true) {

        var run = 0;
        switch (zahl) {
            case "9": run = 1; break;
            case "16": run = 2; break;
            case "25": run = 3; break;
            case 9: run = 1; break;
            case 16: run = 2; break;
            case 25: run = 3; break;
        }
        for (i = 1; i <= run; i++) {
            document.getElementById(Math.floor(Math.random(zahl))).innerHTML = "Freifeld!";
        }

    }
}

function klasseAendern(a) {
    document.getElementById(a).classList.toggle("selected");
}