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
                    "title": "C语言概述篇--了解C语言",
                    "url": "page/C1.html"
                },
                {
                    "title": "C语言基础篇--入门必读",
                    "url": "page/C2.html"
                },
                {
                    "title": "C语言基础练习题--小牛试刀",
                    "url": "page/C3.html"
                },
                {
                    "title": "C语言基础知识点整理",
                    "url": "page/C4.html"
                },
                {
                    "title": "Java中常见基本问题集合...",
                    "url": "page/Java1.html"
                },
                {
                    "title": "Java第二课---晋级篇",
                    "url": "page/Java2.html"
                },
                {
                    "title": "Java:new一个对象的过程中发生了什么？",
                    "url": "page/Java3.html"
                },
                {
                    "title": "今天补充一下Java基础内容--了解Java",
                    "url": "page/Java4.html"
                },
                {
                    "title": "带你初步了解JavaScript脚本语言，go!",
                    "url": "page/JavaScript1.html"
                },
                {
                    "title": "JavaScript经典题目集合啦~",
                    "url": "page/JavaScript2.html"
                },
                {
                    "title": "Linux第一篇---了解Linux~",
                    "url": "page/Linux1.html"
                },
                {
                    "title": "Linux第二篇---在虚拟机上安装Linux",
                    "url": "page/Linux2.html"
                },
                {
                    "title": "Linux到底学什么？讲完下节课开始命令操作！",
                    "url": "page/Linux3.html"
                },
                {
                    "title": "好软推荐第一期---一个木函",
                    "url": "page/software1.html"
                },
                {
                    "title": "好软推荐第二期---Via浏览器",
                    "url": "page/software2.html"
                },
                {
                    "title": "好软推荐第三期---Geek Uninstaller",
                    "url": "page/software3.html"
                },
                {
                    "title": "一人の体験2.0（一）--大学生穷游日本2019",
                    "url": "page/travel1.html"
                },
                {
                    "title": "一人の体験2.0（二）--大学生穷游日本2019",
                    "url": "page/travel2.html"
                },
                {
                    "title": "[小K周围走] 唔同角度睇香港（一）--港岛北",
                    "url": "page/travel3.html"
                },
                {
                    "title": "多元文化交融的国度，马来西亚了解一下（一）--“垮拉隆坡”初印象",
                    "url": "page/travel4.html"
                },
                {
                    "title": "Web第一课--风里雨里，我在前端战场等你！",
                    "url": "page/Web1.html"
                },
                {
                    "title": "Web基础第二课---HTML/HTML5",
                    "url": "page/Web2.html"
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