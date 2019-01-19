// JavaScript Document
function focusMod(divLo){
	//var sWidth = $(".gkgg01").width(); //��ȡ����ͼ�Ŀ�ȣ���ʾ�����
	var sWidth = divLo.width() ;
	var len = divLo.find("ul li").length; //��ȡ����ͼ����. 
	
	var index = 0;
	var picTimer;
 	//alert(sWidth);
	
	//���´���������ְ�ť�Ͱ�ť��İ�͸������������һҳ����һҳ������ť
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	//btn += "</div><a class='mod_pre' href='javascript:'><i class='mod_l'></i></a><a class='mod_next' href='javascript:'><i class='mod_r'></i></a>";
	btn += "</div><a class='mod_pre' href='javascript:;' target='_self'>&lt;</a><a class='mod_next' href='javascript:;' target='_self'>&gt;</a>";
	divLo.append(btn);  
	divLo.find(".btnBg").css("opacity",0.5);

	//ΪС��ť�����껬���¼�������ʾ��Ӧ������
	divLo.find(".btn span").css("opacity",0.4).mouseenter(function() {
		index = divLo.find(".btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	

	//��һҳ��ť
	divLo.find(".mod_pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//��һҳ��ť
	divLo.find(".mod_next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
 
 

	//ΪС��ť�����껬���¼�������ʾ��Ӧ������
	$(".btn li").css("opacity",0.4).mouseenter(function() {
		index = $(".btn li").index(this);	
		showPics(index);	 
	}).eq(0).trigger("mouseenter");
	

	//����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
	divLo.find("ul").css("width",sWidth * (len));
	
	//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
	divLo.hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);		 
			index++;
			if(index == len) {index = 0;}
		},4000); //��4000�����Զ����ŵļ������λ������
	}).trigger("mouseleave");
	
	//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
	function showPics(index) { //��ͨ�л�
		var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
		divLo.find("ul").stop(true,false).animate({"left":nowLeft},300); //ͨ��animate()����ulԪ�ع������������position	 
		//$("#gkfocus .btn span").removeClass("on").eq(index).addClass("on"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
		divLo.find(".btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��

	}
}
