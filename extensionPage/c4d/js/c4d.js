$(function () {
    $(".hybb-right li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var dataFlag= $(this).attr("data-flag");
        $("."+dataFlag).addClass("imgshow").siblings().removeClass("imgshow");
    })

    $(".right-nav").click(function () {
        $(".right-nav-hide").fadeIn();
    })
    $(".close-nav img").click(function () {
        $(".right-nav-hide").fadeOut();
    })
})