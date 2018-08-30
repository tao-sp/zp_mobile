function navOpen() {
    $(".design-nav-hide").fadeIn();
    $(".design-nav-content").animate({right:0});
}
function navClose() {
    $(".design-nav-hide").fadeOut();
    $(".design-nav-content").animate({right:"-100%"});
}

$(function () {
    /*荣誉资质*/
    var aLi = $(".zpry a");
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;//添加索引
        aLi[i].onclick = function () {
            $(".zpry-on").removeClass("zpry-on");
            this.className = 'zpry-on';
            // alert(this.index);//弹出索引
            $(".showswiper").removeClass("showswiper");
            $(".zp-honor div.hideswiper:eq("+this.index+")").addClass("showswiper");
        }
    }
})