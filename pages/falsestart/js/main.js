function main(col) {

    var i = localStorage.getItem(col);
    localStorage.setItem(col, ++i);
    document.getElementById(col).innerHTML = i;
}
function loader() {
    arr = ["weiss", "rot", "gelb", "blau", "dq"];
    for (i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).innerHTML = localStorage.getItem(arr[i]);
        if (localStorage.getItem(arr[i]) === null) {
            document.getElementById(arr[i]).innerHTML = 0;

        }
    }

}
function reset() {
    localStorage.clear();
    document.getElementById("weiss").innerHTML = 0;
    document.getElementById("rot").innerHTML = 0;
    document.getElementById("gelb").innerHTML = 0;
    document.getElementById("blau").innerHTML = 0;
    document.getElementById("dq").innerHTML = 0;
}
function quart() {
    if (document.getElementById("quart").checked == true) {
        var elem = document.getElementById("container");
        var g = document.getElementById("gDiv");
        var b = document.getElementById("bDiv");
        var r = document.getElementById("reset");
        var q = document.getElementById("dq");
        r.style.gridRowStart = "2";
        r.style.gridRowEndt = "2";
        q.style.gridRowStart = "2";
        q.style.gridRowEnd = "2";

        elem.style.gridTemplateRows = "90% 10%";
        b.style.display = "none";
        g.style.display = "none";
    }
    else {
        var elem = document.getElementById("container");
        var g = document.getElementById("gDiv");
        var b = document.getElementById("bDiv");
        var r = document.getElementById("reset");
        var q = document.getElementById("dq");
        r.style.gridRowStart = "3";
        r.style.gridRowEndt = "3";
        q.style.gridRowStart = "3";
        q.style.gridRowEnd = "3";
        elem.style.gridTemplateRows = "45% 45% 10%";
        g.style.display = "block";
        b.style.display = "block";

    }
}