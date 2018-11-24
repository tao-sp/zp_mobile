$(function() {
    $('.xinxi_solution_main ul li:eq(0)').addClass('on');
    $('.xinxi_solution_main ul li:eq(1)').addClass('b2');
    $('.xinxi_solution_main ul li:eq(2)').addClass('b3');
    $('.xinxi_solution_main ul li:eq(3)').addClass('b4');
    $('.xinxi_solution_main ul li:eq(4)').addClass('b5');
    $('.xinxi_solution_main ul li:eq(5)').addClass('b6');
    $('.xinxi_solution_main ul li:gt(5)').hide();
    //当三级分类大于7个的是，成两排显示
    /*$('.xinxi_solution_main ul li').each(function() {
        var len = $(this).find('.right dl a').length;
        if (len > 6) {
            $(this).find('.right dl a').addClass('yichu');
        }
    });*/

    //解决方案效果
    $('.xinxi_solution_main ul li').each(function() {
        var left_h = $(this).find('.left_top').height();
        $(this).find('.left_top').css({
            'top': '50%',
            'margin-top': -left_h / 2
        });

        /*var dl_h = $(this).find('.right dl').height();
        $(this).find('.right dl').css({
            'margin-top': -dl_h / 2
        });*/
    });
    $('.xinxi_solution_main ul li').mouseover(function() {
        var a=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        //setTimeout(function(){
            $('.main_mobile').css('background-position-y',-a*436+'px');
       // },250);
    });
    $('.xinxi_solution_main_mobile ul li:first-child').addClass('on');

    $('.xinxi_solution_main_mobile ul li').click(function() {
        var a=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.main_mobile').css('background-position-y',-a*436+'px');
    });

    /*$(".solu-category .solu-description").each(function() {
        var maxwidth = 60;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + '...');
        }
    });*/
});
document.onkeydown = function(){
    if( event.ctrlKey ){
        return false;
    }
    if ( event.altKey ){
        return false;
    }
    if ( event.shiftKey ){
        return false;
    }
    if(event.keyCode == 123) {
        return false;
    } else if((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
        return false;
    } else if((event.shiftKey) && (event.keyCode == 121)){
        return false;
    }
};