$(function () {
    var $slider = $("#slider .scrollContainer > li");
    var $parent = $slider.parent();
    var $length = $slider.length;
    var $first = $slider.eq(0).clone().addClass("slider cloned").attr("id", "slider_" + ($length + 1));
    var $last = $slider.eq($length - 1).clone().addClass("cloned").attr("id", "slider_0");
    $parent.append($first);
    $parent.prepend($last);
    var totalPanels = $(".scrollContainer").children().size();
    var regWidth = $(".slider").css("width");
    var regImgWidth = $(".slider img").css("width");
    var movingDistance = 124;
    var curWidth = 237;
    var curHeight = 236;
    var curImgWidth = 237;
    var curImgHeight = 236;
    var othersW = 92;
    var othersH = 92;
    var othersImgW = 92;
    var othersImgH = 92;
    var $slider = $("#slider .scrollContainer > li");
    var $container = $("#slider .scrollContainer");
    $slider.css({"float": "left", "position": "relative"});
    $("#slider").data("currentlyMoving", false);
    var scroll = $("#slider .scroll").css("overflow", "hidden");

    function returnToNormal(element) {
        $(element).animate({width: othersW, height: othersH}).find("img").animate({
            width: othersImgW,
            height: othersImgH
        })
    };
    function growBigger(element) {
        $(element).addClass("current").animate({
            width: curWidth,
            height: curHeight
        }).siblings().removeClass("current").end().find("img").animate({width: curImgWidth, height: curImgHeight})
    }

    function change(direction) {
        //if ((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
         // return false;
        //}
        if (($("#slider").data("currentlyMoving") == false)) {
            $("#slider").data("currentlyMoving", true);
            var next = direction ? curPanel + 1 : curPanel - 1;
            var leftValue = $(".scrollContainer").css("left");
            var movement = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;//0-123,0+123
            if (movement < -248) {
                movement = 0
            }else if(movement > 0){
                movement = -248
            }
            $(".scrollContainer").stop().animate({"left": movement}, function () {
                $("#slider").data("currentlyMoving", false)
            });
            returnToNormal("#slider_" + curPanel);
            growBigger("#slider_" + next);
            curPanel = next;
            /*$("#slider_" + (curPanel + 1)).unbind();
            $("#slider_" + (curPanel + 1)).click(function () {
                change(true)
            });
            $("#slider_" + (curPanel - 1)).unbind();
            $("#slider_" + (curPanel - 1)).click(function () {
                change(false)
            });
            $("#slider_" + curPanel).unbind();*/
            //console.log(curPanel);
            /*if(direction){
                console.log(curPanel);
                if (curPanel == 3) {
                    curPanel = 0
                }else {
                    $("#slider_3").css({"width": "92px", "height": "92px"});
                    $("#slider_3 img").css({"width": "92px", "height": "92px"})
                }
            }else{
                console.log(curPanel);
                if (curPanel == 0) {
                    curPanel = 4
                }else {
                    $("#slider_1").css({"width": "92px", "height": "92px"});
                    $("#slider_1 img").css({"width": "92px", "height": "92px"})
                }
            }*/

        }
        var _index = $(".scrollContainer").find(".current").index();
        $(".content").children(".content-common").hide();
        $(".content").children(".content-common").eq(_index).show()
    }
    growBigger("#slider_1");
    var curPanel = 1;
    timer = setInterval(function () {
        if (curPanel >= 3) {
            curPanel = 0;
            $("#slider_3").css({"width": "92px", "height": "92px"});
            $("#slider_3 img").css({"width": "92px", "height": "92px"})
        };
        change(true);
    }, 3000);
    $("#slider_con").mouseover(function () {
        clearInterval(timer);
    });
    $("#slider_con").mouseout(function () {
        timer = setInterval(function () {
            if (curPanel >= 3) {
                curPanel = 0;
                $("#slider_3").css({"width": "92px", "height": "92px"});
                $("#slider_3 img").css({"width": "92px", "height": "92px"})
            };
            change(true);
        }, 3000)
    });

    /*$("#slider_" + (curPanel + 1)).click(function () {
        if (curPanel >= 3) {
            curPanel = 0;
        }else {
            $("#slider_3").css({"width": "92px", "height": "92px"});
            $("#slider_3 img").css({"width": "92px", "height": "92px"})
        };
        change(true);
        return false;
    });
    $("#slider_" + (curPanel - 1)).click(function () {
        if (curPanel <= 1) {
            curPanel = 4;
            $("#slider_1").css({"width": "92px", "height": "92px"});
            $("#slider_1 img").css({"width": "92px", "height": "92px"})
        };
        change(false);
        return false;
    });*/
    $("#prev").click(function () {
        //console.log(curPanel);
        if (curPanel <= 1) {
            curPanel = 4;
            $("#slider_1").css({"width": "92px", "height": "92px"});
            $("#slider_1 img").css({"width": "92px", "height": "92px"})
        };
        change(false);
    });
    $("#next").click(function () {
        //console.log(curPanel);
        if (curPanel >= 3) {
            curPanel = 0;
            $("#slider_3").css({"width": "92px", "height": "92px"});
            $("#slider_3 img").css({"width": "92px", "height": "92px"})
        };
        change(true);
    });
});