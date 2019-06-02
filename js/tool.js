// 得到一个随机数的方法
(function () {
	var Tools = {
		getRandom: function (min, max) {
			return Math.floor(Math.random()*(max-min+1))+min;
		}
	}
	//暴露Tools给window
	window.Tools = Tools;
})()