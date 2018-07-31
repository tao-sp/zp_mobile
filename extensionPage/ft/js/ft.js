$(function () {
    $("#ba-nav li").hover(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    },function () {
        $("#ba-nav li").removeClass("on");
        $(".currentPage").addClass("on");
    })
})