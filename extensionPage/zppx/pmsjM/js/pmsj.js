$(function () {
    setInterval('autoScroll(".maquee")',3000);
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
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-0.8533333333rem"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}

certifySwiper = new Swiper('.hyzj1 .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    touchRatio : -1,
    autoplay: 3000,
    autoplayDisableOnInteraction : false,
    prevButton: '.hyzj1 .swiper-button-prev',
    nextButton: '.hyzj1 .swiper-button-next',
    pagination: '.hyzj1 .swiper-pagination',
    //paginationClickable :true,
    onProgress: function(swiper, progress) {
        for (i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i);
            var slideProgress = swiper.slides[i].progress;
            modify = 1;
            if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            translate = slideProgress * modify * 14 + 'rem';
            scale = 1 - Math.abs(slideProgress) / 5;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
            }
        }
    },
    onSetTransition: function(swiper, transition) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i)
            slide.transition(transition);
        }

    },
    //处理分页器bug
    onSlideChangeStart: function(swiper) {
        if (swiper.activeIndex == 4) {
            swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
            console.log(swiper.bullets.length);
        }
    }


});

certifySwiper1 = new Swiper('.hyzj2 .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    touchRatio : -1,
    autoplay: 3000,
    prevButton: '.hyzj2 .swiper-button-prev',
    nextButton: '.hyzj2 .swiper-button-next',
    pagination: '.hyzj2 .swiper-pagination',
    //paginationClickable :true,
    onProgress: function(swiper, progress) {
        for (i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i);
            var slideProgress = swiper.slides[i].progress;
            modify = 1;
            if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            translate = slideProgress * modify * 14 + 'rem';
            scale = 1 - Math.abs(slideProgress) / 5;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
            }
        }
    },
    onSetTransition: function(swiper, transition) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides.eq(i)
            slide.transition(transition);
        }

    },
    //处理分页器bug
    onSlideChangeStart: function(swiper) {
        if (swiper.activeIndex == 4) {
            swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
            console.log(swiper.bullets.length);
        }
    }
});

function showSwiper(idName,obj) {
    $(obj).siblings().removeClass("on");
    $(obj).addClass("on");
    $(".hyzj.none").removeClass("none");
    $("#"+idName).addClass("none");

}
function hideright() {
    $(".rightserve").toggle();
}
