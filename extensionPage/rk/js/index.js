$(function(){



	/*$('.project_content').mouseover(function(){
		$(this).css('background','url(file/images/pjt_bg.png)no-repeat center');
		$(this).siblings().css('background','url(file/images/pjt_bg1.png)no-repeat center');
		$(this).children('.pxmgl_t').children('img').attr('src','file/images/xmgl2.png');
		$(this).siblings().children('.pxmgl_t').children('img').attr('src','file/images/xmgl.png');
		$(this).children('div').css('color','#fff');
		$(this).siblings().children('div').css('color','#333');

	})*/

	$('.project_content').mouseover(function(){
		var img = $(this).children('.pxmgl_t').children('img').attr('src');
		img = img.split('.');
		img = img[0]+'2.'+img[1]; 
		//alert(img);
		$(this).css('background','url(file/images/pjt_bg.png)no-repeat center');
		$(this).children('.pxmgl_t').children('img').attr('src',img);
		$(this).children('div').css('color','#fff');
		$(this).siblings().children('div').css('color','#333');

	})

	$('.project_content').mouseout(function(){
		var img = $(this).children('.pxmgl_t').children('img').attr('src');
		img = img.split('2');
		img = img[0]+img[1]; 
		//alert(img);
		$(this).css('background','url(file/images/pjt_bg1.png)no-repeat center');
		$(this).children('.pxmgl_t').children('img').attr('src',img);
		$(this).children('div').css('color','#333');
		$(this).siblings().children('div').css('color','#333');

	})
	
})



//视频区1
$(function(){
	$('.a').click(function(){
//		$('.a,.b,.stlq').css('display','none');
		$('#Rq_bd').css('display','block');				
	});
	
	$('.Rq_dele').click(function(){
		$('#Rq_bd').css('display','none');		
	});		
});

$(function(){
	$('.b').click(function(){
//		$('.a,.b,.stlq').css('display','none');
		$('#Rq_bd_r').css('display','block');				
	});
	
	$('.Rq_dele_r').click(function(){
		$('#Rq_bd_r').css('display','none');		
	});		
});
	
	
