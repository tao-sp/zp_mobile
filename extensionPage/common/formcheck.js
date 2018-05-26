//通用表单验证	
$(function(){
	$('#myform').length>0 && $('#myform').submit(function(){
		return check_frm($(this).attr('id'));
	});
}); 

function check_frm(formid)
{
	var flag = true;
		var ipt_obj = $('#'+formid).find('input');
		ipt_obj.each(function(index,obj){
			var thisobj = $(this);
			switch(thisobj.attr('name'))
			{
				case 'info[name]':
					if(thisobj.val()==''){
						alert('姓名不能为空');
						flag =  false;
						return false;
					}else{
						var rel = new RegExp("^[\u4e00-\u9fa5]{2,4}$"); 
						if (!rel.test(thisobj.val())){ 
							alert("姓名格式有误"); 
							flag =  false;
							return false;
						} 
					}
					break;
				case 'info[mobile]':
					if(thisobj.val()==''){
						alert('电话不能为空');
						flag =  false;
						return false;
					}else if(thisobj.val().length < 11){
						alert('电话不能少于11位');
						flag =  false;
						return false;
					}else{
						var rel = new RegExp("^(1)[0-9]{10}$");
						if(!rel.test(thisobj.val()))
						{
							alert('电话格式不正确');
							flag =  false;
							return false;
						}
					}
					break;
				case 'info[E_mail]':
					if(thisobj.val()==''){
						alert('邮箱不能为空');
						flag =  false;
						return false;
					}
					break;
			}
		});
		if(flag == false) return false;
		return true;
}
/**
 * formid 表单ID
 * idval  formid的值
 * is_ajax 是否AJAX请求: true/false
 * alert_custom 是否自定义alert: true/false
 * num 图片编号：结合alert_custom使用
 * alert_service 是否弹出客服页面: true/false
*/
function ajaxPutData(formid,idval,is_ajax,alert_custom,num,alert_service)
{
	var is_ajax = is_ajax || false;
	var alert_custom = alert_custom || false;
	var num = num || 1;
	var alert_service = alert_service || false;
	var flag = true;
	if(check_frm(formid)==false) return false;
	if(is_ajax==true)
	 $.post('http://www.zppx.org/index.php?m=formguide&c=index&a=show&formid='+idval+'&siteid=1',$('#'+formid).serialize(),function(rs){
		if(rs.status == 0){alert(rs.msg);return false;}
		if(rs.status == 1){
			document.getElementById(formid).reset();
			if(alert_service==true){$(".closeb").click();$('#live800iconlink').click();return true;}
			alert_custom==false && alert(rs.msg);
			alert_custom==true && show_alert(num);
		}
	},'json');
}

/**
 * 自定义alert
*/
function show_alert(num,type)
{
	var type = type || '';
	if($('.win_box').length>0) $('.win_box').remove();
	var is_use_form = false;
	var content_form = '';
	var formid = type+'Form';
	if(type=='yszp')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="工程预算学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="ajaxPutData(\''+formid+'\',41,true,false,0,true)"></a>';
		content_form += '</form>';
	}

	if(type=='sydlb')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="摄影学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="ajaxPutData(\''+formid+'\',41,true,true,\'3-1\')"></a>';
		content_form += '</form>';
	}

	if(type=='gyzxkc')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="工业设计学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="ajaxPutData(\''+formid+'\',41,true,true,1)"></a>';
		content_form += '</form>';
	}

	if(type=='rzdlb')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="软装设计学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="ajaxPutData(\''+formid+'\',41,true,true,\'4-1\')"></a>';
		content_form += '</form>';
	}

	if(type=='rlxxx')
	{
		is_use_form = true;
		content_form += '<a class="kf-btn" href="javascript:;" onclick="$(\'#live800iconlink\').click()"></a><a class="kf-btn kf-btn2" href="javascript:;" onclick="$(\'#live800iconlink\').click()"></a>';
	}

	if(type=='xlzxhd')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url">';
		content_form += '<input type="hidden" name="info[classes]" value="心理咨询学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="ajaxPutData(\''+formid+'\',41,true,true,\'2-1\')"></a>';
		content_form += '</form>';
	}
	if(type=='xxsjhd')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url">';
		content_form += '<input type="hidden" name="info[classes]" value="形象设计学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="$(\'#live800iconlink\').click()"></a>';
		content_form += '</form>';
	}
	if(type=='cghd')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input class="ys-ipt3" type="text" name="info[weixin]" placeholder="请输入您的邮箱">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="采购师学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="$(\'#live800iconlink\').click()"></a>';
		content_form += '</form>';
	}
	if(type=='cg2hd')
	{
		is_use_form = true;
		content_form += '<form id="'+formid+'">';
		content_form += '<input class="ys-ipt1" type="text" name="info[name]" placeholder="请输入您的姓名">';
		content_form += '<input class="ys-ipt2" type="text" name="info[mobile]" placeholder="请输入您的手机">';
		content_form += '<input class="ys-ipt3" type="text" name="info[weixin]" placeholder="请输入您的QQ">';
		content_form += '<input type="hidden" name="info[url]" value="" class="url" >';
		content_form += '<input type="hidden" name="info[classes]" value="采购师学院">';
		content_form += '<input type="hidden" name="json" value="1">';
		content_form += '<input type="hidden" name="dosubmit" value="提交">';
		content_form += '<a class="ys-subbtn" href="javascript:void(0)" onclick="$(\'#live800iconlink\').click()"></a>';
		content_form += '</form>';
	}

	var content = '';
	content +='<div class="win_box" style="display:none;">';
content +='<div class="win"></div>';
content +='<div class="win_con">';
content +='<div class="win_body">';
content +='<a class="zp-layer-close closeb" href="javascript:;" title="关闭"></a>';
content +='<img id="imgSrc" src="statics/images/layer/1.png">';
if(is_use_form == true) content += content_form;
content +='</div>';
content +='</div>';
content +='</div>';
content +='<link rel="stylesheet" type="text/css" href="../common/css/simple-layer.css?t=201705171630">';
content +='</div>';
	$("body").append(content);
	var num = num || 1;
	var imgSrc = 'statics/images/layer/'+num+'.png?t=0001';
	$('#imgSrc').attr('src',imgSrc);
    var win = $(".win_box");
    var closeb = $(".closeb");
    win.show();
    closeb.click(function(){win.hide();});
    $('.url').val(window.top.location.href || window.location.href);
}
function formatDate (strTime,sepStr) {
	var strTime = strTime || new Date();
	var sepStr = sepStr || '';
    var date = new Date(strTime);
    return date.getFullYear()+sepStr+(date.getMonth()+1)+sepStr+date.getDate();
}