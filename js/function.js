// 换肤
var i = -1;

function changeimg() {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    var body = document.getElementById("body");
    body.style.backgroundImage = "url(../images/" + images[i] + ")";
}

// 返回顶部
var timer = null;

function returnTop() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 80;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}

// 随机背景图
function randomApi() {
    var body = document.getElementById("body");
    body.style.backgroundImage = "url(https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302)";
    omit_text();

    //固定div
    var rightTop = $('#right').offset().top;
    console.log(rightTop);
    $(document).scroll(function() {
        if ($(document).scrollTop() == rightTop + 50.1) {
            $("#right").css("position", "fixed");
            $("#right").css("top", "50.1");
        } else {
            $("#right").css("position", "static")
        }
    });
}

// 省略前言
function omit_text() {
    var list = document.getElementsByClassName("qianyan");
    for (var i = 0; i < list.length; i++) {
        var oBox = document.getElementsByClassName("qianyan")[i];
        var demoHtml = oBox.innerHTML.slice(0, 88) + '......';
        oBox.innerHTML = demoHtml;
    }
}

//获取当前时间
function getTime() {
    var now = new Date();
    var time = now.toDateString();
    var date = document.getElementById("date");
    var date2 = document.getElementById("date2"); //小屏
    date.innerHTML = time;
    date2.innerHTML = time; //小屏
}
setInterval("getTime()");

//鼠标点击特效
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("学习", "娱乐", "云旅游", "敲代码", "电协程序部");
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
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
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

// 大屏搜索
function search() {
    var demo = new Vue({
        el: '#main',
        data: {
            searchString: "",
            articles: [{
                "label": "C语言入门编程",
                "title": "C语言概述篇--了解C语言",
                "url": "page/C1.html"
            }, {
                "label": "C语言入门编程",
                "title": "C语言基础篇--入门必读",
                "url": "page/C2.html"
            }, {
                "label": "C语言试题",
                "title": "C语言基础练习题--小牛试刀",
                "url": "page/C3.html"
            }, {
                "label": "C语言基础知识",
                "title": "C语言基础知识点整理",
                "url": "page/C4.html"
            }, {
                "label": "Java入门常见问题",
                "title": "Java中常见基本问题集合...",
                "url": "page/Java1.html"
            }, {
                "label": "Java晋级篇",
                "title": "Java第二课---晋级篇",
                "url": "page/Java2.html"
            }, {
                "label": "Java new对象",
                "title": "Java:new一个对象的过程中发生了什么？",
                "url": "page/Java3.html"
            }, {
                "label": "了解Java，Java基础",
                "title": "今天补充一下Java基础内容--了解Java",
                "url": "page/Java4.html"
            }, {
                "label": "JavaScript脚本语言",
                "title": "带你初步了解JavaScript脚本语言，go!",
                "url": "page/JavaScript1.html"
            }, {
                "label": "JavaScript题目",
                "title": "JavaScript经典题目集合啦~",
                "url": "page/JavaScript2.html"
            }, {
                "label": "Linux认识，了解Linux",
                "title": "Linux第一篇---了解Linux~",
                "url": "page/Linux1.html"
            }, {
                "label": "虚拟机上安装Linux",
                "title": "Linux第二篇---在虚拟机上安装Linux",
                "url": "page/Linux2.html"
            }, {
                "label": "学习Linux学习什么",
                "title": "Linux到底学什么？讲完下节课开始命令操作！",
                "url": "page/Linux3.html"
            }, {
                "label": "软件推荐，一个木函",
                "title": "好软推荐第一期---一个木函",
                "url": "page/software1.html"
            }, {
                "label": "软件推荐，via浏览器",
                "title": "好软推荐第二期---Via浏览器",
                "url": "page/software2.html"
            }, {
                "label": "软件推荐Geek Uninstaller",
                "title": "好软推荐第三期---Geek Uninstaller",
                "url": "page/software3.html"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（一）--大学生穷游日本2019",
                "url": "page/travel1.html"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（二）--大学生穷游日本2019",
                "url": "page/travel2.html"
            }, {
                "label": "旅游，旅行，香港",
                "title": "[小K周围走] 唔同角度睇香港（一）--港岛北",
                "url": "page/travel3.html"
            }, {
                "label": "旅游，旅行，马来西亚，多元文化",
                "title": "多元文化交融的国度，马来西亚了解一下（一）--“垮拉隆坡”初印象",
                "url": "page/travel4.html"
            }, {
                "label": "web基础，了解web",
                "title": "Web第一课--风里雨里，我在前端战场等你！",
                "url": "page/Web1.html"
            }, {
                "label": "web基础，HTML",
                "title": "Web基础第二课---HTML/HTML5",
                "url": "page/Web2.html"
            }, {
                "label": "电子协会程序部，程序设计部，电协程序设计部",
                "title": "电协程序设计部牛逼逼！",
                "url": "https://u.eqxiu.com/s/JfuKBIyf"
            }, {
                "label": "开源 Open Source 关于本网站简单站内搜索功能的实现",
                "title": "Open Source！关于本网站简单站内搜索功能的实现",
                "url": "page/Web3.html"
            }, {
                "label": "幸运抽奖 luckydraw",
                "title": "幸运抽奖系统",
                "url": "page/luckyDraw.html"
            }]
        },
        computed: {
            // 计算数学，匹配搜索
            filteredArticles: function() {
                var articles_array = this.articles, //把articles数组赋值给articles_array对象
                    searchString = this.searchString; //把searchString(用户搜索的关键字)赋值给searchString对象
                if (!searchString) { //如果没输入关键字
                    return articles_array; //返回原来的数组
                }
                searchString = searchString.trim().toLowerCase(); //trim()的意思为去掉左右两边的空格，toLowerCase()
                //则是把字符串中的大写转换成小写
                articles_array = articles_array.filter(function(item) { //filter用于接收里面函数的返回结果
                    if (item.label.toLowerCase().indexOf(searchString) !== -1) { //确保搜索的字符和已有关键字是子集关系
                        return item; //返回适配的结果
                    }
                })
                if (articles_array == "") { //如果返回的数组为空
                    document.getElementById("search_p").innerHTML = "未找到该信息！"; //则打印“未找到该信息！”
                }
                // 返回过来后的数组
                return articles_array;
            }
        }
    });
}

function searchClick() {
    if (document.getElementById("searchInput").value.length != 0) {
        if ($('#searchList').css('display') == 'none') {
            $('#searchList').css('display', 'block');
            document.getElementById("search_p").innerHTML = "关闭";
        } else {
            $('#searchList').css('display', 'none');
            document.getElementById("search_p").innerHTML = "搜索";
        }
    } else {
        $('#searchList').css('display', 'none');
        document.getElementById("search_p").innerHTML = "搜索";
    }
}

function searchEnter(event) {
    document.onkeydown = function(event) {
        if (event.keyCode == 13) {
            //回车键的键值为13 
            searchClick(); //回车需执行的方法
        }
    };
    $('#searchList').css('display', 'none');
    document.getElementById("search_p").innerHTML = "搜索";
}

// 小屏搜索
function searchSM() {
    var demo = new Vue({
        el: '#mainSM',
        data: {
            searchString: "",
            articles: [{
                "label": "C语言入门编程",
                "title": "C语言概述篇--了解C语言",
                "url": "page/C1.html"
            }, {
                "label": "C语言入门编程",
                "title": "C语言基础篇--入门必读",
                "url": "page/C2.html"
            }, {
                "label": "C语言试题",
                "title": "C语言基础练习题--小牛试刀",
                "url": "page/C3.html"
            }, {
                "label": "C语言基础知识",
                "title": "C语言基础知识点整理",
                "url": "page/C4.html"
            }, {
                "label": "Java入门常见问题",
                "title": "Java中常见基本问题集合...",
                "url": "page/Java1.html"
            }, {
                "label": "Java晋级篇",
                "title": "Java第二课---晋级篇",
                "url": "page/Java2.html"
            }, {
                "label": "Java new对象",
                "title": "Java:new一个对象的过程中发生了什么？",
                "url": "page/Java3.html"
            }, {
                "label": "了解Java，Java基础",
                "title": "今天补充一下Java基础内容--了解Java",
                "url": "page/Java4.html"
            }, {
                "label": "JavaScript脚本语言",
                "title": "带你初步了解JavaScript脚本语言，go!",
                "url": "page/JavaScript1.html"
            }, {
                "label": "JavaScript题目",
                "title": "JavaScript经典题目集合啦~",
                "url": "page/JavaScript2.html"
            }, {
                "label": "Linux认识，了解Linux",
                "title": "Linux第一篇---了解Linux~",
                "url": "page/Linux1.html"
            }, {
                "label": "虚拟机上安装Linux",
                "title": "Linux第二篇---在虚拟机上安装Linux",
                "url": "page/Linux2.html"
            }, {
                "label": "学习Linux学习什么",
                "title": "Linux到底学什么？讲完下节课开始命令操作！",
                "url": "page/Linux3.html"
            }, {
                "label": "软件推荐，一个木函",
                "title": "好软推荐第一期---一个木函",
                "url": "page/software1.html"
            }, {
                "label": "软件推荐，via浏览器",
                "title": "好软推荐第二期---Via浏览器",
                "url": "page/software2.html"
            }, {
                "label": "软件推荐Geek Uninstaller",
                "title": "好软推荐第三期---Geek Uninstaller",
                "url": "page/software3.html"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（一）--大学生穷游日本2019",
                "url": "page/travel1.html"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（二）--大学生穷游日本2019",
                "url": "page/travel2.html"
            }, {
                "label": "旅游，旅行，香港",
                "title": "[小K周围走] 唔同角度睇香港（一）--港岛北",
                "url": "page/travel3.html"
            }, {
                "label": "旅游，旅行，马来西亚，多元文化",
                "title": "多元文化交融的国度，马来西亚了解一下（一）--“垮拉隆坡”初印象",
                "url": "page/travel4.html"
            }, {
                "label": "web基础，了解web",
                "title": "Web第一课--风里雨里，我在前端战场等你！",
                "url": "page/Web1.html"
            }, {
                "label": "web基础，HTML5",
                "title": "Web基础第二课---HTML/HTML5",
                "url": "page/Web2.html"
            }, {
                "label": "电子协会程序部，程序设计部，电协程序设计部 电子协会 电协 广工华立",
                "title": "电协各部门介绍~join us！",
                "url": "https://mp.weixin.qq.com/s/iwPRSkQYAzLtgxWbohABGQ"
            }, {
                "label": "电子协会程序部，程序设计部，电协程序设计部",
                "title": "电协程序设计部牛逼逼！",
                "url": "https://u.eqxiu.com/s/JfuKBIyf"
            }, {
                "label": "开源 Open Source 关于本网站简单站内搜索功能的实现",
                "title": "Open Source！关于本网站简单站内搜索功能的实现",
                "url": "page/Web3.html"
            }, {
                "label": "幸运抽奖 luckydraw",
                "title": "幸运抽奖系统",
                "url": "page/luckyDraw.html"
            }]
        },
        computed: {
            // 计算数学，匹配搜索
            filteredArticles: function() {
                var articles_array = this.articles,
                    searchString = this.searchString;
                if (!searchString) {
                    return articles_array;
                }
                searchString = searchString.trim().toLowerCase();
                articles_array = articles_array.filter(function(item) {
                    if (item.label.toLowerCase().indexOf(searchString) !== -1) {
                        return item;
                    }
                })
                if (articles_array == "") {
                    document.getElementById("search_pSM").innerHTML = "未找到该信息！";
                }
                // 返回过来后的数组
                return articles_array;;
            }
        }
    });
}

function searchClickSM() {
    if (document.getElementById("searchInputSM").value.length != 0) {
        if ($('#searchListSM').css('display') == 'none') {
            $('#searchListSM').css('display', 'block');
            document.getElementById("search_pSM").innerHTML = "关闭";
        } else {
            $('#searchListSM').css('display', 'none');
            document.getElementById("search_pSM").innerHTML = "搜索";
        }
    } else {
        $('#searchListSM').css('display', 'none');
        document.getElementById("search_pSM").innerHTML = "搜索";
    }
}

function searchEnterSM(event) {
    document.onkeydown = function(event) {
        if (event.keyCode == 13) {
            //回车键的键值为13
            searchClickSM(); //回车需执行的方法
        }
    };
    $('#searchListSM').css('display', 'none');
    document.getElementById("search_pSM").innerHTML = "搜索";
}

// 首页文章排序
function indexRefreshment() {
    var l = 29,
        s = 9,
        show = ',',
        list = ',';
    for (var i = 1; i <= l; i++) {
        list += (i + ",");
        document.getElementById('movie' + i).style.display = 'none';
    }

    function divrefresh() {
        var i, a = show.split(','),
            c = list,
            d, e;
        for (i = 1; i <= s && i < a.length; i++) c = c.replace(',' + a[i] + ',', ',');
        show = ',';
        for (i = 1; i <= s; i++) {
            d = c.split(',');
            e = d[(parseInt(Math.random() * 1000) % (d.length - 2)) + 1];
            show += (e + ',');
            c = c.replace(',' + e + ',', ',');
            document.getElementById('show' + i).innerHTML = document.getElementById('movie' + e).innerHTML;
        }
    }
    divrefresh();
}

function tip(){
    alert("这是第一篇");
}
function next(){
    alert("这是最后一篇");
}
// 鼠标按下
function mouseDown(event) {
    var e = window.event;
    var obj = e.srcElement;
    obj.style.color = 'blue';
}
// 鼠标松开
function mouseUp(event) {
    var e = window.event;
    var obj = e.srcElement;
    obj.style.color = '#4876FF';
}