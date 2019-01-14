//写尾部功能  依赖jquery
define(["jquery"],()=>{
class Footer{
	constructor() {
	 this.init();   
	}
	init(){                       
	$("footer").load("/html/component/footer.html",function(){
	
	})	
	}
}
return new Footer();
})