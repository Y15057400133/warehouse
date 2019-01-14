//引入配置模块 config
require(["./requirejs.config"],function(){
//基于jquery
require(["url","jquery","header","footer","cookie"],(url)=>{
class Details{
constructor(){
 this.move();
 this.obj={
num:$("#settleinput").val()
 };
 this.spanclick();
 this.num=$("#settleinput").val();
 this.shopclick();
 this.spannum=0;
 this.shopcartclick();
 this.init(url,this.obj); 
 this.move();
}
init(url,obj){
let arrsearch = location.search.slice(1).split("=");   //得到location中search的id值 返回数组
let searchObj={};
//赋值给对象
searchObj[arrsearch[0]]=arrsearch[1]; 
$.ajax({
url:url.baseuRl+"/details",
type:"get",
data:searchObj,
dataType:"json",
success:function(res){
if(res.res_code === 1){
//渲染详情页面
$("#titleid").html(res.res_body.title).css({color:"red"});
$("#baradtitle").html(res.res_body.brandtitle).css({color:"red"});
$("#titlecpu").html(res.res_body.titleCPU).css({color:"red"});
$("#main-div2-box img").attr("src",res.res_body.imgs);
$("#wrap-ul img").eq(0).attr("src",res.res_body.imgs);
$("#wrap-ul img").eq(1).attr("src",res.res_body.imgs2);
$("#wrap-ul img").eq(2).attr("src",res.res_body.img3);
$("#wrap-ul img").eq(3).attr("src",res.res_body.imgs4);
$("#wrap-ul img").eq(4).attr("src",res.res_body.imgs5);
$("#Imgdiv-wrap img").attr("src",res.res_body.imgs5);
$("#Last-div3-span").html(res.res_body.price+"￥");
obj.id = searchObj.id;
obj.price = res.res_body.price;
obj.title = res.res_body.title;
obj.imgsrc = res.res_body.imgs;
}
}
})

}
spanclick(){
$("#plusbtn").on("click",function(){
$("#settleinput").val(++this.num);
this.obj.num = $("#settleinput").val();
}.bind(this))	
$("#subtractbtn").on("click",()=>{
$("#settleinput").val(--this.num);
this.obj.num = $("#settleinput").val();
if(this.num<=1){
this.num=1;
this.obj.num = $("#settleinput").val(1);
alert("亲，不能再点了/(ㄒoㄒ)/~~");
}

})			
}
shopclick(){
let _this = this;
let flag = true;
let arr=[];
$("#lastH4").on("click",function(){
_this.spannum++;
$("#numspan").html(_this.spannum);
///存cookie   商品
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == _this.obj.id){
	arr[i].num++;
	flag=false;
}
}
if(flag==true){
arr.push(_this.obj);
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
})
}
//立即购买至少存一条cookie
shopcartclick(){
let _this = this;
let flag = true;
let arr=[];
$("#shop").on("click",function(){
window.location.href="http://localhost:4000//html/shopcart.html";
})
$("#firstH4").on("click",function(){
///存cookie   商品
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == _this.obj.id){
	arr[i].num++;
	flag=false;
}
}
if(flag==true){
arr.push(_this.obj);
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
window.location.href="http://localhost:4000//html/shopcart.html";	
})
}

move(){
let Fdj = $("#fdjspan");
let bigImg =$("#wrap-div img");
//图片的移入移出
$("#wrap-ul li").stop().hover(function(){     
let src = $(this).children().children().attr("src");
$("#main-div2-box img").attr("src",src);
},function(){
let src = $(this).children().children().attr("src");
$("#main-div2-box img").attr("src",src);
})	
//放大镜的移入移出
$("#main-div2-box").stop().hover(function(){
let src = $(this).children().attr("src");
$("#wrap-div img").attr("src",src);
$("#right-box").hide();
$("#wrap-div").show();
Fdj.show();	
},function(){
$("#right-box").show();	
$("#wrap-div").hide();	
Fdj.hide();	
Fdj.css({left:"0px",top:"0px"});
})
//移动事件
$("#main-div2-box").on("mousemove",function(e){
var left = e.clientX - $("#main-div2-box").offset().left-Fdj.outerWidth()/2;
var top = e.clientY - $("#main-div2-box").offset().top-Fdj.outerHeight()/2+$(window).scrollTop(); 
if(left<0) left=0;
if(top<0) top=0;
if(left>$("#main-div2-box").outerWidth()-Fdj.outerWidth())
left=$("#main-div2-box").outerWidth()-Fdj.outerWidth();
if(top>$("#main-div2-box").outerHeight()-Fdj.outerHeight())
top=$("#main-div2-box").outerHeight()-Fdj.outerHeight();
Fdj.css({"left":left,"top":top});
bigImg.css({"left":-1.2*left,"top":-1.2*top});
})

}

}
 new Details();
})		
})

