$(function () {
    $(".right-nav").click(function () {
        $(".right-nav-hide").fadeIn();
    })
    $(".close-nav img").click(function () {
        $(".right-nav-hide").fadeOut();
    })

    $(".wqkc-list li").click(function () {
        $(this).children(".wqkc-list-hide").fadeToggle();
    })

    $(".sjms-list li img").click(function () {
        $(this).next(".sjms-list-hide").animate({
            top:0
        },600)
        $(this).parent().siblings().children(".sjms-list-hide").animate({
            top:"4.3733333333rem"
        },600)
    })
        $(".sjms-list-hide").click(function () {
            $(this).animate({
                top:"4.3733333333rem"
            },600)
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
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-1.4933333333rem"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
