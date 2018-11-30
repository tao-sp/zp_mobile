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
    /*导航*/
    (function() {
        $(".sjys-nav-ul li").on("mouseenter", function () {
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
        }).on("mouseleave", function () {
            $(this).removeClass("on")
            $("#home").addClass("on")
        });
        $(".sjys-nav-ul li.qtzynav").on("mouseenter", function () {
            $(".qitz").stop().animate({"height":195,"bottom":-194},500)
        }).on("mouseleave", function () {
            $(".qitz").stop().animate({"height":0,"bottom":0},500)
        });
        $(".qitz").on("mouseenter", function () {
            $(".qitz").stop().animate({"height":195,"bottom":-194},500)
        }).on("mouseleave", function () {
            $(".qitz").stop().animate({"height":0,"bottom":0},500)
        });
        /*导航*/
        $(".majors li").hover(function () {
            var index = $(".majors li").index(this);
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".courses-wrapper ul").removeClass("on");
            $(".courses-wrapper ul:eq("+index+")").addClass("on");
        })
    })();

    $(".szll-list li").hover(function () {
        var index =  $(this).index();
        var left = index*184+40;
        $(".js-slide").stop().animate({
            left:left
        })
        $(".szll-info-list li").hide();
        $(".szll-info-list li").eq(index).show();

    })


});
