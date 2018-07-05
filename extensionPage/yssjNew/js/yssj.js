$(function () {
    $(".right-nav").click(function () {
        $(".right-nav-hide").fadeIn();
    })
    $(".close-nav img").click(function () {
        $(".right-nav-hide").fadeOut();
    })
    $(".zp-play").click(function () {
        $(".video-box").show();
        var myVideo = document.getElementById("myvideo");
        myVideo.play();
    })
    $(".close-video").click(function () {
        $(".video-box").hide();
        var myVideo = document.getElementById("myvideo");
        myVideo.pause();
    })
    $(".lssx .swiper-slide").click(function () {
        $(this).siblings().children().children(".lssx-content-title").animate({height:1.1946666667+"rem"});
        $(this).children().children(".lssx-content-title").animate({height:1.1946666667*2+"rem"});
    })

    $(".hzdw .swiper-slide").click(function () {
        $(this).siblings().children().children(".hzdw-content-title").animate({height:1.7066666666+"rem"});
        $(this).children().children(".hzdw-content-title").animate({height:1.7066666666*2+"rem"});
    })

    $(".jyfw-lists li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      var flag =   $(this).attr("data-flag");
      $(".jyfwswiper").css("left","500%");
      $("."+flag).css("left","0");
    })
})
