var js = document.getElementsByTagName("script");
var url = new Array();  
for (var i = 0; i < js.length; i++) {  
    if (js[i].src.indexOf("iflogin.js") >= 0) {  
        url = js[i].src.split('?');  
        url = url[1].split('=');  
    }
}
if(!localStorage.userinfo){
	window.location.href = 'login.html?lastpage=' + encodeURIComponent(url[1]);
}