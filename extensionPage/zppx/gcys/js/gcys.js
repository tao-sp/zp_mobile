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


});

