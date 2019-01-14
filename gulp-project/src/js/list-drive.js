//引入配置模块 config   require参数一一对应，不能乱放
require(["./requirejs.config"],function(){
//基于jquery
require(["item","url", "template","jquery","header","footer"],(item,url)=>{
//接收参数，调用item的方法,为更加真实，配置url路径
item.init(url.baseuRl+"/list-drive");
class Drive{
constructor(){
this.init();   
}
init(url){
$("#box2-wrap ul").on("click","li",function(){
$(this).addClass("ac").siblings().removeClass("ac");	
})	
}
	
}
new Drive();
})		
})


