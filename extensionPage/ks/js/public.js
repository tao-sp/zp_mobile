$(function(){		 
 	$('.bgg_close').on('click',function(){
		$('.fixed_bgg').hide();				
	});
	function fixed_bgg(){
		$('.bgg_close').show();		
	}	
	function bggTime(){
		setTimeout(fixed_bgg,3000);	
	}
	//addLoadEvent(bggTime);


	//首页小图放大广告图
	$(".index_gg03 li a,.gk_gg02 li a").mouseenter(function(){
		var typedate=$(this).attr('typedate'); 
		var id = typedate.substr(5,typedate.length-1);
		//$('.mydiv'+id).slideDown();
		$('.mydiv'+id).show();	
	});
	$('.mydiv').mouseleave(function(){
		//$('.mydiv').slideUp();
		$('.mydiv').hide();		
	});
	
	$(".index_gg02 li a,.gk_gg02 li a").mouseenter(function(){
		var typedate=$(this).attr('typedate'); 
		var id = typedate.substr(7,typedate.length-1);
		//$('.mydiv'+id).slideDown();
		$('.leftdiv'+id).show();	
	});
	$('.leftdiv').mouseleave(function(){
		//$('.mydiv').slideUp();
		$('.leftdiv').hide();		
	});
	
	//首页中图放大广告图
	/*$(".index_gg01 li img").mouseenter(function(){
		var myclass=$(this).attr('class'); 
		var myid = myclass.substr(5,myclass.length-1);
    	$('.ggimg'+myid).animate({
			width:'380px',
      		height:'278px',      		
			marginTop:'-100px',
			marginRight:'-100px'
    	});
  	});
	$(".index_gg01 li img").mouseleave(function(){
		$(this).animate({      		
      		width:'285px',
			height:'180px',
			marginTop:'',
			marginRight:'' 
    	});
	});*/
	
	//综合查询切换
	$('.dl1 strong').click(function(){	 
        var Obj = $(this).attr('class'),
		num = Obj.substring(3, 5);
		num = $.trim(num);
		$('.is-'+num).addClass('cur').siblings('.cur').removeClass('cur');
        $('.sbox-'+num).show();		
		$('.sbox-'+num).siblings().hide();
		//$($(".dl2 dd").children("strong").get(0)).addClass('cur').siblings('.cur').removeClass('cur');
		$(".dl3>dd").hide();
		$(".dl3>dd>strong").removeClass('cur');
    });
	$('.dl2 strong').click(function(){	 
        var Obj = $(this).attr('class'),
		num = Obj.substring(0, 5);
		$('.'+num).addClass('cur').siblings('.cur').removeClass('cur');
		var tag = $(this).attr('tag');
		$(".dl3>dd").hide();
		$('#'+tag).show();
		$('#'+tag).siblings().hide();
		$(".dl3>:first").show();
		$(".dl3>dd>strong").removeClass('cur');
    });
	
	$('.dl3 strong').click(function(){
		$(this).addClass('cur'),
		$(this).siblings().removeClass('cur');
	});
	
	$('.btn_query').click(function(){
		var cur = $(".dl3 .cur").attr("href");
		if(cur == undefined){
			alert("请选择查询时间");
		} else {
			window.location = cur;
		}
	});
	
	
	//频道标签切换
	$('.index_tit07 a,.index_tit08 a').hover(function(){	 
        var Obj = $(this).attr('class'),
		num = Obj.substring(3, 4);
        $('.box-'+num).show();		
		$('.box-'+num).siblings().hide();
		//$('.tit00').show();
    });
	$('.tit_mod a,.select_pc li,.select_month li').hover(function(){	 
        var Obj = $(this).attr('class'),
		num = Obj.substring(3, 5);
		num = $.trim(num);
		$('.li-'+num).addClass('cur').siblings('.cur').removeClass('cur');
        $('.box-'+num).show();		
		$('.box-'+num).siblings().hide();
    });
 
	
	$('.close_gg a').click(function(){
		$('.box1_gg,.mt01').hide();
	});
  
	/*$('.btn_layer').click(function(){
		$('.layer_jun').show();	
		setTimeout('layerTimeHide()',2000);
	});	*/
    $('.btn_layer').click(function(){
		popup($('.layer_jun'));
		$(window).resize(function(){  
			popup($(".layer_jun")); 
		});
		setTimeout('layerTimeHide()',3000);
	});	
	
	/*gotop*/
	/*window.onscroll=function(){
		if($(window).scrollTop()>100){
			 $('.gotop').show();
		}else{
			 $('.gotop').hide();
		}
	}*/
    $(window).bind("scroll",function(){  	 
		if($(window).scrollTop()>100){
			 $('.gotop').show();
		}else{
			 $('.gotop').hide();
		}
	});
	$('.gotop').click(function(){
		//scroll('0px', 300);
		location.href="#";
	});
	/*function scroll(scrollTo, time) {
		var scrollFrom = parseInt(document.body.scrollTop), i = 0,runEvery = 5; // run every 5ms
		scrollTo = parseInt(scrollTo);
		time /= runEvery;
	
		var interval = setInterval(function () {
			i++;
			document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom; 
			if (i >= time) {
				clearInterval(interval);
			}
		}, runEvery);
	}*/	

    $('.news-print').on('click',function(){
		window.print();  	
	});
});

function layerTimeHide(){
	$(window).unbind();
	$('.layer_jun').hide();	
	
}

function popup(popupName){
	var _scrollHeight = $(document).scrollTop(),
	_windowHeight = $(window).height(),
	_windowWidth = $(window).width(),
	_popupHeight = popupName.height(),
	_popupWeight = popupName.width();
	_posiTop = (_windowHeight - _popupHeight)/2 ;
	_posiLeft = (_windowWidth - _popupWeight)/2;
	popupName.css({"left": _posiLeft + "px","top":_posiTop + "px","display":"block"});
}
 
/*	var interval =1111000; 
	function ShowCountDown(year,month,day,divname) 
	//function ShowCountDown(year,month,day) 
	{ 
		var now = new Date(), 
		endDate = new Date(year, month-1, day),
		leftTime=endDate.getTime()-now.getTime(),
		leftsecond = parseInt(leftTime/1000),
		day1=Math.floor(leftsecond/(60*60*24)), 
		hour=Math.floor((leftsecond-day1*24*60*60)/3600),
		minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60), 
		second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60), 
		cc = document.getElementById(divname); 
		//cc.innerHTML = year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
		//cc.innerHTML = "离"+month+"月"+day+"日成考开始还有：<br/>"+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
		cc.innerHTML = day1; 
	} 
	//window.setInterval(function(){ ShowCountDown(2017,10,15,'divTime'); } , interval); 
	window.setInterval(function(){ 
		var divTime = document.getElementById("divTime");  
		ShowCountDown(2017,10,15,"divTime"); 
	} , interval); 
 */
/* 
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
  		window.onload = func;
	} else {  
	alert(oldonload);
		window.onload = function() {
     		oldonload();
      		func();
    	}
    }
}
 */