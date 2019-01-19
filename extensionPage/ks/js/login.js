

	
	function regMobiMsg(){
		var msgReg = /^\d{6}$/;
		if ($('#mobimsg').val() == "") {
			$('#mobimsg').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#mobimsgInfo').html("<i class='icon_error'></i><span>验证码不能为空.</span>");	
			$("#mobimsgInfo span").css("color","red");	
			return false;
		}  else { 
			$('#mobimsgInfo').html("<i class='icon_ok'></i>");	
			$('#mobimsg').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});		 
		}	
	}




$(function(){	
	$('#switch_qreg').click(function(){
		$('#switch_reg').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qreg').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0',width:'50%',background:'red'});
		$('#email_reg').css('display','none');
		$('#tel_reg').css('display','block');		
	});
	$('#switch_reg').click(function(){		
		$('#switch_reg').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qreg').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'50%',width:'50%',background:'red'});	
		$('#email_reg').css('display','block');
		$('#tel_reg').css('display','none');
	});
	
	if(getParam("a")=="0")
	{
		$('#switch_reg').trigger('click');
	}

});
	
function logintab(){
	scrollTo(0);
	$('#switch_qreg').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_reg').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({left:'154px',width:'96px'});
	$('#email_reg').css('display','none');
	$('#tel_reg').css('display','block');
	
}


//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) { 
    var params = location.search.substr(1); // 获取参数 平且去掉？ 
    var ArrParam = params.split('&'); 
    if (ArrParam.length == 1) { 
        //只有一个参数的情况 
        return params.split('=')[1]; 
    } 
    else { 
         //多个参数参数的情况 
        for (var i = 0; i < ArrParam.length; i++) { 
            if (ArrParam[i].split('=')[0] == pname) { 
                return ArrParam[i].split('=')[1]; 
            } 
        } 
    } 
}  


 
$(document).ready(function() {
	var reMethod = "GET",pwdmin = 4,pwdmax = 20, telReg = /^1\d{10}$/ , msgReg = /^\d{6}$/;
	var emailReg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/; 
 
	/**
	 * 验证短信验证码
	 */
	function regMsgYzm(me){	
		//判断验证码是否是6位数
		var val=$(me).val();
		var phone=$("#mobi").val();
		//判断是否6位数
		if(!msgReg.test(val)){
			$('#msgyzm').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#mobimsgInfo').html("<i class='icon_error'></i><span>手机验证码必须为六位数.</span>");	
			$("#mobimsgInfo span").css("color","red");	
			//验证手机验证码是否正确
		}else{
			$('#mobimsgInfo').html("<i class='icon_ok'></i>");	
			$('#msgyzm').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});	
		}
		
	}
	
	
	
	
	
	function regMobi(){	
		
		if ($('#mobi').val() == "") {
			$('#mobi').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#userMobi').html("<i class='icon_error'></i><span>手机号码不能为空.</span>");	
			$('#userMobi span').css('color','red');	
			return false;
		} 		
		if ($('#mobi').val().length != "11") {
			$('#mobi').css({
				border: "1px solid red", 
				boxShadow: "0 0 2px red"
			});			
			$('#userMobi').html("<i class='icon_error'></i><span>手机号码须为11位字符.</span>");	
			$("#userMobi span").css("color","red");	
			return false;
		}
		if(!telReg.test($('#mobi').val())){
			$('#mobi').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userMobi').html("<i class='icon_error'></i><span>请输入正确的手机号码.</span>");
			$("#userMobi span").css("color","red");		
			return false;
		}  else {
			$('#userMobi').html("<i class='icon_ok'></i>");	 
			$('#mobi').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});	
			
		}	 
	}
	function regPasswd1(){
		if ($('#passwd').val() == "") {
			$('#passwd').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#pwdInfo1').html("<i class='icon_error'></i><span>密码不能为空.</span>");	
			$('#pwdInfo1 span').css('color','red');	
			return false;
		} 		
		if($('#passwd').val().indexOf(' ') >=0 ){
			$('#passwd').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#pwdInfo1').html("<i class='icon_error'></i><span>密码不能有空格.</span>");
			$("#pwdInfo1 span").css("color","red");		
			return false;
		}
		if ($('#passwd').val().length < pwdmin || $('#passwd').val().length > pwdmax) {		
			$('#passwd').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});				
			$('#pwdInfo1').html("<i class='icon_error'></i><span>密码不能少于" + pwdmin + "位,且不大于" + pwdmax + "位.</span>");	
			$("#pwdInfo1 span").css("color","red");	
			return false;
		} else { 
			$('#pwdInfo1').html("<i class='icon_ok'></i>");	
			$('#passwd').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});			 
		}
	}
	function regPasswd2(){
		if ($('#passwd2').val() == "") {
			$('#passwd2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#pwdInfo2').html("<i class='icon_error'></i><span>密码不能为空.</span>");	
			$('#pwdInfo2 span').css('color','red');	
			return false;
		} 
		if($('#passwd2').val().indexOf(' ') >=0 ){
			$('#passwd2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#pwdInfo2').html("<i class='icon_error'></i><span>密码不能有空格.</span>");
			$("#pwdInfo2 span").css("color","red");		
			return false;
		}
		if ($('#passwd2').val() != $('#passwd').val()) {	
			$('#passwd2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});		
			$('#pwdInfo2').html("<i class='icon_error'></i><span>两次密码不一致！</span>");	
			$("#pwdInfo2 span").css("color","red");	
			return false;
		}  else { 
			$('#pwdInfo2').html("<i class='icon_ok'></i>");
			$('#passwd2').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});			 
		}
	}
	function regImageYzm(){
		if ($('#imageyzm').val() == "") {
			$('#imageyzm').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo').html("<i class='icon_error'></i><span>验证码不能为空.</span>");	
			$("#yzmInfo span").css("color","red");	
			return false;
		} 
		if ($('#imageyzm').val().length != "4") {
			$('#imageyzm').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo').html("<i class='icon_error'></i><span>验证码须为4字符.</span>");	
			$("#yzmInfo span").css("color","red");	
			return false;
		} else if(yzm()==false){
			$('#imageyzm').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo').html("<i class='icon_error'></i><span>验证码不正确.</span>");	
			$("#yzmInfo span").css("color","red");	
			
		}else { 
			$('#yzmInfo').html("<i class='icon_ok'></i>");
			$('#imageyzm').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});	 
		}
	}


	function regPasswd3(){	
		if ($('#passwd3').val() == "") {
			$('#passwd3').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#pwdInfo3').html("<i class='icon_error'></i><span>密码不能为空.</span>");	
			$('#pwdInfo3 span').css('color','red');	
			return false;
		} 
		if($('#passwd3').val().indexOf(' ') >=0 ){
			$('#passwd3').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#pwdInfo3').html("<i class='icon_error'></i><span>密码不能有空格.</span>");
			$("#pwdInfo3 span").css("color","red");		
			return false;
		}

		if ($('#passwd3').val().length < pwdmin || $('#passwd3').val().length > pwdmax){
			//$('#passwd3').focus();	
			$('#passwd3').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#pwdInfo3').html("<i class='icon_error'></i><span>密码不能少于" + pwdmin + "位,且不大于" + pwdmax + "位.</span>");
			$("#pwdInfo3 span").css("color","red");		
			return false;
		} else { 
			$('#pwdInfo3').html("<i class='icon_ok'></i>");	
			$('#passwd3').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});			 
		}
	}
	function regPasswd4(){	
		if ($('#passwd4').val() == "") {
			$('#passwd4').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#pwdInfo4').html("<i class='icon_error'></i><span>密码不能为空.</span>");	
			$('#pwdInfo4 span').css('color','red');	
			return false;
		} 
		if($('#passwd4').val().indexOf(' ') >=0 ){
			$('#passwd4').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#pwdInfo4').html("<i class='icon_error'></i><span>密码不能有空格.</span>");
			$("#pwdInfo4 span").css("color","red");		
			return false;
		}
		if ($('#passwd4').val() != $('#passwd3').val()) {
			//$('#passwd4').focus();		
			$('#passwd4').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});		
			$('#pwdInfo4').html("<i class='icon_error'></i><span>两次密码不一致！</span>");	
			$("#pwdInfo4 span").css("color","red");	
			return false;
		}  else { 
			$('#pwdInfo4').html("<i class='icon_ok'></i>");	
			$('#passwd4').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});		 
		}
	}
	function regImageyzm2(){	
		if ($('#imageyzm2').val() == "") {
			$('#imageyzm2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo2').html("<i class='icon_error'></i><span>验证码不能为空.</span>");	
			$("#yzmInfo2 span").css("color","red");	
			return false;
		}	
		if ($('#imageyzm2').val().length != "4") {
			$('#imageyzm2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo2').html("<i class='icon_error'></i><span>验证码须为4字符.</span>");		
			$("#yzmInfo2 span").css("color","red");	
			return false;
		} else if(verify($('#imageyzm2').val())==false){
			$('#imageyzm2').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('#yzmInfo2').html("<i class='icon_error'></i><span>验证码不正确.</span>");	
			$("#yzmInfo2 span").css("color","red");	
			
		}else { 
			$('#yzmInfo2').html("<i class='icon_ok'></i>");	
			$('#imageyzm2').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});		 
		}		
	}
	
	$('#mobi').focus(function(){
		$('#userMobi').html("<i class='icon_attention'></i><span>请输入11位有效手机号.</span>");	
	});

	$('#mobi').blur(function(){
		regMobi();
	});
	
	$('#passwd').focus(function(){
		$('#pwdInfo1').html("<i class='icon_attention'></i><span>建议使用字母，数字和符号二种及以上组合，8-20字符.</span>");	
	});
	$('#passwd').blur(function(){
		regPasswd1();
	});
	
	$('#passwd2').focus(function(){
		$('#pwdInfo2').html("<i class='icon_attention'></i><span>请再次输入密码.</span>");	
	});
	$('#passwd2').blur(function(){
		regPasswd2();
	});
	
	$('#imageyzm').focus(function(){
		$('#yzmInfo').html("<i class='icon_attention'></i><span>请输入图中的验证码.</span>");	
	});
	$('#imageyzm').blur(function(){
		regImageYzm();
	});
	$('#msgyzm').focus(function(){
		$('#mobimsgInfo').html("<i class='icon_attention'></i><span>请输入手机短信验证码.</span>");	
	});
	$('#msgyzm').blur(function(){
		regMsgYzm(this);
	});
	
	
	
	
	$('#email').focus(function(){
		$('#userEmail').html("<i class='icon_attention'></i><span>请输入常用的邮箱地址.</span>");	
	});
	$('#email').blur(function(){
		regEmail();
	});
	
	$('#passwd3').focus(function(){
		$('#pwdInfo3').html("<i class='icon_attention'></i><span>建议使用字母，数字和符号二种及以上组合，8-20字符.</span>");	
	});
	$('#passwd3').blur(function(){
		regPasswd3();
	});
	
	$('#passwd4').focus(function(){
		$('#pwdInfo4').html("<i class='icon_attention'></i><span>请再次输入密码.</span>");	
	});
	$('#passwd4').blur(function(){
		regPasswd4();
	});
	
	$('#imageyzm2').focus(function(){
		$('#yzmInfo2').html("<i class='icon_attention'></i><span>请输入图中的验证码.</span>");	
	});
	$('#imageyzm2').blur(function(){
		regImageyzm2();
	});
	 

	
	

	$('#tel_email').focus(function(){ });
	$('#tel_email').blur(function(){
		if ($('#tel_email').val() == "" ) {
			$('#tel_email').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('.login_error').html("帐号不能为空.");	
			return false;
		} 
		if(!isNaN($('#tel_email').val())){
			if($('#tel_email').val().length != "11") {
				$('#tel_email').css({
					border: "1px solid red", 
					boxShadow: "0 0 2px red"
				});			
				$('.login_error').html("账号必须为邮箱或手机.");	
				return false;
			}else {
                $('.login_error').html("");
                $('#tel_email').css({
                    border: "1px solid #D7D7D7",
                    boxShadow: "none"
                });
            }
			if(!telReg.test($('#tel_email').val())){
				$('#tel_email').css({
					border: "1px solid red",
					boxShadow: "0 0 2px red"
				});
				$('.login_error').html("账号必须为邮箱或手机.");	
				return false;
			}else {
				$('.login_error').html("");	
				$('#tel_email').css({
					border: "1px solid #D7D7D7",
					boxShadow: "none"
				});	
			}
		}
	});
	
	$('#login_passwd').focus(function(){  });
	$('#login_passwd').blur(function(){
		if ($('#login_passwd').val() == "") {
			$('#login_passwd').css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});			
			$('.login_error').html("密码不能为空");
			return false;
		} 		 
		 else { 
				$('.login_error').html("");	
				$('#login_passwd').css({
					border: "1px solid #D7D7D7",
					boxShadow: "none"
				});
			}
	});
	
	
	$('.btn_layer').click(function(){
		$('.layer_jun').show();	
		setTimeout('layerTimeHide()',3000);
	});
	
});




function checkedThis(obj){  
  var boxArray = document.getElementsByName('zcxy');  
  	var id=$(obj).attr("id");
  	var i=id=="one"?0:1;
  
  
	  if( !boxArray[i].checked){  
		  boxArray[i].checked = false; 
		  $("."+id).attr('disabled',true); 
		  $("."+id).css({'background':'#ccc','border':'0','cursor':'default'});								  
	  } else {								  
		  boxArray[i].checked = true; 
		  $("."+id).attr('disabled',false);
		  $("."+id).css({'background':'#ff6672','border':'1px solid #ea5666','cursor':'pointer'});								  
	  }
}


function layerTimeHide(){
	$('.layer_jun').hide();	
}
 
function ShowDiv(show_div,bg_div){
	document.getElementById(show_div).style.display='block';
	document.getElementById(bg_div).style.display='block' ;
	var bgdiv = document.getElementById(bg_div);
	bgdiv.style.width = document.body.scrollWidth;
	// bgdiv.style.height = $(document).height();
	$("#"+bg_div).height($(document).height());
}
function CloseDiv(show_div,bg_div){
	document.getElementById(show_div).style.display='none';
	document.getElementById(bg_div).style.display='none';
}

