var mainNavs=document.getElementById("mainNavs");
var mainList=utils.children(mainNavs,"div");
for(var i=0;i<mainList.length;i++){
    !function(i){
        var curDiv=mainList[i];
       /* curDiv["firDiv"]=utils.firstChild(curDiv);*/
        curDiv["curDn"]=utils.lastChild(curDiv);
        curDiv.onmouseover=function(){
            this["curDn"].style.display="block";
            curDiv.className="current";
        };
        curDiv.onmouseout=function(){
            this["curDn"].style.display="none";
            curDiv.className='';
        }
    }(i)


}
