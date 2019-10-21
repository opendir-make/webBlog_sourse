function testTime() {
	var Array = []; //首先创建一个空数组，用来放随机数
	var value1 = document.getElementById("input1").value;
	var value2 = document.getElementById("input2").value;

	function getRandom(num1, num2) { //定义一个函数，这个函数是写1~389的随机数，现在把他封装成一个函数
		var transition = num2 - num1 + 1; //这里面的加1是为了能够取到389
		var res = Math.floor(Math.random() * transition + num1);
		return res;
	} //上面的代码已经获取了num1~num2的随机数

	Array.push(getRandom(1, 389)); //把getRandom()函数传给数组

	if (value1.length == 0 || value2.length == 0) {
		document.getElementById("one").innerHTML = "<h3>" + "请圈定范围" + "</h3>";
		clearInterval(timer);
	} else {
		// 在div中显示一个h3标签，里面装着随机数的数组
		document.getElementById("one").innerHTML = "<h3>" + Array[0] + "</h3>";
	}
}

function setTime(mark) { //这个参数mark相当于是一个标记吧
	timer = null;
	timer = setInterval(testTime, 60); //每60毫秒调用一次testTime()函数
	if (mark == 'stop') {      
		clearInterval(timer); //停止，clearInterval()方法的参数必须是由setInterval()返回的ID值。
	}
	return timer;
}

function clearTime(timer) {}