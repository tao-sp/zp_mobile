$(function(){
    $(':input').labelauty();

    $(".zkzxj").bind("change",function(){
        var dataname = $(this).val();
        if(dataname==1){
            $(".zkzxj-count").fadeIn();
        }else {
            $(".zkzxj-count").fadeOut();
        }
    });
    $(".bkzxj").bind("change",function(){
        var dataname = $(this).val();
        if(dataname==1){
            $(".bkzxj-count").fadeIn();
        }else {
            $(".bkzxj-count").fadeOut();
        }
    });
    $(".cc :radio").click(function(){
        var flag = $(this).val();
        if (flag==0){
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
          $(".xx-title").hide();
            $(".bkxx-content").hide();
          $(".zkxx-content").fadeIn();
        }else if (flag==1){
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
            $(".xx-title").hide();
            $(".zkxx-content").hide();
            $(".bkxx-content").fadeIn();
        }else if (flag==2){
            $("#zkform")[0].reset();
            $("#bkform")[0].reset();
            $(".xx-title").show();
            $(".zkxx-content").fadeIn();
            $(".bkxx-content").fadeIn();
        }

    });
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
    getdate();
    $(".loading").show();
    $("#htmlcimg").show();
    html2canvas($('#htmlcimg')).then(function(canvas) {
        $(canvas).addClass("imgcanvas").attr('id',"imgcanvas");;
        document.body.appendChild(canvas);
      //  console.log(canvas.toDataURL("image/png"))
        var imgsrc=canvas.toDataURL("image/png");
        document.getElementById("produceimg").src = imgsrc;
        $(".mimgbox").fadeIn();
        $('body').css("overflow","hidden");
        $(".loading").hide();
    });

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
     $("#xyxm-img").text($("#xyxm").val());
    $("#xydh-img").text($("#xydh").val());
    $("#xyxl-img").text($("#xyxl  option:checked").text()); // 选中项目的显示值);
    $("#xynl-img").text($("#xynl").val());
    $("#xxyy-img").text($("#xxyy input[name='xxyy']:checked").val());

    $("#zxgwName-img").text($("#zxgwName").val());
    $("#zxgwTel-img").text($("#zxgwTel").val());
}






