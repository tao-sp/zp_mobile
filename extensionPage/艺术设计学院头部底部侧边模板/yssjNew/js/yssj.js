$(function () {
    $(".right-nav").click(function () {
        $(".right-nav-hide").fadeIn();
    })
    $(".close-nav img").click(function () {
        $(".right-nav-hide").fadeOut();
    })

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

function hideright() {
    $(".rightserve").toggle();
}
