$(function(){
    var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       $(window).resize(function() {
        if($(window).height()<wh){
          $('.fot-scroll').hide();
        }else{
          $('.fot-scroll').show();
        }
       });
      },
      //updateTime
      updateTime:function(){
        var $year = $(".year");
        var $month = $(".month");
        var $date = $(".day");
        var myDate = new Date();
        var getDate = myDate.getDate();
        var getDay = myDate.getDay();
        switch(getDay){
          case 0:myDate.setDate(getDate+3);
          break;
          case 1:myDate.setDate(getDate+2)
          break;
          case 2:myDate.setDate(getDate+1)
          break;
          case 3:myDate.setDate(getDate+2)
          break;
          case 4:myDate.setDate(getDate+1)
          break;
          case 5:myDate.setDate(getDate+2)
          break;
          case 6:myDate.setDate(getDate+1)
          break;
        }
        $year.text(myDate.getFullYear());
        $month.text(myDate.getMonth()+1);
        $date.text(myDate.getDate());
      },
      infoScroll:function(area){
        area.innerHTML +=area.innerHTML
        area.scrollTop = 0;
        
        function scrollUp(){
          if(area.scrollTop>=area.scrollHeight/2){
           area.scrollTop = 0
         }else{
          area.scrollTop++

        }
       }
       var timer = setInterval(scrollUp,25)
       area.onmouseenter = function(){clearInterval(timer)}
       area.onmouseleave = function(){timer = setInterval(scrollUp,30)}
      },
      // right bottom
      rbPop:function(){
        var $rbPop = $(".rb-pop");
        $rbPop.animate({"right":"5px"},1000);
        var $close = $(".rb-close");
        $close.click(function(){
          $(this).parent().animate({"right":"-320px"},1000);
        })
      }
  }
  obj.hideKeyboard()
 // obj.updateTime()
  
  var banInfo = document.getElementById('ban-info');
  obj.infoScroll(banInfo)

  var disinfo = document.getElementById('demo1');
  obj.infoScroll(disinfo)

  obj.rbPop()


})