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

//获取当前时间
function getTime(){
    var now=new Date();
    var time=now.toDateString();
    var date=document.getElementById("date");
    date.innerHTML=time;
 }
 setInterval("getTime()");
 
//鼠标点击特效
  var a_idx = 0; 
jQuery(document).ready(function($) { 
	$("body").click(function(e) { 
		var a = new Array("学习","娱乐","云旅游","敲代码","电协程序部"); 
		var $i = $("<span></span>").text(a[a_idx]); 
		a_idx = (a_idx + 1) % a.length; 
		var x = e.pageX, 
		y = e.pageY; 
		$i.css({ 
			"z-index": 999999999999999999999999999999999999999999999999999999999999999999999, 
			"top": y - 20, 
			"left": x, 
			"position": "absolute", 
			"font-weight": "bold", 
			"color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")" 
		}); 
		$("body").append($i); 
		$i.animate({ 
			"top": y - 180, 
			"opacity": 0 
		}, 
		1500, 
		function() { 
			$i.remove(); 
		}); 
	}); 
}); 

function search(){
	var demo = new Vue({
        el: '#main',
        data: {
            searchString: "",
            articles: [
                {
                    "title": "你好",
                    "url": "https://www.runoob.com/css/css-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/css.png"
                },
                {
                    "title": "Freebie: 4 Great Looking Pricing Tables",
                    "url": "https://www.runoob.com/html/html-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/html.png"
                },
                {
                    "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                    "url": "https://www.runoob.com/css3/css3-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/css3.png"
                },
                {
                    "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                    "url": "https://www.runoob.com/css3/css3-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/css3.png"
                },
                {
                    "title": "Learn SQL In 20 Minutes",
                    "url": "https://www.runoob.com/sql/sql-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/sql.png"
                },
                {
                    "title": "Creating Your First Desktop App With HTML, JS and Electron",
                    "url": "https://www.runoob.com/js/js-tutorial.html",
                    "image": "https://static.runoob.com/images/icon/html.png"
                }
            ]
        },
        computed: {
            // 计算数学，匹配搜索
            filteredArticles: function () {
                var articles_array = this.articles,
                    searchString = this.searchString;

                if(!searchString){
                    return articles_array;
                }

                searchString = searchString.trim().toLowerCase();

                articles_array = articles_array.filter(function(item){
                    if(item.title.toLowerCase().indexOf(searchString) !== -1){
                        return item;
                    }
                })
                // 返回过来后的数组
                return articles_array;;
            }
        }
    });
}

function searchClick(){
	if($('#searchList').css('display')=='none')
		{$('#searchList').css('display','block');
}
	else{
		$('#searchList').css('display','none');
	}
}