const oUphone = document.querySelector('#userphone');
const oUpwd = document.querySelector('#userpwd');
const oReg = document.querySelector('#sub');
const oTxt = document.querySelector('#txt');
//给按钮添加点击事件
		oReg.onclick =function(){
			//获取用户名
			let uphone = oUphone.value;
			//获取密码
			let upwd = oUpwd.value;
			//正则验证
			let ph =/^[1][3,4,5,7,8][0-9]{9}$/;
			let reg1 = /[!@#$%^&*()_?<>{}.]{1}/;
			let reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,20}/;
			let reg3 = /[a-zA-Z]+/;
			let reg4 = /[0-9]+/;
			if(!uphone){
				oTxt.innerHTML = '手机号不能为空！';	
			}else if(!(ph.test(uphone))){
					oTxt.innerHTML = '请输入正确的手机号';					
			}else if(ph){
				if(!upwd){
					oTxt.innerHTML = '密码不能为空！';
				}else if(!reg2.test(upwd)){
					oTxt.innerHTML = "长度在6-20位";
				}else if(!reg3.test(upwd)){
					oTxt.innerHTML = "需含有字母";
				}else if(!reg4.test(upwd)){
					oTxt.innerHTML = "需含有数字";
				}else if(!reg1.test(upwd)){
					oTxt.innerHTML = "需包含一个符号";
				}else if(reg1.test(upwd) && reg2.test(upwd) && reg3.test(upwd) && reg4.test(upwd)){
					oTxt.innerHTML = '';
					//获取cookie，判断当前cookie中用户名是否存在
					let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
					//将cookie字符串转为cookie对象
					let cookieObj = convertCookieStrToCookieObj(cookieStr);
					//判断对象中是否有当前注册的用户名这个属性
					if(uphone in cookieObj){
						oTxt.innerHTML = '用户名已存在！';
						return;
					}else{
						cookieObj[uphone] = upwd;
					}
					//将改变后的对象转为字符串
					cookieStr = JSON.stringify(cookieObj);
					//重新存入cookie
					$cookie('registors',cookieStr,10);
					alert('注册成功');
				}
			}
		}
		//封装一个将json字符串转为json对象的函数
		function convertCookieStrToCookieObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}	