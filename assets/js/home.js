var mySwiper = new Swiper('.home-header .swiper-container', {
    autoplay: true,//可选选项，自动滑动
    pagination: {
        el: '.home-header .swiper-pagination',
    }
})
$(function () {
    $(".home-nav-menu").click(function () {
        $(".home-nav-content").animate({right:"0"});
    })
    $(".hone-nav-close").click(function () {
        $(".home-nav-content").animate({right:"-100%"});
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
$(".curriculum-system-switch .hd li").click(function () {
    var liIndex = $(this).index();
    $(this).siblings().removeClass('on');
    $(this).addClass("on");
    $(".curriculum-system-switch .bd li").hide();
    $(".curriculum-system-switch .bd li:eq("+liIndex+")").show();
})



jQuery(".sideMenu").slide({titCell:"h3", targetCell:"ul",defaultIndex:1,effect:"slideDown",delayTime:300,trigger:"click",defaultPlay:false});
