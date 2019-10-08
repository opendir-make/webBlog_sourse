// 换肤
var i=-1;
function changeimg(){
	var images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'];
	if(i<images.length-1){
		i++;
	}else{
		i=0;
	}
	var body=document.getElementById("body");
	body.style.backgroundImage="url(../images/"+images[i]+")";
}

// 返回顶部
var timer = null;
function returnTop(){
	cancelAnimationFrame(timer);
	timer = requestAnimationFrame(function fn(){
		var oTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(oTop > 0){
			document.body.scrollTop = document.documentElement.scrollTop = oTop - 80;
			timer = requestAnimationFrame(fn);
		}
		else{
			cancelAnimationFrame(timer);
		} 
	});
}

// 随机背景图
function randomApi(){
	var body=document.getElementById("body");
	body.style.backgroundImage="url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)";
	omit_text();
}

// 省略前言
function omit_text(){
	var list=document.getElementsByClassName("qianyan");
	for(var i=0;i<list.length;i++){
		var oBox=document.getElementsByClassName("qianyan")[i];
		var demoHtml = oBox.innerHTML.slice(0,88)+'......';
		oBox.innerHTML = demoHtml;
	}
}