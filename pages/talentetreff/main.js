

function count(param) {
    document.getElementById("zsm").innerHTML = "";
    var b = localStorage.getItem(param);
    c = 0;
    localStorage.setItem(param, ++b);
    console.log(b);



    for (var i = 0; i < localStorage.length; i++) {
        c += parseInt(localStorage.getItem(localStorage.key(i)));
        document.getElementById("zsm").innerHTML+= localStorage.key(i)+"\t"+localStorage.getItem(localStorage.key(i))+"<br>";

    }
    console.log("c: " + c);
    document.getElementById("summe").innerHTML = c*0.5;
}



function reset() {
    localStorage.clear();
}