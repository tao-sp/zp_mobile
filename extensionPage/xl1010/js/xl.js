var speed=15;
var colee2=document.getElementById("colee2");
var colee1=document.getElementById("colee1");
var colee=document.getElementById("colee");
colee2.innerHTML=colee1.innerHTML;
function Marquee1(){
    if(colee.scrollTop>=colee1.offsetHeight){
        colee.scrollTop=0;
    }
    else
    {
        colee.scrollTop++;
    }
}
var MyMar1=setInterval(Marquee1,speed)
colee.onmouseover=function() {clearInterval(MyMar1)}
colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}

function tkOpen() {
    var inputval = $("#inputval").val();
    var tds="";
    var count = 0;
    var flag1 = "未查到相关信息"
    var flag2 = "未查到相关信息";
    var flag3="短信接收详细结果";
    if (inputval==null||inputval==""){
        $(".inout-group-tips").show();
        $(".inout-group-tips").animate({
            "left":"10px"
        },100)
        $(".inout-group-tips").animate({
            "left":"0"
        },100)
        $(".inout-group-tips").animate({
            "left":"5px"
        },100)
        $(".inout-group-tips").animate({
            "left":"0"
        },100)
    }else {
        $.getJSON("js/jg.json", "", function(data) {
            //each循环 使用$.each方法遍历返回的数据date
            $.each(data.jg, function(i, item) {
                var jgName = item.name;
                if(jgName.indexOf(inputval) >= 0 ) {
                    count++;
                    if (item.flag1==1){
                        flag1="有";
                    }
                    if (item.flag2==1){
                        flag2="有";
                    }
                    if(item.flag1==0&&item.flag2==0){
                        flag3="短信接收正规机构名单";
                    }
                    tds+="<tr><td>"+jgName+"</td><td>"+flag1+"</td><td>"+flag2+"</td><td><a onclick='bdxx()'>"+flag3+"</a></td></tr>"
                }
            })
            if (tds == ""){
                tds="<tr><td colspan='4'>未查到相关信息，<a onclick='bdxx()'>短信接收正规机构名单。</a></td></tr>"
            }
            $("#tdData").html(tds)
        });
        // $("#result").html(inputval);
        $(".tk").fadeIn();
    }
}
function tkClose() {
    $(".tk").fadeOut();
}
function bdxx() {
    $(".bfxx").fadeIn();
    $(".bfxx").fadeOut(2000);
}
$(function () {
    $("#inputval").focus(function () {
        $(".inout-group-tips").fadeOut();
        $('#inputval').bind('keypress',function(event){
            if(event.keyCode == 13){
                tkOpen();
            }
        });
    })
    //首先将#back-to-top隐藏
    $("#backTop").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            $("#backTop").fadeIn(1500);
        } else {
            $("#backTop").fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#backTop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
})

