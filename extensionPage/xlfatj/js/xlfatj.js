var zkqm = getnow();
var bkqm ;
setTimeout(function(){
     bkqm = getnow();
}, 1000);
$(function(){
    $(':input').labelauty();

    $(".zkzxj").bind("change",function(){
        var dataname = $(this).val();
        if(dataname==1){
            $(".zkzxj-count").fadeIn();
            $(".zkq").show();
        }else {
            $(".zkzxj-count").fadeOut();
            $(".zkq").hide();
        }
    });
    $(".bkzxj").bind("change",function(){
        var dataname = $(this).val();
        if(dataname==1){
            $(".bkzxj-count").fadeIn();
            $(".bkq").show();
        }else {
            $(".bkzxj-count").fadeOut();
            $(".bkq").hide();
        }
    });
    $(".cc :radio").click(function(){
        var flag = $(this).val();
        /*推荐*/
       /* $("#tj-img").text($(this).attr("data-flag"));*/

        if (flag==0){
            /*专科*/

            $(".zkyx-show").show();
            $(".bkyx-show").hide();
          /*  $(".xxxs").hide();*/
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
            $(".xx-title").hide();
            $(".bkxx-content").hide();
            $(".zkxx-content").fadeIn();
        }else if (flag==1){
            /*本科*/
            $(".zkyx-show").hide();
            $(".bkyx-show").show();
           /* $(".xxxs").hide();*/
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
            $(".xx-title").hide();
            $(".zkxx-content").hide();
            $(".bkxx-content").fadeIn();
        }else if (flag==2){
            /*专本套读*/
            $(".zkyx-show").show();
            $(".bkyx-show").show();
           /* $(".xxxs").show();*/
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
            $(".xx-title").show();
            $(".zkxx-content").fadeIn();
            $(".bkxx-content").fadeIn();
        }

    });
});
/*专科院校*/
$(".zkyx :radio").click(function(){
    $("#zkyx-img1").attr("src",$(this).siblings('img.yx-img1')[0].src);
    $("#zkyx-img2").attr("src",$(this).siblings('img.yx-img2')[0].src);
    $("#zkyx-img3").attr("src",$(this).siblings('img.yx-img3')[0].src);
    $("#zkyx-img4").attr("src",$(this).siblings('img.yx-img4')[0].src);
    $("#zkyx-summary").text($(this).siblings('span.yx-summary')[0].src);
    $("#zkyx-name").text($(this).attr("data-flag"));
});
/*本科院校*/
$(".bkyx :radio").click(function(){
    $("#bkyx-img1").attr("src",$(this).siblings('img.yx-img1')[0].src);
    $("#bkyx-img2").attr("src",$(this).siblings('img.yx-img2')[0].src);
    $("#bkyx-img3").attr("src",$(this).siblings('img.yx-img3')[0].src);
    $("#bkyx-img4").attr("src",$(this).siblings('img.yx-img4')[0].src);
    $("#bkyx-summary").text($(this).siblings('span.yx-summary')[0].src);
    $("#bkyx-name").text($(this).attr("data-flag"));
});
/*专科学习形式*/
$(".zkxxxs :radio").click(function(){
    var name = $(this).attr("data-flag");
    tj(name);
    $("#zkxxxs-name").text(name);
});
/*专科学习形式*/
$(".bkxxxs :radio").click(function(){
    var name = $(this).attr("data-flag");
    tj(name);
    $("#bkxxxs-name").text(name);
});
function generate() {
    $(".mimgbox").fadeIn();
    $('body').css("overflow","hidden");
}
function closemimgbox() {
    $("#htmlcimg").hide();
    $("#imgcanvas").remove();
    $(".mimgbox").fadeOut();
    $('body').css("overflow","auto");
}
function down() {
    /*必填项验证*/
  /*  var obj = $(".input-required");
    for (var i=0;i<obj.length;i++){
      $(obj[i]).addClass("input-required-null");
    }*/
    if (Validator.validate('#someForm')&&Validator.validate('#someForm1')) {
        getdate();
        $(".loading").show();
        $("#htmlcimg").show();
        html2canvas($('#htmlcimg')).then(function(canvas) {
            $(canvas).addClass("imgcanvas").attr('id',"imgcanvas");
            document.body.appendChild(canvas);
            //  console.log(canvas.toDataURL("image/png"))
            var imgsrc=canvas.toDataURL("image/png");
            document.getElementById("produceimg").src = imgsrc;
            $(".mimgbox").fadeIn();
            $('body').css("overflow","hidden");
            $(".loading").hide();
        });
        return true;
    }


}

function smallimg() {
  $("#produceimg").css("height",$(".mimgbox").height());
  $("#produceimg").css("width","auto");
}
function bigimg() {
    $("#produceimg").css("width",750);
    $("#produceimg").css("height","auto");
}

function getdate() {
    /*姓名*/
    $("#xyxm-img").text($("#xyxm").val());
    /*电话*/
    $("#xydh-img").text($("#xydh").val());
    /*学历*/
    $("#xyxl-img").text($("#xyxl  option:checked").text());
    /*年龄*/
    $("#xynl-img").text($("#xynl").val()+"岁");
    /*学习原因*/
    $("#xxyy-img").text($("#xxyy input[name='xxyy']:checked").val());
    /*专科券码*/
    $("#zkqm").text("ZPJY"+zkqm);
    /*本科券码*/
    $("#bkqm").text("ZPJY"+bkqm);
    /*专科助学金金额*/
    $("#zkzxj").text($(".zkzxj-count").val());
    /*本科助学金金额*/
    $("#bkzxj").text($(".bkzxj-count").val());

    /*专科推荐专业*/
    var zkzyobj = $('.zkzy input[type=checkbox]:checked');
    var zklisthtml ="";
    for (var i =0;i<zkzyobj.length;i++){
        zklisthtml+="<span>"+$(zkzyobj[i]).attr("data-flag")+"</span>";
    }
    $("#zklists").html(zklisthtml);



    /*本科推荐专业*/
    var bkzyobj = $('.bkzy input[type=checkbox]:checked');
    var bklisthtml ="";
    for (var i =0;i<bkzyobj.length;i++){
        bklisthtml+="<span>"+$(bkzyobj[i]).attr("data-flag")+"</span>";
    }
    $("#bklists").html(bklisthtml);

    /*校区地址*/
    var xqdzobj = $('.xqdz input[type=checkbox]:checked');
    var xqdzlisthtml ="";
    for (var i =0;i<xqdzobj.length;i++){
        var dh = $($(xqdzobj[i]).siblings('span.xqdz-dh')[0]).text();
        var dz = $($(xqdzobj[i]).siblings('span.xqdz-dz')[0]).text();
        var lx = $($(xqdzobj[i]).siblings('span.xqdz-lx')[0]).text();
        xqdzlisthtml+="<div class=\"xq clearfix\">" +
            "                        <div class=\"xq-left\">" +
             $(xqdzobj[i]).attr("data-flag")+
            "                        </div>" +
            "                        <div class=\"xq-right\">" +
            "                            电话：<span>"+dh+"</span><br/>" +
            "                            地址：<span>"+dz+"</span><br/>" +
            "                            路线：<span>"+lx+"</span><br/>" +
            "                            网址：<span>www.gdzp.org</span><br/>" +
            "                        </div>" +
            "                    </div>";
    }
    $("#xqdzlists").html(xqdzlisthtml);

    /*咨询顾问姓名*/
    $("#zxgwName-img").text($("#zxgwName").val());
    /*咨询顾问电话*/
    $("#zxgwTel-img").text($("#zxgwTel").val());
}

/*当前时间*/

function getnow() {
    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();
    var now=year.toString().substr(2, 2)+''+p(month)+""+p(date)+""+p(h)+''+p(m)+""+p(s);
    return now;
}
function p(s) {
    return s < 10 ? '0' + s: s;
}

function wntj(num) {
    var tjname;
    if(num==1){
        tjname="专本套读(2.5年~3年)";
    }else if(num==2){
        tjname="自考本科(1.5年~2年)";
    }else if(num==3){
        tjname="自考专科(1.5年~2年)";
    }else if(num==4){
        tjname="成考本科(2.5年学制)";
    }else if(num==5){
        tjname="成考专科(2.5年学制)";
    }else if(num==6){
        tjname="网教本科(2.5年学制)";
    }else if(num==7){
        tjname="网教专科(2.5年学制)";
    }
    $("#tj-img").text(tjname)
}

function tj(name) {
    var num = $(".cc input[name='cc']:checked").val();
    if (num==2){
        /*专本套读*/
        wntj(1);
    }else if (num==1){
        /*本科*/
        if (name=="自学考试"){
            /*自考本科*/
            wntj(2);
        }else if(name=="成人高考"){
            /*成考本科*/
            wntj(4);
        }else if(name=="网络教育"){
            /*网教本科*/
            wntj(6);
        }
    }else if(num==0){
        /*专科*/
        if (name=="自学考试"){
            /*自考专科*/
            wntj(3);
        }else if(name=="成人高考"){
            /*成考专科*/
            wntj(5);
        }else if(name=="网络教育"){
            /*网教专科*/
            wntj(7);
        }
    }
}








