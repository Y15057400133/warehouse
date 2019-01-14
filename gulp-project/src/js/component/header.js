//写头部功能  依赖jquery
define(["jquery","cookie"],()=>{
class Header{
	constructor(){
	 this.init();
	this.flag=true;
	}
	init(){     
// 	$("header").load("/html/component/header.html",function(){});初始化  加载头部html
// 	}
	new Promise( (resolve,reject) =>{
	$("header").load("/html/component/header.html",function(){
		resolve();
	})
}).then(()=>{
		// 兑现承诺时触发
	this.move();
	this.clickSpan();
	this.greet();
	this.loginclick();
	this.Boxmove();
	})
	}
move(){
let headerLI=$("#header-ul li")
// 移入 移出  循环
headerLI.each(function(i,item){
$(item).hover(function(){
$(this).addClass("Liac").siblings().removeClass("Liac");  
if($(item).index() === 0){
$("#box-ul").slideUp("2000","linear",function(){})
}else if($(item).index() === 1){
$("#box-ul").stop().slideDown("slow","linear",function(){})
$("#product-ul").css({display:"block"}).siblings().css({display:"none"})
}else if($(item).index() === 2){
$("#box-ul").stop().slideDown("slow","linear",function(){})
$("#server-ul").css({display:"block"}).siblings().css({display:"none"})	
}else if($(item).index() === 3){
$("#box-ul").stop().slideDown("slow","linear",function(){})
$("#shop-ul").css({display:"block"}).siblings().css({display:"none"})		
}else if($(item).index() === 4){
$("#box-ul").stop().slideDown("slow","linear",function(){})
$("#community-ul").css({display:"block"}).siblings().css({display:"none"})	
}
},function(){
if($(item).index() === 0){
$("#box-ul").stop().slideUp("2000","linear",function(){})
}else{
$("#box-ul").stop().slideUp("2000","linear",function(){})	
}
})
})
}
Boxmove(){
$("#box-ul").hover(function(){
$(this).stop().slideDown("slow","linear",function(){
$(this).addClass("ulac");
})
},function(){
$(this).stop().slideUp("slow","linear",function(){
$(this).removeClass("ulac");
});

})
}
//span的点击事件
clickSpan(){
let _this=this;
// if(_this.flag === true){
$("#eRrorbtn").on("click",function(){
if(_this.flag === true){
$("#header-middle").removeClass("header-middle").addClass("header-middle2");
$(this).css({backgroundImgs:"/static/imgs/fang2.png"})
$(this).addClass("errorspan");
_this.flag = false;	
}else if(_this.flag === false){
$("#header-middle").removeClass("header-middle2").addClass("header-middle")
$(this).removeClass("errorspan");
$(this).css({backgroundImgs:"/static/imgs/fang2.png"})
_this.flag = true;
}
})
}
loginclick(){
$("#loginbtn").on("click",function(){
window.location.href="/html/login.html";
})
}
//欢迎用户
greet(){
//判断cookie，，跳转页面
if(!$.cookie("username")){
$("#header-Span").css({display:"none"});
}else{
	$("#header-Span").addClass("LastSpan");
	$("#header-Span").html("欢迎您"+$.cookie("username")+"用户");	
}


}	
}
return new Header();
})
