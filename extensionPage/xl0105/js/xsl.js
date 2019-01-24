window.onload=function(){

//首屏div高
	var heights=$(".ban").height();
	$(".banner").css("height",heights);

	//首屏
	// 	var ban=document.getElementsByClassName("ban");
	// 	var ban_btn=document.getElementsByClassName("ban-btn");
	// 	var ban_btns=document.getElementById('ban-btns');
	// 	var index=0;
	// 	function cc(){
	// 		ban_btns.style.background="#fff";
	// 		ban_btn[index].style.background="#00dfb9";
	// 		ban_btns=ban_btn[index];
	// 		for(var i=0;i<ban.length;i++){
	// 			ban[i].style.opacity=0;
	// 			ban[i].style.zIndex=100;
	// 		}
	// 		ban[index].style.opacity=1;
	// 		ban[index].style.zIndex=100;
	// 		index++;
	// 		if(index==3){
	// 			index=0
	// 		}
	// 	}
	// 	var timeId=setInterval(cc,5000);
	// for(var i=0; i<ban_btn.length; i++){
	// 	ban_btn[i].index=i;
	// 	ban_btn[i].onmouseover=function(){
	// 		clearInterval(timeId);
	// 		ban_btns.style.background='#fff';
	// 		this.style.backgroundColor='#00dfb9';
	// 		ban_btns=this;
	// 		for(var i=0;i<ban.length;i++){
	// 			ban[i].style.opacity=0;
	// 			ban[i].style.zIndex=100;
	// 		}
	// 		ban[this.index].style.opacity=1;
	// 		ban[this.index].style.zIndex=100;
	// 	};
	// 	ban_btn[i].onmouseout=function(){
	// 		index=this.index;
	// 		clearInterval(timeId);
	// 		timeId=setInterval(cc,5000);
	// 	};
	// }

		//次屏
		var p2t=document.getElementsByClassName("p2-t");
		var conp2=document.getElementsByClassName("con-p2");
		for (var i = 0; i <p2t.length; i++) {
			p2t[i].index=i;
			p2t[i].onclick=function(){
				
				for(var i=0;i<p2t.length;i++){
					p2t[i].style.borderBottom="8px solid #fff";
					p2t[i].style.color="#000";
					conp2[i].style.opacity=0;
					conp2[i].style.zIndex=0;
				}
				p2t[this.index].style.borderBottom="8px solid #00dfb9";
				p2t[this.index].style.color="#00dfb9";
				conp2[this.index].style.opacity=1;
				conp2[this.index].style.zIndex=1;
			}

		}

		//三屏
		   /*var p3t=document.getElementsByClassName("p3-t");
		   var conp3=document.getElementsByClassName("p3-con");
		   for(var i=0;i<p3t.length;i++){
			//?
			p3t[i].index=i;
			p3t[i].onclick=function(){
				for(var i=0;i<p3t.length;i++){
					p3t[i].style.background="#183137";
					p3t[i].style.color="#b7b7b7";
					conp3[i].style.opacity=0;
					conp3[i].style.zIndex=0;
				}
				p3t[this.index].style.background="#186362";
				p3t[this.index].style.color="#fff";
				conp3[this.index].style.opacity=1;
				conp3[this.index].style.zIndex=1;
			}
		}*/ 

		//五屏
		var li5=document.getElementsByClassName("p5-li");
		var btn5=document.getElementsByClassName("p5-la");
		console.log(btn5)
		var ind=0;
		function dd(){
			for(var i=0;i<btn5.length;i++){
				li5[i].style.opacity=0;
				li5[i].style.zIndex=0;
				btn5[i].style.border="2px solid #fff";
				btn5[i].style.color="#fff";
			}
			li5[ind].style.opacity=1;
			li5[ind].style.zIndex=1;
			btn5[ind].style.border="2px solid #00dfb9";
			btn5[ind].style.color="#00dfb9";
			ind++;
			if(ind==3){
				ind=0
			}
		}
		var time5=setInterval(dd,1200);
		for(var i=0;i<btn5.length;i++){
			btn5[i].index=i;
			btn5[i].onmouseover=function(){
				clearInterval(time5);
				for(var i=0;i<btn5.length;i++){
					btn5[i].style.border="2px solid #fff";
					btn5[i].style.color="#fff";
					li5[i].style.opacity=0;
					li5[i].style.zIndex=0;
				}
				btn5[this.index].style.border="2px solid #00dfb9";
				btn5[this.index].style.color="#00dfb9";
				li5[this.index].style.opacity=1;
				li5[this.index].style.zIndex=1;
			}
			btn5[i].onmouseout=function(){
				ind=this.index;
				clearInterval(time5);
				time5=setInterval(dd,1200);
			}
		}
		//新增八屏
		var btn8=document.getElementsByClassName("p8-btn");
		var li8=document.getElementsByClassName("p8-li");
		for(var i=0;i<btn8.length;i++){
			btn8[i].index=i;
			btn8[i].onmouseover=function(){
				for(var i=0;i<btn8.length;i++){
					btn8[i].style.backgroundPosition="left";
					li8[i].style.opacity=0;
					li8[i].style.zIndex=0;
				}
				btn8[this.index].style.backgroundPosition="right";
				li8[this.index].style.opacity=1;
				li8[this.index].style.zIndex=1;
			}
		}

		//导航
		var p3_bto=document.getElementsByClassName("part3-bto")[0];
		document.body.onmousewheel=function(){
			var scroll=document.body.scrollTop||document.documentElement.scrollTop;
			var head=document.getElementsByClassName("head")[0];
			if(scroll<300){
				head.style.display="block";
			}else{
				head.style.display="none";
			}
			// if(scroll>=1000){
			// 	p3_bto.style.display="block";
			// }else{
			// 	p3_bto.style.display="none";
			// }
		}

		document.body.addEventListener("DOMMouseScroll", function() {
           	var scroll=document.body.scrollTop||document.documentElement.scrollTop;
			var head=document.getElementsByClassName("head")[0];
			if(scroll<300){
				head.style.display="block";
			}else{
				head.style.display="none";
			}
			if(scroll>=1900){
				p3_bto.style.display="block";
			}else{
				p3_bto.style.display="none";
			} 
        });
		// window.onmousewheel=function(){
		// 	var scroll=document.body.scrollTop||document.documentElement.scrollTop;
		// 	var head=document.getElementsByClassName("head")[0];
		// 	if(scroll<300){
		// 		head.style.display="block";
		// 	}else{
		// 		head.style.display="none";
		// 	}
		// 	if(scroll>=1900){
		// 		p3_bto.style.display="block";
		// 	}else{
		// 		p3_bto.style.display="none";
		// 	}
		// }

		//新增十七屏
		var p17=document.getElementsByClassName("p17-s")[0];
		console.log(p17)
		var num=p17.innerHTML;
		var t17=setInterval(function(){
			if(num==0){
				p17.innerHTML=0;
				clearInterval(t17);
				return;
			}
			p17.innerHTML=num;
			num--;
		},60000)
}


