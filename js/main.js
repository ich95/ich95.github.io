function main(col){
    
    var i = localStorage.getItem(col);
    localStorage.setItem(col,++i);
    document.getElementById(col).innerHTML=i;
}
function dq(){
    var i = localStorage.getItem("dq");
    console.log(i);
    
    localStorage.setItem("dq",++i);
    
    document.getElementById("dq").innerHTML=i;
}

function reset(){
    localStorage.clear();
    document.getElementById("weiss").innerHTML=0;
    document.getElementById("rot").innerHTML=0;
    document.getElementById("gelb").innerHTML=0;
    document.getElementById("blau").innerHTML=0;
    document.getElementById("dq").innerHTML=0;
}