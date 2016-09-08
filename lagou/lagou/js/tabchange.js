var job_tab=document.getElementById("job_tab");
var pLis=job_tab.getElementsByTagName("li");
var hotList=document.getElementById("hotList");
var oDivs=utils.children(hotList,"div");


for(var i=0;i<pLis.length;i++){
    !function(i){
        var oLi=pLis[i];
        oLi.onclick=function() {
     tabchange(i);
        }
    }(i)
}
function tabchange(n){
    for(var k=0;k<pLis.length;k++){
         pLis[k].className="";
        oDivs[k].className="position_list";
    }
    pLis[n].className="current1";
    oDivs[n].className="position_list init_joblist"
}
