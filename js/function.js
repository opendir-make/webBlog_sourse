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
    body.style.backgroundImage = "url(../../../images/" + images[i] + ")";
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
    getTime();
    //轮播图
    layui.use('carousel', function(){
        var carousel = layui.carousel;
        carousel.render({
        elem: '#slideshow'
        ,width: '100%' 
        ,arrow: 'always'
        ,anim: 'default' 
        });
    });
    layui.use('carousel', function(){
        var carousel2 = layui.carousel;
        carousel2.render({
        elem: '#slideshow2'
        ,width: '100%' 
        ,arrow: 'always'
        ,anim: 'default' 
        });
        layui.use('element', function(){
            var element = layui.element;
            element.render('nav');
          });
    });
}

// 省略前言
function omit_text() {
    var list = document.getElementsByClassName("qianyan");
    for (var i = 0; i < list.length; i++) {
        var oBox = document.getElementsByClassName("qianyan")[i];
        var demoHtml = oBox.innerHTML.slice(0, 80) + '......';
        oBox.innerHTML = demoHtml;
    }
}

//获取当前时间
function getTime() {
    var date = new Date();
    var year = date.getFullYear(); //年 ,从 Date 对象以四位数字返回年份
    var month = date.getMonth() + 1; //月 ,从 Date 对象返回月份 (0 ~ 11) ,date.getMonth()比实际月份少 1 个月
    var day = date.getDate(); //日
    document.getElementById("date").innerHTML = year + "-" + month + "-" + day;
    document.getElementById("date2").innerHTML = year + "-" + month + "-" + day;
}

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
                "url": "page/C/1/"
            }, {
                "label": "C语言入门编程",
                "title": "C语言基础篇--入门必读",
                "url": "page/C/2/"
            }, {
                "label": "C语言试题",
                "title": "C语言基础练习题--小牛试刀",
                "url": "page/C/3/"
            }, {
                "label": "C语言基础知识",
                "title": "C语言基础知识点整理",
                "url": "page/C/4/"
            }, {
                "label": "Java入门常见问题",
                "title": "Java中常见基本问题集合",
                "url": "page/Java/1/"
            }, {
                "label": "Java晋级篇",
                "title": "了解Java---晋级篇",
                "url": "page/Java/2/"
            }, {
                "label": "Java new对象",
                "title": "Java:new一个对象的过程中发生了什么？",
                "url": "page/Java/3/"
            }, {
                "label": "了解Java，Java基础",
                "title": "了解Java",
                "url": "page/Java/4/"
            }, {
                "label": "JavaScript脚本语言",
                "title": "初步了解JavaScript脚本语言",
                "url": "page/JavaScript/1/"
            }, {
                "label": "JavaScript题目",
                "title": "JavaScript经典题目集合~",
                "url": "page/JavaScript/2/"
            }, {
                "label": "Linux认识，了解Linux",
                "title": "了解Linux",
                "url": "page/Linux/1/"
            }, {
                "label": "虚拟机上安装Linux",
                "title": "在虚拟机上安装Linux",
                "url": "page/Linux/2/"
            }, {
                "label": "学习Linux学习什么",
                "title": "Linux到底学什么？",
                "url": "page/Linux/3/"
            }, {
                "label": "软件推荐，一个木函",
                "title": "好软推荐第一期---一个木函",
                "url": "page/software/1/"
            }, {
                "label": "软件推荐，via浏览器",
                "title": "好软推荐第二期---Via浏览器",
                "url": "page/software/2/"
            }, {
                "label": "软件推荐Geek Uninstaller",
                "title": "好软推荐第三期---Geek Uninstaller",
                "url": "page/software/3/"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（一）--大学生穷游日本2019",
                "url": "page/travel/1/"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（二）--大学生穷游日本2019",
                "url": "page/travel/2/"
            }, {
                "label": "旅游，旅行，香港",
                "title": "[小K周围走] 唔同角度睇香港（一）--港岛北",
                "url": "page/travel/3/"
            }, {
                "label": "旅游，旅行，马来西亚，多元文化",
                "title": "多元文化交融的国度，马来西亚了解一下（一）--“垮拉隆坡”初印象",
                "url": "page/travel/4/"
            }, {
                "label": "web基础，了解web",
                "title": "风里雨里，我在前端战场等你！",
                "url": "page/Web/1/"
            }, {
                "label": "web基础，HTML5",
                "title": "初识HTML/HTML5",
                "url": "page/Web/2/"
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
                "url": "page/Web/3/"
            }, {
                "label": "幸运抽奖 luckydraw",
                "title": "幸运抽奖系统",
                "url": "page/luckyDraw.html"
            },{
                "label": "科技 现代5G",
                "title": "台前与幕后的5G战争",
                "url": "page/technology/"
            },{
                "label": "双11 老板 加班",
                "title": "双十一，老板的电话该不该接？",
                "url": "page/technology/1/"
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
                "url": "page/C/1/"
            }, {
                "label": "C语言入门编程",
                "title": "C语言基础篇--入门必读",
                "url": "page/C/2/"
            }, {
                "label": "C语言试题",
                "title": "C语言基础练习题--小牛试刀",
                "url": "page/C/3/"
            }, {
                "label": "C语言基础知识",
                "title": "C语言基础知识点整理",
                "url": "page/C/4/"
            }, {
                "label": "Java入门常见问题",
                "title": "Java中常见基本问题集合",
                "url": "page/Java/1/"
            }, {
                "label": "了解Java晋级篇",
                "title": "了解Java---晋级篇",
                "url": "page/Java/2/"
            }, {
                "label": "Java new对象",
                "title": "Java:new一个对象的过程中发生了什么？",
                "url": "page/Java/3/"
            }, {
                "label": "了解Java，Java基础",
                "title": "了解Java",
                "url": "page/Java/4/"
            }, {
                "label": "JavaScript脚本语言",
                "title": "初步了解JavaScript脚本语言",
                "url": "page/JavaScript/1/"
            }, {
                "label": "JavaScript题目",
                "title": "JavaScript经典题目集合~",
                "url": "page/JavaScript/2/"
            }, {
                "label": "Linux认识，了解Linux",
                "title": "了解Linux",
                "url": "page/Linux/1/"
            }, {
                "label": "虚拟机上安装Linux",
                "title": "在虚拟机上安装Linux",
                "url": "page/Linux/2/"
            }, {
                "label": "学习Linux学习什么",
                "title": "Linux到底学什么？",
                "url": "page/Linux/3/"
            }, {
                "label": "软件推荐，一个木函",
                "title": "好软推荐第一期---一个木函",
                "url": "page/software/1/"
            }, {
                "label": "软件推荐，via浏览器",
                "title": "好软推荐第二期---Via浏览器",
                "url": "page/software/2/"
            }, {
                "label": "软件推荐Geek Uninstaller",
                "title": "好软推荐第三期---Geek Uninstaller",
                "url": "page/software/3/"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（一）--大学生穷游日本2019",
                "url": "page/travel/1/"
            }, {
                "label": "旅游，旅行，日本，大学生",
                "title": "一人の体験2.0（二）--大学生穷游日本2019",
                "url": "page/travel/2/"
            }, {
                "label": "旅游，旅行，香港",
                "title": "[小K周围走] 唔同角度睇香港（一）--港岛北",
                "url": "page/travel/3/"
            }, {
                "label": "旅游，旅行，马来西亚，多元文化",
                "title": "多元文化交融的国度，马来西亚了解一下（一）--“垮拉隆坡”初印象",
                "url": "page/travel/4/"
            }, {
                "label": "web基础，了解web",
                "title": "风里雨里，我在前端战场等你！",
                "url": "page/Web/1/"
            }, {
                "label": "web基础，HTML5",
                "title": "初识HTML/HTML5",
                "url": "page/Web/2/"
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
                "url": "page/Web/3/"
            }, {
                "label": "幸运抽奖 luckydraw",
                "title": "幸运抽奖系统",
                "url": "page/luckyDraw.html"
            },{
                "label": "科技 现代5G",
                "title": "台前与幕后的5G战争",
                "url": "page/technology/"
            },{
                "label": "双11 老板 加班",
                "title": "双十一，老板的电话该不该接？",
                "url": "page/technology/1/"
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
    var l = 31,
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

function tip() {
    layer.alert('到头了，这是第一篇！', {
        skin: 'layui-layer-molv', //样式类名
        closeBtn: 0,
        anim: 6 //动画类型
    });
}

function next() {
    layer.alert('这是最后一篇了哟！', {
        skin: 'layui-layer-molv', //样式类名
        closeBtn: 0,
        anim: 6 //动画类型
    });
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
  //页面导航栏引用
  var language_index=document.getElementById('language-index').innerHTML();
  var language_index_string=language_index.toString();
  var language_index_other=document.getElementById('language-index-other');
    language_index_other.innerHTML=language_index_string;	
    
/*打开侧栏，修改侧栏宽度，主体左跨度、背景透明度*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("mySidenav").style.marginTop="67px";
}
/*关闭侧栏，恢复原始侧栏宽度，主体左跨度、背景透明度*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}