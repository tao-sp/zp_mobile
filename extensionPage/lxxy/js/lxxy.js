$(function () {
    $(".regist-type span").click(function () {
       var className  = $(this).attr("data-flag");
       $(this).addClass("on").siblings().removeClass("on");
       $(".regist-login").hide();
       $("."+className).fadeIn();
    })
    $(".course-nav li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
       var index = $(this).index();
        $(".course-content .course-item").hide();
        $(".course-content").children('.course-item').eq(index).fadeIn();
    })
    $(".course-catalog li").click(function () {
        $(this).children(".course-subdirectory").slideToggle();
    })
    $(".course-subdirectory").click(function(event){
        event.stopPropagation();
    });
    $(".qrcode-list li").on({
        mouseover : function(){
            var className =  $(this).attr("data-flag");
            $(".qrcode").hide();
            $("."+className).show();
        } ,
        mouseout : function(){
            $(".qrcode").hide();
        }
    })


})

function OpenRegist(classNane,className1) {
    $(".nav-login span:first").addClass("on").siblings().removeClass("on");
    $(".nav-regist span:first").addClass("on").siblings().removeClass("on");
    $(".regist-type").hide();
    $(".regist-tips").hide();
    $(".regist-login").hide();
    $("."+classNane).fadeIn();
    $("."+className1).fadeIn();
}