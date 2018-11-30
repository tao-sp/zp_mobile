$(function () {
    (function () {
        /*获取日期*/
        var mydate = new Date();
        var week=  mydate.getDay(); //获取当前星期X(0-6,0代表星期天)
        if(week==0||week==2||week==4){
            $(".jsmonth").text(GetDateStrm(1));
            $(".jsday").text(GetDateStrd(1));
        }else if(week==1||week==3||week==5){
            $(".jsmonth").text(GetDateStrm(0));
            $(".jsday").text(GetDateStrd(0));
        } else if(week==6){
            $(".jsmonth").text(GetDateStrm(2));
            $(".jsday").text(GetDateStrd(2));
        }
        function GetDateStrm(AddDayCount){
            var dd = new Date();
            dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
            // var y = dd.getYear();
            var m = dd.getMonth()+1;//获取当前月份的日期
            // var d = dd.getDate();
            return  (m<10?'0'+m:m);
        }

        function GetDateStrd(AddDayCount){
            var dd = new Date();
            dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
            // var y = dd.getYear();
            // var m = dd.getMonth()+1;//获取当前月份的日期
            var d = dd.getDate();
            return  (d<10?'0'+d:d);
        }
    })();
})