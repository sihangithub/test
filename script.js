var num = 0
function newLine(){
    num++;
    if (num%2 == 0)
        document.getElementById("title").innerHTML = "New Line";
    else
        document.getElementById("title").innerHTML = "lol";
    
}

