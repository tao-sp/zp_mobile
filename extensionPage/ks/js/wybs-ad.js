 /**
  *	轮播处理
  */
  function handleLo(){
	  console.log(222);
	  $.each($(".divLo"),function(index,obj){
		  focusMod($(obj));
	  })
  }


$(function(){
			handleLo();
})