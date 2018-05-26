//<script type="text/javascript" src="../common/jquery-1.11.3.min.js"></script>
//<script type="text/javascript" src="../common/formcheck.js"></script>

function requireJs(id,newJS)
{
	var oldjs = null; 
	var t = null; 
	var oldjs = document.getElementById(id); 
	if(oldjs) oldjs.parentNode.removeChild(oldjs); 
	var scriptObj = document.createElement("script"); 
	scriptObj.src = newJS; 
	scriptObj.type = "text/javascript"; 
	scriptObj.id   = id; 
	document.getElementsByTagName("head")[0].appendChild(scriptObj);
}
//reloadAbleJSFn('js_file_01','../common/jquery-1.11.3.min.js');
requireJs('js_file_02','../common/formcheck.js');