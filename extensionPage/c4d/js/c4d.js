$(function () {
    $(".hybb-right li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var dataFlag= $(this).attr("data-flag");
        $("."+dataFlag).addClass("imgshow").siblings().removeClass("imgshow");
    })
})