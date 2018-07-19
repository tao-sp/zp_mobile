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

 $(function () {
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

 })
