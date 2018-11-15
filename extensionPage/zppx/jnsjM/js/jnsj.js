$(function () {
    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    if(!$("#backTop").length){return;}
    $("#backTop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
    $(".xyzp .btns a").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index =  $(this).index();
        $(".img-group img").hide().eq(index).fadeIn();
    })
})
function hideright() {
    $(".rightserve").toggle();
}
