var index = 1;
$(function () {
    $(".jsmonth").text(GetDateStrm(2));
    $(".jsday").text(GetDateStrd(2));
  //  setTimeout(tkOpen,4000);
  /* var intl =  setInterval(listup,1200)
    $("#floating-list").on({
        mouseenter: function() {
           clearInterval(intl)
        },
        mouseleave: function() {
            intl =  setInterval(listup,1200);
        }
    });*/
})

function listup() {
        var ulObj = $("#floating-list");
        var listlength=$("#floating-list li").length-1;
        if (index>listlength){
            ulObj.css("top","0.96rem");
            ulObj.animate({
                top:'0'
            },300)
            index=1;
        }else{
            ulObj.animate({
                top:index*-0.96+'rem'
            },600)
            index++;
        }
}
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

function tkOpen() {
    $(".tk-form").fadeIn();
}
function tkClose() {
    $(".tk-form").fadeOut();
   // setTimeout(tkOpen,10000);
}