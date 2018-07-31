$(function () {
    /*悬浮窗函数*/
    (function () {
        var oFloat = $('#float-ad'),
            oLinks = oFloat.find('.float-interaction .interac-item'),
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
                    } else if (index === 2) {
                        oQQ.stop().hide(500);
                    } else if (index === 3) {
                        oWeixin.stop().hide(500);
                    }
                    $(this).find('.link').removeClass('on');
                }
            }
        );

        /*表单的placeholder属性处理*/
        (function () {
            //判断是否支持placeholder
            function isPlaceholer() {
                return "placeholder" in document.createElement('input');
            }

            //不支持的代码
            if (!isPlaceholer()) {
                var oGroup = $('.form-group');
                oGroup.each(function () {
                    var oSpan = $(this).children('span'),
                        oIpt = $(this).children('input[placeholder]'),
                        initVal = oIpt.attr('placeholder');
                    oSpan.show();

                    if (oIpt.val() !== "") {
                        oSpan.hide();
                    } else {
                        oSpan.show();
                    }
                    oSpan.on('click', function () {
                        $(this).hide();
                        oIpt.val('').focus();
                    });
                    oIpt.blur(function () {
                        if (oIpt.val() !== "") {
                            oSpan.hide();
                        } else {
                            oSpan.show();
                        }
                    });
                });
            }
        })();

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

    $("#ba-nav li").hover(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    },function () {
        $("#ba-nav li").removeClass("on");
        $(".currentPage").addClass("on");
    })

    $(".classification li").click(function () {
       var flag =   $(this).attr("data-flag");
       var obj = $("."+flag);
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        obj.siblings(".sjxs-lists").hide();
        obj.fadeIn();
    })
})

function closetk() {
    $(".lxwm").fadeOut();
}
function opentk() {
    $(".lxwm").fadeIn();
}