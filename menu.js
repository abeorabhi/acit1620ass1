document.getElementById("open").addEventListener("click", function(){
    document.getElementById("menu").style.left = "0px";
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("menu").style.left = "-110px";
})

document.getElementById("makebg").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
})

document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "none";
})

document.getElementById("show").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
})

document.getElementById("hide").addEventListener("click", function(){
    document.getElementById("app1").style.display = "none";
})