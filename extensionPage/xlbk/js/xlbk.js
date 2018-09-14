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
