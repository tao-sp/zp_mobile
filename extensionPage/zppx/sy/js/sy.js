$(function () {
    /*悬浮窗函数*/
    (function () {
        var oFloat = $('#float-ad'),
            oLinks = oFloat.find('.float-interaction .interac-item'),
            oForm1 = oFloat.find('.float-frm-wrapper1'),
            oForm = oFloat.find('.float-frm-wrapper'),
            oQQ = oFloat.find('.float-qq-wrapper'),
            oWeixin = oFloat.find('.float-weixin-wrapper');
        oForm.hide();
        oWeixin.hide();
        oQQ.hide();
        if (!oFloat.length) {
            return;
        }
        oLinks.on({
                mouseenter: function () {
                    var index = $(this).index();
                    if (index === 0) {
                        oForm.stop().show(500);
                    } else if (index === 2) {
                        oQQ.stop().show(500);
                    } else if (index === 3) {
                        oWeixin.stop().show(500);
                    }
                    $(this).find('.link').addClass('on').end().siblings().children('.link').removeClass('on');
                },
                mouseleave: function () {
                    var index = $(this).index();
                    if (index === 0) {
                        oForm.stop().hide(500);
                    }  else if (index === 2) {
                        oQQ.stop().hide(500);
                    } else if (index === 3) {
                        oWeixin.stop().hide(500);
                    }
                    $(this).find('.link').removeClass('on');
                }
            }
        );
    })();
    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    (function() {
        if(!$("#backTop").length){return;}
        $("#backTop").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    })();

    $(".sz-ctrl-list li").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".sz-info-lsit li").hide();
        $(".sz-info-lsit li").eq(index).show();
    })

    certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: 3000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
        //paginationClickable :true,
        onProgress: function(swiper, progress) {
            for (i = 0; i < swiper.slides.length; i++) {
                var slide = swiper.slides.eq(i);
                var slideProgress = swiper.slides[i].progress;
                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 175 + 'px';
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
        onSlideChangeStart: function(swiper) {
            if (swiper.activeIndex == 4) {
                swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
                console.log(swiper.bullets.length);
            }
        }
    });





});

