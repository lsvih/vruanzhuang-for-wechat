function copyjson(json) {
	if (typeof json == 'number' || typeof json == 'string' || typeof json == 'boolean') {
		return json;
	} else if (typeof json == 'object') {
		if (json instanceof Array) {
			var newArr = [],
				i, len = json.length;
			for (i = 0; i < len; i++) {
				newArr[i] = arguments.callee(json[i]);
			}
			return newArr;
		} else {
			var newObj = {};
			for (var name in json) {
				newObj[name] = arguments.callee(json[name]);
			}
			return newObj;
		}
	}
}

function fetchArray(e) {
	if (localStorage.getItem(e)) {
		return JSON.parse(localStorage.getItem(e));
	}
	return [];
}

function saveArray(e, f) {
	localStorage.setItem(e, JSON.stringify(value));
}


Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
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

function cart(type, id, name, num, price, img) {
	if (!localStorage.cart) {
		if (!localStorage.userinfo) {
			window.location.href = "login.html?lastpage=" + encodeURIComponent(window.location.href);
		} else {
			localStorage.cart = '{"goods":[]}';
		}
	}
	tempcart = JSON.parse(localStorage.cart);
	var k = 0;
	for (i = 0; i < tempcart.goods.length; i++) {
		if (tempcart.goods[i].id == id) {
			tempcart.goods[i].num = parseInt(tempcart.goods[i].num) + parseInt(num);
			k = 1;
			break;
		}
	}

	if (k == 0) {
		addjson = '{"type":"'+ type +'","id":"' + id + '","name":"' + name + '","price":"' + price + '","num":"' + num + '","img_src":"' + img + '"}';
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


function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}