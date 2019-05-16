//获取页面元素对象
const oUphone = document.querySelector('#username');
const oUpwd = document.querySelector('#password');
const oLog = document.querySelector('#login');
const oTxt = document.querySelector('#txt');
//给按钮添加点击事件
oLog.onclick = ()=>{
    //获取用户名
    let uphone = oUphone.value;
    //获取密码
    let upwd = oUpwd.value;
    
    //获取cookie
    let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
    //将字符串转为对象
    let cookieObj = convertCookieStrToCookieObj(cookieStr);
    //判断对象中是否有登录的用户名
    if(uphone in cookieObj){
        if(upwd === cookieObj[uphone]){
            location.href = 'index.html';
            return;
        }else{
            oTxt.innerHTML = '密码错误！';
            return;
        }
        }else{
            oTxt.innerHTML = '用户名不存在！';
            return;
        }
    
    
}
//封装json字符串转json对象的函数
function convertCookieStrToCookieObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}