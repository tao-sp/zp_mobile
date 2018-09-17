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

function tk1Open() {
    $(".tk1-content").fadeIn()
}
function tk1Close() {
    $(".tk1-content").fadeOut()
}
function tk2Open() {
    $(".tk2-content").fadeIn()
}
function tk2Close() {
    $(".tk2-content").fadeOut()
}