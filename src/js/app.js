Array.prototype.removetheitem = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
Array.prototype.remove = function(dx) {
	if (isNaN(dx) || dx > this.length) {
		return false;
	}
	for (var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[dx]) {
			this[n++] = this[i]
		}
	}
	this.length -= 1
};

function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串   
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function cart(type, id, name, num, price, img, content) {
	if (!localStorage.cart) !localStorage.userinfo ? window.location.href = "login.html?lastpage=" + encodeURIComponent(window.location.href) : localStorage.cart = '{"goods":[]}';
	tempcart = JSON.parse(localStorage.cart);
	if (type == 1 || type == 2) {
		for (i = 0; i < tempcart.goods.length; i++) {
			if (tempcart.goods[i].id == id) {
				tempcart.goods[i].num = parseInt(tempcart.goods[i].num) + parseInt(num);
				type = 0;
				break;
			}
		}
	}

	if (type != 0) {
		addjson = '{"type":"' + type + '","id":"' + id + '","name":"' + name + '","price":"' + price + '","num":"' + num + '","img_src":"' + img + '","content":' + content + '}';
		addjson = JSON.parse(addjson);
		(tempcart.goods).push(addjson);
	}
	localStorage.cart = JSON.stringify(tempcart);
	mui.toast("商品已成功加入购物车！")
}

function getDate(tm) {
	var tt = new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
	return tt;
}