var zoomw = 100;
var zoomh = 70;
counter = 1;

document.getElementById("bg1").addEventListener("click", function(){
    counter = 1;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
})

document.getElementById("bg2").addEventListener("click", function(){
    counter = 2;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
})

document.getElementById("bg3").addEventListener("click", function(){
    counter = 3;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
})

document.getElementById("bg4").addEventListener("click", function(){
    counter = 4;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
})

document.getElementById("ch1").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
})

document.getElementById("ch2").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
})

document.getElementById("ch3").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
})

document.getElementById("zoom").addEventListener("click", function(){
    document.getElementById("zoomcontrols").style.display = "block";
})

document.getElementById("plus").addEventListener("click", function(){
    zoomw += 10;
    zoomh += 7;
    document.getElementById("zoom").style.width = zoomw+"%";
    document.getElementById("zoom").style.height = zoomh+"%";
})

document.getElementById("minus").addEventListener("click", function(){
    zoomw -= 10;
    zoomh -= 7;
    document.getElementById("zoom").style.width = zoomw+"%";
    document.getElementById("zoom").style.height = zoomh+"%";
})

document.getElementById("next").addEventListener("click", function(){
    counter += 1
    if (counter == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
    }
    if (counter == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
    }
    if (counter == 4) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
    }
    if (counter > 4) {
        counter = 1;
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
    }
})

document.getElementById("prev").addEventListener("click", function(){
    counter -= 1
    if (counter == 1) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
    }
    if (counter == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
    }
    if (counter == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
    }
    if (counter == 0) {
        counter = 4;
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
    }
})