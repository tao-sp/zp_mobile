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

    $(".right-nav").click(function () {
        $(".right-nav-hide").fadeIn();
    })
    $(".close-nav img").click(function () {
        $(".right-nav-hide").fadeOut();
    })

    $(".click-down").click(function () {
        $(this).children(".down").toggle();
        $(this).next().toggle("slow")
    })
})
function hideright() {
    $(".rightserve").toggle();
}
