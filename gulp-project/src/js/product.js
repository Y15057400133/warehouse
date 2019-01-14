//product 产品页
require(["./requirejs.config"],()=>{
//引入产品页需要依赖的模块
require(["jquery","header","footer"],()=>{
class Product{
constructor(){
  this.init(); 
  this.spanclick();

}	
init(){
let len = $("#fram-ul li").length;
let liwidth =$("#fram-ul li").eq(0).width();
$("#fram-ul").width(len*liwidth);
}
spanclick(){
// let len = $("#fram-ul li").length;
// let liwidth =$("#fram-ul li").eq(0).width();
// $("#goPrev").on("click",function(){
// len--;
// $("#fram-ul li").css({marginleft:-len*liwidth});
// if(len>$("#fram-ul li"){
// $("#goPrev").off("click");
// }
// len = len;
// })
// 
// $("#goNext").on("click",function(){
// console.log(len);
// len++;
// console.log(len);
// $("#fram-ul").css({left:len*liwidth})
// if(len>$("#fram-ul li").length){
// $("#goNext").off("click");	
// }
// 
// })

}

}
new Product();

})	
})


// <div id="wrap-box-fram">
// <span id="go">&lt;</span>
// <ul id="fram-ul">
// <li><img src="/static/imgs/01%20(9).jpg" >  <a href="##">金刚4k</a></li>
// <li><a href="">金刚pro</a></li>
// <li><a href="">金刚T2</a></li>
// <li><a href="">金刚T2</a></li>
// <li><a href="">金刚T2</a></li>
// <li><a href="">金刚T2</a></li>
// <li><a href="">金刚T2</a></li>
// </ul>
// <span id="goNext">&gt;</span>	
// </div>