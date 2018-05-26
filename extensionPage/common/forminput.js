function customerInput(form_id)
{
    //阻止默认提交事件
    event.preventDefault();

    $.ajax({
        url:"http://www.gdzp.org/index.php/customer",
        data:$("#"+form_id).serialize(),
        dataType:"json",
        type: 'POST',
        success: function(rs){
            alert(rs.msg);
        }
    });
    return false;
}