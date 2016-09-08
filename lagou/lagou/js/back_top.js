var loginToolBar = document.getElementById("loginToolBar");
var footer = document.getElementById("footer");
var backtop=document.getElementById("backtop");
var product=document.getElementById("product-fk");
backtop.onclick = function () {
    loginToolBar.style.bottom=0;
    this.style.display = "none";
    window.onscroll = null;
    var duration = 500;
    var distance = utils.win('scrollTop');
    var interval = 10;
    var step = (distance / duration) * interval;
    var timer = window.setInterval(function () {
        var scrollTop = utils.win('scrollTop');
        if (scrollTop <= 0) {
            window.clearInterval(timer);
            window.onscroll = showBtn;
            return;
        }
        scrollTop -= step;
        utils.win('scrollTop', scrollTop);
    }, interval);

};

window.onscroll = showBtn;
function showBtn() {
    var winScrollTop = utils.win('scrollTop');
    var screenHeight = utils.win('clientHeight');
    if (winScrollTop - screenHeight > 0){
        backtop.style.display = "block";
}
else
{
    backtop.style.display = "none";
}
    var footerTop=utils.offset(footer);
    var winBottomDisBodyTop = utils.win("clientHeight") + utils.win("scrollTop");
    var footBoxTopDisBodyTop =footerTop.top;
    var footBoxBottomDisBodyTop =footerTop.top+footer.offsetHeight;

    if(winBottomDisBodyTop<footBoxTopDisBodyTop){
        loginToolBar.style.bottom=0;
        backtop.style.bottom=140+"px";
        product.style.bottom=80+"px";
    }else if((winBottomDisBodyTop>footBoxTopDisBodyTop)&&(winBottomDisBodyTop<footBoxBottomDisBodyTop)){
        loginToolBar.style.bottom=(winBottomDisBodyTop-footBoxTopDisBodyTop)+"px";
        backtop.style.bottom=(winBottomDisBodyTop-footBoxTopDisBodyTop+140)+"px";
        product.style.bottom=(winBottomDisBodyTop-footBoxTopDisBodyTop+80)+"px";
    }else{
        loginToolBar.style.bottom=68+"px";
        backtop.style.bottom=208+"px";
        product.style.bottom=148+"px";
    }
}

