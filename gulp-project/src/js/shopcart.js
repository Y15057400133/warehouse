//模块化  1.config 
require(["./requirejs.config"],()=>{
//引入server需要依赖的模块
require(["jquery","header","footer","cookie"],()=>{
class Cart{
constructor(){
  this.init();
  this.value = $(".settleinput").val();
  this.json = JSON.parse($.cookie("commodity"));
  this.spanclick();
  this.deleteclick();
	
  //计算总价
  this.calculate();  
}	
init(){
let arr = JSON.parse($.cookie("commodity")) 
let str="";
for(let value of arr){
str+=`<div id="div" class="div" data-id =${value.id}>
	 <div id="box1">
	 <dl id="div-dl">
		<dt id="div-dt" class="div-dt"> <img src=${value.imgsrc}> </dt>
		<dd id="div-dd">${value.title}</dd>
	</dl>		
	</div>	
	<div id="box2">
	<span id="subtractbtn" class="subtractbtn">-</span>
	<input type="text" name="" id="settleinput" class="settleinput" value=${value.num} />
	<span id="plusbtn" class="plusbtn">+</span>
	</div>
	<div id="box3">
		${value.price}元
	</div>
	<a href="##" class="delete">删除</a>
	</div>`;
}
$("#settle").before(str);
}



// 给加减点击事件，刷新cookie 
spanclick(){
let _this =this;
let arr=[];
$(".plusbtn").on("click",function(){
let num = $(this).siblings("#settleinput").val();
$(this).siblings("#settleinput").val(++num);
let Parentnum = $(this).parent().parent(".div").attr("data-id");
//判断 cookie中有没有相同的值
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == Parentnum){
	arr[i].num++;
}
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
 _this.calculate();
})

$(".subtractbtn").on("click",function(){
let num = $(this).siblings("#settleinput").val();
$(this).siblings("#settleinput").val(--num);
let Parentnum = $(this).parent().parent(".div").attr("data-id");
if(num<=1){
num=1;
$(this).siblings("#settleinput").val(1);
alert("亲，不能再点了/(ㄒoㄒ)/~~")
}

//判断 cookie中有没有相同的值
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == Parentnum){
arr[i].num--;
if(arr[i].num<=1){
arr[i].num=1;
$(this).siblings("#settleinput").val(1);
}
}
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
 _this.calculate();
})
//失去焦点
$(".settleinput").on("blur",function(){
let Parentnum = $(this).parent().parent(".div").attr("data-id");
let reg =/^[1-9]\d*$/;
let num2=$(this).val();
if(reg.test(num2)){
//判断 cookie中有没有相同的值
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == Parentnum){
  arr[i].num = num2;
}
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
 _this.calculate();	
}else{
alert("输入错误！");
window.location.reload();
}
})

}
//点击删除按钮 ，删除cookie数据，删除购物车数据
deleteclick(){
let _this =this;
let arr=[];
$(".delete").on("click",function(){
let parents = $(this).parent();
let Parentnum = $(this).parent().attr("data-id");
//判断 cookie中有没有相同的值
if($.cookie("commodity")){
 arr = JSON.parse($.cookie("commodity"))
}else{
 arr=[];
}
for(let i=0;i<arr.length;i++){
if(arr[i].id == Parentnum){
if(confirm("确定不买我吗？亲")){
parents.remove();
arr.splice(arr[i],1);
}
}
}
$.cookie("commodity",JSON.stringify(arr),{expires:1,path:"/"});
_this.calculate();  
})	
}

// 计算总价
calculate(){
let arr = JSON.parse($.cookie("commodity"));
let sum=0;
let num = 0;
for(var value of arr){
num = value.price*value.num;
sum+=num;
}
let sumone=sum.toFixed(2);
$("#settlespan").html(sumone);
}
}

new Cart();
})
	
})





