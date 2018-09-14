$(function () {
    $(".jsmonth").text(GetDateStrm(2));
    $(".jsday").text(GetDateStrd(2));
    setTimeout(tkOpen,6000)
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

function tkOpen() {
    $(".tk-form").fadeIn();
}
function tkClose() {
    $(".tk-form").fadeOut();
    var intl = setInterval(tkOpen,10000);
}