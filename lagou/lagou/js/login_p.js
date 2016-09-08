

var oPassword = document.getElementById("passP");
var flag_p=false;
var defaultValue =null;


oPassword.onfocus=function(){

    if(oPassword.parentNode.lastElementChild.nodeName.toLowerCase()=="span"){
        this.parentNode.removeChild(this.parentNode.lastElementChild);
    }
    utils.removeClass(oPassword,"input_warning");
};
oPassword.onblur=function(){
    if(flag_p){
        if(!oTips){
            oTips=document.createElement("span");
            oTips.id="input_tips_p";
            this.parentNode.insertBefore(oTips,this.nextSibling);
        }
        oTips.className="input_tips";
        oTips.innerHTML="请输入密码";
        utils.addClass(oPassword,"input_warning");
    }
    var regSpace=/\s+/g;
    this.value=this.value.replace(regSpace,"");

    var reg=/^[\s\S]{6,16}$/;
    if(reg.test(this.value)){
        utils.removeClass(oPassword,"input_warning");
        var oTip=document.getElementById("input_tips_p");

        if(oTips) {
            if (oPassword.parentNode.lastElementChild.nodeName.toLowerCase() == "span") {
                this.parentNode.removeChild(this.parentNode.lastElementChild);
            }
        }


    }else{

        var oTips=document.getElementById("input_tips_p");
        if(this.value==this.defaultValue){
            return;
        }else{
            if(!oTips){
                oTips=document.createElement("span");
                oTips.id="input_tips_p";
                this.parentNode.insertBefore(oTips,this.nextSibling);
            }
            oTips.className="input_tips";
            oTips.innerHTML="请输入6-16位密码，字母区分大小写";
            utils.addClass(oPassword,"input_warning");
        }

    }

    flag_p= true;
};

