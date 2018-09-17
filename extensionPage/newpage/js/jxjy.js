$(function () {
    $(".jsmonth").text(GetDateStrm(2));
    $(".jsday").text(GetDateStrd(2));
    $(".bottom li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
})
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