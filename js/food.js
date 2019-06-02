//自调用函数，开启一个新的作用局，避免命名冲突
(function (window,undefined) {
	//局部作用局
	var position = 'absolute';
	//记录上一次创建的事物，为删除做准备
	var elements = [];
	//创建事物对象
	function Food (options) {
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		
		this.width = options.width || 20;
		this.height = options.width || 20;
		this.color = options.color || 'green';
	}
	//渲染到浏览器的div#map中去
	Food.prototype.render = function (map) {
		//删除之前创建的事物
		remove();
		
		//随机设置x和y的值
		this.x = Tools.getRandom(0, map.offsetWidth/this.width - 1) * this.width;
		this.y = Tools.getRandom(0, map.offsetHeight/this.height - 1) * this.height;
		console.log(this.x);
		console.log(this.y);
		
		//动态创建div，页面上显示的事物
		var div = document.createElement('div');
		map.appendChild(div);
		
		elements.push(div);
		// console.log(elements.length);
		// console.log(elements);
		//设置div的样式
		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
	}
	
	function remove () {
		for (var i = elements.length - 1; i>= 0; i--) {
			//删除div
			console.log(elements[i]);
			elements[i].parentNode.removeChild(elements[i]);
			//删除数组中的元素
			//删除数组元素
			//第一个参数，从哪个元素开始删除
			//第二个参数，删除几个元素
			elements.splice(i, 1);
		}
	}
	
	//把Food构造函数暴露出来，让外部可以访问
	window.Food = Food;
})(window,undefined)

//测试
var map = document.getElementById('map');
var food = new Food();
food.render(map);
