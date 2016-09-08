var suggestCity = document.getElementById("suggestCity");
var changeCity_btn = document.getElementById("changeCity_btn");
var cboxOverlay = document.getElementById("cboxOverlay");
var colorbox = document.getElementById("colorbox");
var cboxClose = document.getElementById("cboxClose");
var changeCityBox = document.getElementById("changeCityBox");



changeCity_btn.onclick =function(){
    cboxOverlay.style.display="block";
    colorbox.style.display ="block";

};

cboxClose.onclick=function(){
    cboxOverlay.style.display="none";
    colorbox.style.display ="none";
};

changeCityBox.onclick=function(e){
    e=e||window.event;
    var tar = e.target|| e.srcElement;
    if(tar.tagName.toUpperCase()==="A"){
        cboxOverlay.style.display="none";
        colorbox.style.display ="none";
        suggestCity.firstElementChild.innerHTML= tar.innerHTML;
    }
};


window.onload =function(){
    cboxOverlay.style.display="block";
    colorbox.style.display ="block";
};






