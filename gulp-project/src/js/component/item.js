//template 符合AMD规范，有返回值需要接收
define(["jquery","template"],function($,template){
class Item{
constructor(){
	
}	
//得到路径，请求数据，先加载 再渲染解构，在load到页面
init(url){ 
new Promise((resolve,reject) =>{
$("#box2-wrap2-box").load("/html/component/item.html",()=>{
	resolve();
})	 	
}).then(()=>{
$.ajax({
url:url,
type:"get",
dataType:"json",
success:function(res){
if(res.res_code === 1){
// let list = res.res_body.data;	//声明list 
// 两个参数 1 即将渲染的script id  2对象 需要渲染的script中的数据
let html = template("list-template",{list:res.res_body.data});       
$("#box2-wrap2-box ul").html(html);	 
}

}
})		
})

}	
}
return new Item(); 
})