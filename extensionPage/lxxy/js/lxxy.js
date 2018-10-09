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
    $(".paper-input-gruop label").click(function () {
        var judge = $(this).parent(".right").length; //0选择错误 1选择正确
        if(judge==1){
            showTips();
            var last =  $(this).parents(".last-qustion").length;
            nextQustion(last,2000)
        }else {
            $(this).parent().siblings(".right").addClass("on");
            $(this).parent().siblings(".lxxy-paper-answer").slideDown();
        }
    })
    $(".message-view").click(function () {
        $(this).parent().next(".message-detail").slideToggle();
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
function nextQustion(last,time) {
    $(".pre-qustion").removeClass("no-click");
    $(".pre-qustion").removeAttr('disabled');
    setTimeout(function () {
        if(last==0){
            var j = $(".show-qustion").next(".last-qustion").length; //1最后一题
            if(j==1){
                $(".next-qustion").addClass("no-click");
                $(".next-qustion").attr('disabled',"true");
            }
            $(".show-qustion").removeClass("show-qustion").next().addClass("show-qustion");
        }
    },time)

}
function preQustion(last,time) {
    $(".next-qustion").removeClass("no-click");
    $(".next-qustion").removeAttr('disabled');
    setTimeout(function () {
        if(last==0){
            var j = $(".show-qustion").prev(".first-qustion").length; //1第一题
            if(j==1){
                $(".pre-qustion").addClass("no-click");
                $(".pre-qustion").attr('disabled',"true");
            }
            $(".show-qustion").removeClass("show-qustion").prev().addClass("show-qustion");
        }
    },time)

}
function showTips() {

    $(".right-tips").animate({
        width:"200px",
        height:"40px",
    },300);
    setTimeout(function () {
        $(".right-tips").animate({
            width:"0",
            height:"0"
        },300);
    },800)

}

function messageDel(obj) {
    $(obj).parent().parent("li").animate({
        "width":"0",
        "height":"0",
        "padding":"0"
    },300)
}