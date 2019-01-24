
 $(document).ready(function(){
	
	$("#returnTop").click(function () {
	        var speed=200;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
	 });
	
	
	var d=true;
	$(".footer_submit").click(function () {
			if(d==false){
				return false;
			}
			d=false;
	       var name=$(this).siblings('.username').val();
	       var phone=$(this).siblings('.phone').val();
	       var cat='底部导航';
		   var that=this;
		   if(name==''){
			   alert('请填写姓名!');
	       		return false;
		   }
	       if(phone && /^1[3-9]\d{9}$/.test(phone)){
	       		
	       }else{
	       		alert('请填写正确的电话号码!');
	       		return false;
	       }
	       $.post("http://longtu.gdzp.org/Index/ajax_form",{name:name,phone:phone,cat:cat},function(result){
			    console.log(result);
	       		alert(result.str);
				//$(that).siblings('.footer-text').html(result.str);
				setTimeout(function(){
					//$('.footer-text').html('');
					$("input:[type=text]").attr("value","");
					$("textarea").attr("value","");
					d=true;
				},1000);
			
	       },'json')
	 });
	 
	 
	 $('.s_submit').on('click','',function(){
		var s_phone=$('.s_phone').val();
		var s_username=$('.s_username').val();
		var s_phone1=s_phone.replace(/(^\s*)|(\s*$)/g, "");
		if(s_phone1 && /^1[3-9]\d{9}$/.test(s_phone1)){
	       		
        }else{
       		alert('请填写正确的电话号码!');
       		return false;
        }
		if(s_phone1.length>0){
			$.post("http://longtu.gdzp.org/Index/ajax_form_lq",{phone:s_phone1,name:s_username},function(result){
				console.log(result);
				if(result.data==1){
					alert(result.str);
				}else{
					alert(result.str);
				}
			
			},'json');
		}
	})
					
		
	
})

function checkMobile(){ 
	if(document.yuyueform.username.value.length<1){
		alert("请填写您的姓名"); 
		return false; 	
	}
	var sMobile = document.yuyueform.phone.value; 
	if(!(/^1[3-9]\d{9}$/.test(sMobile))){ 
		alert("请填写完整的11位手机号"); 
		return false; 
		document.yuyueform.phone.focus(); 
	} 
	if(document.yuyueform.dh.value.length<1){
		alert("请填写您的QQ"); 
		return false; 	
	}
}

function checkMobile10(){ 
	if(document.yuyueform10.username.value.length<1){
		alert("请填写您的姓名"); 
		return false; 	
	}
	var sMobile = document.yuyueform10.phone.value; 
	if(!(/^1[3-9]\d{9}$/.test(sMobile))){ 
		alert("请填写完整的11位手机号"); 
		return false; 
		document.yuyueform10.phone.focus(); 
	} 
} 