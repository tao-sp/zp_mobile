 $(function () {
     setTimeout("openfloating()",5000);
     $(".search input").focus(function () {
         $(".search").css("border-color", "#d0d0d0");
     });
     $(".search input").blur(function () {
         $(".search").css("border-color", "#999999");
     });
     $("#search").click(function () {
         var val =  $(".search input").val();
         var url = "/continuing/search";
         window.location.href = url + "?keyword=" + val;
     });
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

     $(".jsmonth").text(GetDateStrm(2));
     $(".jsday").text(GetDateStrd(2));


 })


function GetDateStrm(AddDayCount){
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    // var y = dd.getYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    // var d = dd.getDate();
    return  m;
}

function GetDateStrd(AddDayCount){
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    // var y = dd.getYear();
    // var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    return  d;
}
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-23px"
    },600,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}


function openfloating() {
    $(".floating-left").fadeIn();
    $(".floating-left-mini").hide();
}
function closefloating() {
    $(".floating-left-mini").fadeIn();
    $(".floating-left").hide();
    setTimeout("openfloating()",18000)
}