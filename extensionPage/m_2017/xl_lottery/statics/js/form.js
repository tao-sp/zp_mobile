//通用表单验证

function check_frm(formid) {
    var flag = true,
        ipt_obj = $('#'+formid).find('input');
    ipt_obj.each(function(index,obj){
        var thisobj = $(this);
        switch(thisobj.attr('name')) {
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
 * num 表单编号：
 * alert_service 是否弹出客服页面: true/false
 */

function ajaxPutData(formid,idval,num,msg)
{
    if(num){
        num = num;
    }else{
        num = 0;
    }
    var msg=msg||"\n" +"老师将尽快与您联系！<br/>\n" +"我们将竭诚为您服务<br/>\n" +"你的满意是对我们最大的肯定！\n" ,
        titarr = ['提交成功','申请成功','获得优惠成功'];
    var flag = true;
    if(check_frm(formid)==false) return false;
    $.post('http://www.zppx.net/index.php?m=formguide&c=index&a=show&formid='+idval+'&siteid=1',
        $('#'+formid).serialize(),function(rs){
            if(rs.status == 0){showMsg(false,0,rs.msg);return false;}
            if(rs.status == 1){
                document.getElementById(formid).reset();
                //$(this).parents('.modal').hide();
                showMsg(true,num,msg,titarr);
                return 1;
            }
        },'json');
}

function showMsg(re,num,msg,titarr)
{
    var re = re ? titarr[num] : '提交失败！';
    var $respondH2 = $('#respond-h2'),
        $respondP = $('#respond-p');
    $respondH2.text(re);
    $respondP.html(msg);
    $('#layer').show(400);
    $('#layer').find('.layer-bg').show(400);
    $('#layer').find('.modal').last().show(400).siblings('.modal').hide();
}

/**
 * 自定义alert
 */

function formatDate (strTime,sepStr) {
    var strTime = strTime || new Date();
    var sepStr = sepStr || '';
    var date = new Date(strTime);
    return date.getFullYear()+sepStr+(date.getMonth()+1)+sepStr+date.getDate();
}
