function startload() {
	document.getElementById("load").style.display = "block";

}

function stopload() {
	document.getElementById("load").style.display = "none";
}
if (localStorage.userinfo) {
	var strAccessToken = JSON.parse(localStorage.userinfo).access_token;
	var nUserId = JSON.parse(localStorage.userinfo).id;
}
var serverurl = "http://vruanzhuang.cn";
var apiurl = "http://vruanzhuang.cn/smart_matching/api/web/"
var appurl = serverurl + "/vrz/api/web";
var frontend = serverurl + "/web/project/vrz"

var colorpallte = ['#339999', '#cc99cc', '#ff9900', '#ccccff', '#0099cc', '#99cc33'];