//模块化  1.config 首页业务逻辑
require(["./requirejs.config"],()=>{
//引入index需要依赖的模块
require(["jquery","header","footer","cookie"],()=>{
let $ul = $("#banner-div ul");
 let $imgs = $ul.children();
  let len =$imgs.length; //imgs的长度，	
  let btns=[];
  let $OL=$("#banner-div ol"); 
  let liwidth = $imgs.eq(0).width();
  let index =0;
for(let i =1;i<=len;i++){
 btns.push( $("<li>").html(null).addClass(i===1? "ac":"").appendTo($OL)); 
}
$ul.append($imgs.eq(0).clone());//生成第一张插入到尾部	

$ul.width((len+1)*liwidth);	  //设置ul的宽
//循环绑事件
$.each(btns,(i,$btn)=>{
$btn.on("click",function(){
$(this).addClass("ac").siblings().removeClass("ac");
// btns[index].removeClass("ac");
// $(this).addClass("ac");
index = $(this).index();
$ul.stop().animate({left:-index*liwidth});	//stop停止之前的动画
})	
})

$("#goPrev").on("click",function(){
btns[index].removeClass("ac");
index--;
if(index < 0){
$ul.css({left:-len*liwidth});
index =len-1; //下标
} 	
btns[index].addClass("ac");
$ul.stop().animate({left: -index*liwidth});
})	
$("#goNext").on("click",function(){
btns[index].removeClass("ac");
index++;
if(index >= len){
$ul.stop().animate({left:-len*liwidth},"slow",function(){
$ul.css({left:0});
});
index = 0;
}else{
$ul.stop().animate({left:-index*liwidth},"slow");	
}
btns[index].addClass("ac");	
})	

let timer =null;
$("#banner-div").hover(function(){
clearInterval(timer);	
},(function goplay(){
 timer = setInterval(function(){	
$("#goNext").trigger("click");	
},2000)	
return goplay;
})())



})
})


	


