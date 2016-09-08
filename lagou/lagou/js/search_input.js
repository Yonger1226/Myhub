var search_input = document.getElementById("search_input");
var searchList = document.getElementById("searchList");
search_input.onfocus = search_input.onkeyup = function () {
     search_input.style.color="rgb(51,51,51)";
    search_input.placeholder="搜索职位、公司或地点";
    var val = this.value.replace(/(^ +| +$)/g, "");
    searchList.style.display = val.length > 0 ? "block" : "none";
};
search_input.onblur=function(){
    search_input.style.color="rgb(153,153,153)";
    search_input.placeholder="视觉设计";
};
document.body.onclick = function (e) {
    e = e || window.event;
    e.target = e.target || e.srcElement;
    if (e.target.tagName.toLocaleLowerCase() == "a" && e.target.parentNode.parentNode.parentNode.id == "searchList") {
        searchList.style.display = "none";
        search_input.value = e.target.innerHTML;
        return;
    }
    searchList.style.display="none";
};
search_input.onclick = function (e) {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}
