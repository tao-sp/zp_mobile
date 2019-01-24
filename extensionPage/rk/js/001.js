
//倒计时
//北京001
window.onload=function(){
	// 现在的时间点（在变）
// 未来的时间点（不变）
var iNow = new Date();
// var iNew = new Date( 2013, 10, 27,  21,56,0  );

var iNew = new Date( '11  11,2017');

var t = Math.floor((iNew - iNow)/1000);

var str = Math.floor(t/86400);

 document.getElementsByTagName('b')[0].innerHTML=str; 



};


