var num = 0
function newLine(){
    num++;
    if (num%2 == 0)
        document.getElementById("title").innerHTML = "YX\u2665 (click me)";
    else
        document.getElementById("title").innerHTML = "YX (click me)";
    
}

