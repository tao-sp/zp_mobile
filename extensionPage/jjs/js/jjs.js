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
/*悬浮窗函数*/
(function() {
    var oFloat = $('#float-ad'),
        oLinks = oFloat.find('.float-interaction .interac-item'),
        oForm = oFloat.find('.float-frm-wrapper'),
        oQQ = oFloat.find('.float-qq-wrapper'),
        oWeixin = oFloat.find('.float-weixin-wrapper');

    oForm.hide();
    oWeixin.hide();
    oQQ.hide();
    if(!oFloat.length){return;}
    oLinks.on({
            mouseenter: function(){
                var index = $(this).index();
                if(index === 3){
                    oForm.stop().show(500);
                }else if( index === 4){
                    oQQ.stop().show(500);
                }else if( index === 5){
                    oWeixin.stop().show(500);
                }
                $(this).find('.link').addClass('on').end().siblings().children('.link').removeClass('on');
            },
            mouseleave:function(){
                var index = $(this).index();
                if(index === 3){
                    oForm.stop().hide(500);
                }else if( index === 4){
                    oQQ.stop().hide(500);
                }else if( index === 5){
                    oWeixin.stop().hide(500);
                }
                $(this).find('.link').removeClass('on');
            }
        }
    );

    /*表单的placeholder属性处理*/
    (function(){
        //判断是否支持placeholder
        function isPlaceholer(){
            return "placeholder" in document.createElement('input');
        }
        //不支持的代码
        if(!isPlaceholer()){
            var oGroup = $('.form-group');
            oGroup.each(function() {
                var oSpan = $(this).children('span'),
                    oIpt = $(this).children('input[placeholder]'),
                    initVal = oIpt.attr('placeholder');
                oSpan.show();

                if(oIpt.val()!== ""){
                    oSpan.hide();
                }else{
                    oSpan.show();
                }
                oSpan.on('click',function() {
                    $(this).hide();
                    oIpt.val('').focus();
                });
                oIpt.blur(function() {
                    if(oIpt.val()!== ""){
                        oSpan.hide();
                    }else{
                        oSpan.show();
                    }
                });
            });
        }
    })();

})();

$(function () {
        var obj = $(".nav_drop_down_lists");
        for (var i=0;i<obj.length;i++){
            var num = $(obj[i]).children().length;
            $(obj[i]).css("width",(num-1)*148);
        }
        /*鼠标划过导航事件*/
        $(".logomore .logomore_content .nav li").hover(function () {
            $(this).children(".nav_drop_down").stop(true, false).slideDown();
            $(".nav_active").removeClass("nav_active");
            $(this).addClass("nav_active");
        })
        $(".logomore .logomore_content .nav li").mouseleave(function(){
            $(this).children(".nav_drop_down").hide();
        });

        $(".logomore .logomore_content .nav li .nav_drop_down").hover(function () {
            $(this).show();
        })
})