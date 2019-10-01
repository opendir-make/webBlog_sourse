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
	omit_text();
}

function photographOnload(){
	var body=document.getElementById("body");
	body.style.backgroundImage="url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)";
	var screenWidth=window.screen.width;
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var home_article=document.getElementById("home-article");
	home_article.style.width=screenWidth*0.7+"px";
	left.style.width=screenWidth*0.7*0.45+"px";
	left.style.height=screenWidth*0.7*0.45+"px";
	right.style.width=screenWidth*0.7*0.45+"px";
	right.style.height=screenWidth*0.7*0.45+"px";
	var pHeaderH1=document.getElementById("pho_header1");
	pHeaderH1.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pHeaderH2=document.getElementById("pho_header2");
	pHeaderH2.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pho_container1_1H=document.getElementById("pho_container1_1");
	pho_container1_1H.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pho_container1_2H=document.getElementById("pho_container1_2");
	pho_container1_2H.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pho_container2_1H=document.getElementById("pho_container2_1");
	pho_container2_1H.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pho_container2_2H=document.getElementById("pho_container2_2");
	pho_container2_2H.style.height=screenWidth*0.7*0.45*0.33+"px";
	var pho1H=document.getElementById("pho1");
	pho1H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho2H=document.getElementById("pho2");
	pho2H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho3H=document.getElementById("pho3");
	pho3H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho4H=document.getElementById("pho4");
	pho4H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho5H=document.getElementById("pho5");
	pho5H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho6H=document.getElementById("pho6");
	pho6H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho7H=document.getElementById("pho7");
	pho7H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho8H=document.getElementById("pho8");
	pho8H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho9H=document.getElementById("pho9");
	pho9H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho10H=document.getElementById("pho10");
	pho10H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho11H=document.getElementById("pho11");
	pho11H.style.width=screenWidth*0.7*0.45*0.31+"px";
	var pho12H=document.getElementById("pho12");
	pho12H.style.width=screenWidth*0.7*0.45*0.31+"px";
}
function omit_text(){
	var oBox=document.getElementById('qianyan');
	var demoHtml = oBox.innerHTML.slice(0,66)+'......';
	oBox.innerHTML = demoHtml;
}
function detailOnload(){
	var body=document.getElementById("body");
	body.style.backgroundImage="url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)";
	var screenWidth=window.screen.width;
	var article=document.getElementById("article");
	article.style.width=screenWidth*0.6+"px";
 	var article_body=document.getElementById("article-body");
 	article_body.style.width=screenWidth*0.6*0.85+"px";
 }