console.log("hey");
var out = false;
document.querySelector("#Hamburger").addEventListener("click", function(){
    
    if(out){ document.querySelector("#burgor").style.left = "100vw";
    out = false;
}
    
    else {document.querySelector("#burgor").style.left = 0;
    out = true;
}
}) ;


