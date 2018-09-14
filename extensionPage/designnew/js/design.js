function navOpen() {
    $(".design-nav-hide").fadeIn();
    $(".design-nav-content").animate({right:0});
}
function navClose() {
    $(".design-nav-hide").fadeOut();
    $(".design-nav-content").animate({right:"-100%"});
}
function hideright() {
    $(".rightserve").toggle();
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
    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    if(!$("#backTop").length){return;}
    $("#backTop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
})
function showSwiper(num,obj) {
   $(obj).addClass("on").siblings().removeClass("on");
    $(".design-course-content").hide();
    $(".design-course-content-"+num).animate({
        "left":0
    });
    $(".design-course-content-"+num).fadeIn();

}