//模块化  1.config 
require(["./requirejs.config"],()=>{
//引入server需要依赖的模块
require(["jquery","cookie"],()=>{
class Login{
constructor() {
 this.init();  
}	
init(){
$("#loginbtn").on("click",function(e){
e.preventDefault();
$.ajax({
url:"http://localhost/project4/api/v1/select.php",
type:"POST",
data:{
"username":$("#username").val(),
"password":$("#password").val()
},
success:function(res){
if(res.res_code){
$.cookie("username",res.res_body.username,{expires:3,path:"/"});
window.location.href="/index.html";
}
},
dataType:"json"
})
})	
}	
}
	
	
new Login();
})
	
})

