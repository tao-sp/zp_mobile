/*
if ('this_is' == /an_example/) {
    do_something()
} else {
    var a = b ? (c % d) : e[f]
}
*/
document.write('<script language="javascript" src="http://chat56op.live800.com/live800/chatClient/floatButton.js?jid=1023674317&companyID=796416&configID=110365&codeType=custom"></script>');
document.write('<script language="javascript" src="http://chat56op.live800.com/live800/chatClient/monitor.js?jid=1023674317&companyID=796416&configID=110364&codeType=custom"></script>');
function live800_onlick() {
    document.getElementById("lim_mini_word").click();
    //resetpos();
    //window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
}
function resetpos()
{
    $("#lim_mini_chat").css("width",'400px').css("right","50%").css("top","50%").css("margin-right","-225px").css("margin-top", "-"+ $("#lim_mini_chat").height()/2 + "px");
    $("#lim_mini_chat").animate({right:"50%",top:"50%"});
}

$(function(){
    var checkTimes=0;
    if(document.getElementById("lim_mini_word")){
        document.getElementById("lim_mini_word").click();
    }
    var ivt_int  = setInterval(function(){
        if(document.getElementById("lim_mini_word")){
            document.getElementById("lim_mini_word").click();
            //resetpos();
            clearInterval(ivt_int);
        }else{
            checkTimes++;
            if(checkTimes>20){
                clearInterval(ivt_int);
            }
        }
    },10000);
});
/*
var tempStr = window.location.href;
var boola = tempStr.indexOf("gdzp.org");
var boolb = tempStr.indexOf("szzppx.com");
var boolc = tempStr.indexOf("zppx.org");
var boold = tempStr.indexOf("-");
var boole = tempStr.indexOf("szb");
if (boola > 0 && boold > 0) { (function() {
        var b = document.createElement("script");
        b.src = "http://chat56op.live800.com/live800/chatClient/monitor.js?jid=1023674317&companyID=796416&configID=110364&codeType=custom";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a)
    })();
    function live800_onlick() {
        window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
    }
} else {
    if (boole > 0 && boold < 0) { (function() {
            var b = document.createElement("script");
            b.src = "http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        })();
        function live800_onlick() {
            window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
        }
    } else { (function() {
            var b = document.createElement("script");
            b.src = "http://chat56op.live800.com/live800/chatClient/monitor.js?jid=1023674317&companyID=796416&configID=110364&codeType=custom";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        })();
        function live800_onlick() {
            window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
        }
    }
}
if (boolb > 0) { (function() {
        var b = document.createElement("script");
        b.src = "http://chat56op.live800.com/live800/chatClient/monitor.js?jid=1023674317&companyID=796416&configID=110364&codeType=custom";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a)
    })();
    function live800_onlick() {
        window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
    }
}
if (boolc > 0) { (function() {
        var b = document.createElement("script");
        b.src = "http://chat56op.live800.com/live800/chatClient/monitor.js?jid=1023674317&companyID=796416&configID=110364&codeType=custom";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a)
    })();
    function live800_onlick() {
        window.open("http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=796416&configID=110365&jid=1023674317", "", "location=no,width=900,height=600")
    }
}
*/