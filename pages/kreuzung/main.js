function main() {
    reset();
    val = document.getElementById("strecke").value;
    //console.log(val);

    console.log(document.getElementById("Quartett").checked);
    if (document.getElementById("Quartett").checked == true) {

        document.getElementById("qin").style.display = "block";
        document.getElementById("qout").style.display = "block";

        for (i = 1; i <= val; i++) {
            addItem(i, "qin", "qi");
            addItem(i, "qout", "qo");
        }
    } else {

        document.getElementById("qin").style.display = "none";
        document.getElementById("qout").style.display = "none";
    }
    for (i = 1; i <= val; i++) {
        addItem(i, "in", "i");
        addItem(i, "out", "o");
    }
    count = document.getElementById("in").childElementCount;
    elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = 95 / count + "%";

    }
}

function reset() {
    document.getElementById("in").innerHTML = "";
    document.getElementById("out").innerHTML = "";
    document.getElementById("qin").innerHTML = "";
    document.getElementById("qout").innerHTML = "";

}

function addItem(nummer, list, pre) {
    var ul = document.getElementById(list);
    wert = pre + nummer;
    var li = document.createElement("li");
    li.setAttribute('id', wert);
    li.setAttribute("onclick", "change(" + wert + ")");
    li.setAttribute("class", "runde");
    li.appendChild(document.createTextNode("-"));
    ul.appendChild(li);
}


function change(nummer) {
    console.log(nummer.id);
    elem = document.getElementById(nummer.id);

    switch (elem.innerHTML) {
        case "I":
            elem.innerHTML = "O";
            elem.className = "out";
            break;
        case "O":
            elem.innerHTML = "-";
            elem.className = "runde";
            break;
        case "-":
            elem.innerHTML = "I";
            elem.className = "in";
            break;
        default:
            break;
    }

}
