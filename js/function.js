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
function randomApi(){
	var body=document.getElementById("body");
	body.style.backgroundImage="url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)";
	var screenWidth=window.screen.width;
	var home_article=document.getElementById("home-article");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	home_article.style.width=screenWidth*0.9+"px";
	left.style.width=screenWidth*0.9*0.6+"px";
	right.style.width=screenWidth*0.9*0.28+"px";
}