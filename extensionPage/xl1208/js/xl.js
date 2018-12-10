$(function () {
    $(".bottom-list li").on('click',function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
})
function xsmOpen(num) {
    $(".xsm-fixed").fadeIn();
    $(".xsm").animate({
        "bottom":"0"
    })
    $(".zxj-title").hide();
    $(".zxj-title"+num).show();
    $(".xsm").removeClass("xsm1").removeClass("xsm2");
    $(".xsm").addClass("xsm"+num);
}
function xsmClose() {
    $(".xsm-fixed").fadeOut();
    $(".xsm").animate({
        "bottom":"-100%"
    })
}