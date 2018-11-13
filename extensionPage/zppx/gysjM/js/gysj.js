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
    (function() {
        var indexC = 1;
        $(".xy-ctrl li").on("click",function () {
            $(this).addClass("on").siblings().removeClass("on")
            var index = $(this).index();
            if (index!=indexC){
                $(".yx-img img").hide();
                $(".yx-img img").eq(index).stop().fadeIn(500);
                indexC=index
            }
        })
    })();
})
function hideright() {
    $(".rightserve").toggle();
}
