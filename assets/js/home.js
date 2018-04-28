var mySwiper = new Swiper('.home-header .swiper-container', {
    autoplay: true,//可选选项，自动滑动
    pagination: {
        el: '.home-header .swiper-pagination',
    }
})
$(function () {
    $(".home-nav-menu").click(function () {
        $(".home-nav-content").animate({right:"0"});
    })
    $(".hone-nav-close").click(function () {
        $(".home-nav-content").animate({right:"-100%"});
    })
    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    if(!$("#backTop").length){return;}
    $("#backTop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
    /*荣誉资质*/
    var aLi = $(".zpry li");
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;//添加索引
        aLi[i].onclick = function () {
            $(".zpry-on").removeClass("zpry-on");
            this.className = 'zpry-on';
           // alert(this.index);//弹出索引
            $(".showswiper").removeClass("showswiper");
            $(".zp-honor div.hideswiper:eq("+this.index+")").addClass("showswiper");
        }
    }

    /*导航条切换*/
    $(document).scroll(function() {
        var hei = $("#swiperheight").height();
        var num =  $(document).scrollTop();
        if (num>hei){
            $(".home-nav").hide();
            $(".home-nav-white").show();
        }else {
            $(".home-nav").show();
            $(".home-nav-white").hide();
        }
    });

})

/*课程体系*/
$(".curriculum-system-switch .hd li").click(function () {
    var liIndex = $(this).index();
    $(this).siblings().removeClass('on');
    $(this).addClass("on");
    $(".curriculum-system-switch .bd li").hide();
    $(".curriculum-system-switch .bd li:eq("+liIndex+")").show();
})

$(".understand-zp-play").click(function () {
    $(".video-box").show();
    var myVideo = document.getElementById("myvideo");
     myVideo.play();
})
$(".close-video").click(function () {
    $(".video-box").hide();
    var myVideo = document.getElementById("myvideo");
    myVideo.pause();
})


jQuery(".sideMenu").slide({titCell:"h3", targetCell:"ul",defaultIndex:1,effect:"slideDown",delayTime:300,trigger:"click",defaultPlay:false});
