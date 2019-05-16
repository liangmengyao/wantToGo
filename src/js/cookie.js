//创建或删除cookie
function $cookie(key,value,expires){
	//准备主键值对
	let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(!isNaN(expires)){
		let date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ';expires=' + date;
	}
	//创建cookie
	document.cookie = cookieText;
}
//获取cookie
function $getCookie(key){
	let arr = document.cookie.split('; ');
	for(let i = 0,len = arr.length;i < len;i ++){
		let list = arr[i].split('=');
		if(list[0] === encodeURIComponent(key)){
			return decodeURIComponent(list[1]);
		}
	}
}
