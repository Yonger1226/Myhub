
var oName =document.getElementById("nameN");
var defaultValue =null;
var flag=false;

oName.onfocus=function(){

    if(oName.parentNode.lastElementChild.nodeName.toLowerCase()=="span"){
        this.parentNode.removeChild(this.parentNode.lastElementChild);
    }
    utils.removeClass(oName,"input_warning");

};
oName.onblur=function(){
    if(flag){
        if(!oTip){
            oTip=document.createElement("span");
            oTip.id="input_tips";
            this.parentNode.insertBefore(oTip,this.nextSibling);
        }
        oTip.className="input_tips";
        oTip.innerHTML="请输入已验证手机/邮箱";
        utils.addClass(oName,"input_warning");

    }
    var regSpace=/\s+/g;
    this.value=this.value.replace(regSpace,"");

    var reg=/^[1][3578]\d{9}$/;
    if(reg.test(this.value)){
        utils.removeClass(oName,"input_warning");
        var oTip=document.getElementById("input_tips");

            if(oTip) {
                if (oName.parentNode.lastElementChild.nodeName.toLowerCase() == "span") {
                    this.parentNode.removeChild(this.parentNode.lastElementChild);
                }
            }
    }else{
        var oTip=document.getElementById("input_tips");
        if(this.value==this.defaultValue){
            return;
        }else{
            if(!oTip){
                oTip=document.createElement("span");
                oTip.id="input_tips";
                this.parentNode.insertBefore(oTip,this.nextSibling);
            }
            oTip.className="input_tips";
            oTip.innerHTML="请输入有效的手机/邮箱";
            utils.addClass(oName,"input_warning");
        }
    }

    flag= true;
};





//邮箱  /\w+@\w+\.\w/


