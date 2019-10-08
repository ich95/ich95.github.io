var i = 1;

function NeuesElement(){
    //neues Element erstellen
    //neues div Element generieren

    var btn = document.createElement("div");
    btn.setAttribute("id", i);
    document.body.appendChild(btn);
    btn.innerHTML="("+i+") " + document.getElementById("new").value;
    i = i + 1;
    if(document.getElementById("new").value=="69"){
        console.log("NICEEEEEEE"); 
    }
    if(document.getElementById("new").value=="420"){
        console.log("Blaze it"); 
    }
    var vorder = currentDiv= document.getElementById("neue-Elemente");
    document.body.insertBefore(btn, vorder);
}

function Delete(){
    var element = document.getElementById("del").value;
    var loeschen = document.getElementById(element);
    loeschen.parentNode.removeChild(loeschen);
    //console.log(element);
    //if loeschen fail -> Alert ("wähle was richtiges, Dummkopf!")
    
}