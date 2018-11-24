$(function() {
	$(".six_con li").mouseover(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
	});
	//fan add 20180723
	$(".brand_box").mouseover(function(){
		var a=$(this).index();
		$(this).addClass("hover").siblings(".brand_box").removeClass("hover");
        $(".brand_pic img").eq(a).show().siblings("img").hide();
	});
	$("#toTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});