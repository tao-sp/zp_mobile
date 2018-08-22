$(function () {
    $(".msjs-list li").hover(function () {
        var curObj = $(this);
        curObj.addClass("on");
        curObj.siblings().removeClass("on");
        curObj.children(".msjs-title").fadeIn();
        curObj.children(".msjs-summary").fadeIn();
        curObj.siblings().children(".msjs-title").fadeOut();
        curObj.siblings().children(".msjs-summary").fadeOut();
    })
    $(".nav-list li a").click(function(){
        var hr = $(this).attr("href");
        var anh = $(hr).offset().top;
        var  speeds = 2000;
        if (anh < 2000){
            speeds = anh;
        }
        $("html,body").stop().animate({scrollTop:anh},speeds);
    })
})

function kctkOpen(imgsrc,cname) {
    $(".kctk").fadeIn();
    $("#kcimg").attr("src",imgsrc);
    $(".kctk-info-content").hide();
    $("."+cname).show();
    //禁止滚动条
    $(document.body).css({
        "overflow-y": "hidden"
    });
}
function kctkClose() {
    $(".kctk").fadeOut();
    $(document.body).css({
        "overflow-y": "auto"
    });
}

function mstkOpen(cname) {
    $(".mstk").fadeIn();
    $(".mstk-info").hide();
    $("."+cname).show();
    //禁止滚动条
    $(document.body).css({
        "overflow-y": "hidden"
    });
}
function mstkClose() {
    $(".mstk").fadeOut();
    $(document.body).css({
        "overflow-y": "auto"
    });
}