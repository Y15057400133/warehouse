//模块化  1.config 
require(["./requirejs.config"],()=>{
//引入server需要依赖的模块
require(["jquery"],()=>{
class Register{
constructor(){
this.reg = /^[1-9]\w{5,17}$/g;  //用户名不能包含特殊字符（只能是数字字母下划线）
this.regpsw =/^.{6,}$/;          //密码六位以上
this.emlireg =/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/; //e、邮箱地址验证 123456@qq.com
this.init();
this.flag=false;
}
init(){
let _this =this;
$("#registerbtn").on("click",function(e){
e.preventDefault();

//用户名判断
if(_this.reg.test($("#username").val()) && $("#username").val() !=null){
_this.flag=true;
}else{
alert("用户名错误，请重新注册");
location.reload();
return _this.flag;
}

//密码判断
if(_this.regpsw.test($("#password").val()) && $("#password").val() !=null){
_this.flag=true;	
}else{
alert("密码错误,请重新注册");
location.reload();
return _this.flag;
}

if($("#password2").val() === $("#password").val()){
_this.flag=true;	
}else{
alert("密码不一致，请重新注册");
location.reload();
return _this.flag;	
}
//邮箱判断
if(_this.emlireg.test($("#email").val()) && $("#email").val() !=null){
_this.flag=true;
}else{
alert("邮箱输入错误，请重新注册");
location.reload();
return _this.flag;		
}
//满足正则  提交ajax请求
if(_this.flag === true){
_this.request();
}

})	  
}	
request(){
$.ajax({
url:"http://localhost/project4/api/v1/Insert.php",
type:"POST",
data:{
"username":$("#username").val(),
"password":$("#password").val(),
"email":$("#email").val()
},
success:function(res){
if(confirm("注册成功，去登陆")){
window.location.href="/html/login.html";
}
},
dataType:"json"
})
}
}	
new Register();	
})
})
	