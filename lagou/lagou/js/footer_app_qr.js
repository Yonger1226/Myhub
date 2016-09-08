
var app=document.getElementById("footer_app");
app["curImg"]=utils.lastChild(app);
var qr=document.getElementById("footer_qr");
qr["curImg"]=utils.firstChild(qr);
app.onmouseenter=function(){
    this["curImg"].style.display="block";
};
app.onmouseleave=qr.onmouseout=function(){
    this["curImg"].style.display="none";
};



qr.onmouseover=function(){
    this["curImg"].style.display="block";
};
qr.onmouseout=function(){
    this["curImg"].style.display="none";
};

