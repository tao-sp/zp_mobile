
!function(){function a(){document.documentElement.style.fontSize=document.documentElement.clientWidth/750*10/16*1000+"%"}var b=null;window.addEventListener("resize",function(){clearTimeout(b);b=setTimeout(a,300)},!1);a()}(window);
$(".mobile_menu_btn").click(function(){
    $(".mobile_menu_btn").toggleClass("mobile_menu_hover");
});