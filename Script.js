console.log("hey");
var out = false;
document.querySelector("#Hamburger").addEventListener("click", function(){
    var borgar = document.querySelector("#burgor");
    if(out){ borgar.style.left = "100vw";
    borgar.style.width = 0;
    out = false;
}
    
    else {borgar.style.left = 0;
    borgar.style.width = "100vw";
    out = true;
}
}) ;


