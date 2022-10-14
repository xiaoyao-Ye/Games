$(function () {
	Game.init($('#div1')); // game runing..

})
//注: 页面缩放后 可能导致元素标签的缩放而影响到碰撞判断
var Game = {
	//关卡的数据
	level: [
		// https://laojiang.video/pushBox/  参考地图
		// level:1
		{
			map: [
				[1, 1, 1, 2, 2, 2, 1, 1],
				[1, 1, 1, 2, 3, 2, 1, 1],
				[2, 2, 2, 2, 0, 2, 1, 1],
				[2, 3, 0, 0, 0, 2, 2, 2],
				[2, 2, 2, 0, 0, 0, 3, 2],
				[1, 1, 2, 0, 2, 2, 2, 2],
				[1, 1, 2, 3, 2, 1, 1, 1],
				[1, 1, 2, 2, 2, 1, 1, 1]


			],
			box: [
				{ x: 3, y: 3 },
				{ x: 4, y: 3 },
				{ x: 5, y: 4 },
				{ x: 3, y: 5 }
			],
			person: { x: 4, y: 4 }
		},
		// level:2
		{
			map: [
				[1, 1, 2, 2, 2, 2, 1, 1,],
				[1, 1, 2, 1, 1, 2, 2, 2,],
				[2, 2, 2, 1, 1, 1, 1, 2,],
				[2, 1, 1, 3, 3, 2, 1, 2,],
				[2, 1, 1, 1, 3, 1, 1, 2,],
				[2, 2, 2, 1, 1, 2, 2, 2,],
				[1, 1, 2, 1, 1, 2, 1, 1,],
				[1, 1, 2, 2, 2, 2, 1, 1,],

			],
			box: [
				{ x: 3, y: 3 },
				{ x: 3, y: 4 },
				{ x: 4, y: 4 }
			],
			person: { x: 4, y: 5 }
		},
		// level:3
		{
			map: [
				[1, 1, 2, 2, 2, 2, 1, 1],
				[1, 1, 2, 3, 3, 2, 1, 1],
				[1, 2, 2, 0, 3, 2, 2, 1],
				[1, 2, 0, 0, 0, 3, 2, 1],
				[2, 2, 0, 0, 0, 0, 2, 2],
				[2, 0, 0, 2, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 2],
				[2, 2, 2, 2, 2, 2, 2, 2]
			],
			box: [
				{ x: 3, y: 4 },
				{ x: 4, y: 3 },
				{ x: 4, y: 5 },
				{ x: 5, y: 5 }
			],
			person: { x: 3, y: 6 }
		},
		// level:4
		{
			map: [
				[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
				[1, 1, 1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 1],
				[1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 2, 1],
				[2, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 1],
				[2, 3, 3, 3, 2, 2, 2, 0, 2, 0, 0, 2, 2],
				[2, 3, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2],
				[2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 3, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2],
				[2, 3, 3, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2],
				[2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 1],
				[1, 1, 1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 1],
				[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1]
			],
			box: [
				{ x: 6, y: 6 },
				{ x: 7, y: 3 },
				{ x: 7, y: 5 },
				{ x: 7, y: 7 },
				{ x: 7, y: 9 },
				{ x: 8, y: 2 },
				{ x: 9, y: 2 },
				{ x: 10, y: 6 },
			],
			person: { x: 6, y: 9 }
		},
		// level:5
		{
			map: [
				[2, 2, 2, 2, 2, 1, 1, 1, 1],
				[2, 0, 0, 0, 2, 2, 2, 2, 2],
				[2, 0, 0, 0, 2, 2, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 2, 2, 2, 2, 0, 0, 0, 2],
				[1, 1, 1, 1, 2, 0, 2, 2, 2],
				[1, 1, 2, 2, 2, 0, 0, 2, 0],
				[1, 1, 2, 3, 3, 3, 0, 2, 1],
				[1, 1, 2, 2, 2, 2, 2, 2, 1],
			],
			box: [
				{ x: 2, y: 2 },
				{ x: 2, y: 3 },
				{ x: 3, y: 2 }
			],
			person: { x: 1, y: 1 }

		},
		// level:6
		{
			map: [
				[1, 1, 2, 2, 2, 2, 1],
				[2, 2, 2, 0, 0, 2, 2],
				[2, 0, 0, 0, 3, 3, 2],
				[2, 0, 2, 0, 3, 3, 2],
				[2, 0, 2, 0, 2, 2, 2],
				[2, 0, 2, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 2],
				[2, 2, 0, 0, 0, 0, 2],
				[1, 2, 0, 0, 2, 2, 2],
				[1, 2, 2, 2, 2, 0, 0],


			],
			box: [
				{ x: 2, y: 2 },
				{ x: 3, y: 4 },
				{ x: 4, y: 6 },
				{ x: 3, y: 7 },
			],
			person: { x: 3, y: 2 }
		},
		// level:7
		{
			map: [
				[1, 2, 2, 2, 2, 2, 2, 2],
				[2, 2, 0, 2, 2, 3, 3, 2],
				[2, 0, 0, 0, 0, 0, 3, 2],
				[2, 0, 0, 0, 0, 0, 0, 2],
				[2, 2, 2, 2, 0, 0, 3, 2],
				[1, 1, 1, 2, 2, 2, 2, 2],


			],
			box: [
				{ x: 2, y: 2 },
				{ x: 3, y: 2 },
				{ x: 5, y: 2 },
				{ x: 4, y: 3 },
			],
			person: { x: 2, y: 1 }
		},
		// level:8
		{
			map: [
				[1, 1, 1, 2, 2, 2, 2, 2],
				[2, 2, 2, 2, 3, 3, 3, 2],
				[2, 0, 0, 2, 2, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 2],
				[2, 2, 0, 2, 2, 0, 0, 2],
				[2, 2, 0, 0, 0, 2, 0, 2],
				[1, 2, 2, 2, 0, 0, 0, 2],
				[1, 1, 1, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 5, y: 2 },
				{ x: 2, y: 3 },
				{ x: 6, y: 5 },
			],
			person: { x: 1, y: 2 }
		},
		// level:9
		{
			map: [
				[1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
				[1, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2],
				[1, 2, 0, 2, 2, 2, 3, 0, 0, 0, 2],
				[2, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2],
				[2, 0, 3, 2, 0, 0, 0, 0, 2, 0, 2],
				[2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2],
				[2, 0, 2, 0, 0, 0, 0, 2, 3, 0, 2],
				[2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2],
				[2, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2],
				[2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2],
				[1, 1, 1, 2, 2, 2, 2, 2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2],
				[1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			],
			box: [
				{ x: 4, y: 4 },
				{ x: 6, y: 4 },
				{ x: 4, y: 6 },
				{ x: 6, y: 6 },
			],
			person: { x: 8, y: 11 }
		},
		// level:10
		{
			map: [
				[1, 1, 1, 1, 1, 2, 2, 2],
				[1, 1, 1, 1, 1, 2, 3, 2],
				[1, 2, 2, 2, 2, 2, 3, 2],
				[2, 2, 0, 0, 0, 0, 3, 2],
				[2, 0, 0, 0, 0, 0, 3, 2],
				[2, 0, 0, 0, 2, 0, 3, 2],
				[2, 2, 2, 0, 2, 2, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 2, 2, 2],
				[2, 2, 2, 2, 2, 2, 0, 0],
			],
			box: [
				{ x: 3, y: 3 },
				{ x: 4, y: 4 },
				{ x: 5, y: 4 },
				{ x: 3, y: 5 },
				{ x: 3, y: 7 }
			],
			person: { x: 1, y: 8 }
		},
		// level:11
		{
			map: [
				[1, 1, 2, 2, 2, 2, 1],
				[1, 2, 2, 3, 3, 2, 1],
				[1, 2, 3, 3, 3, 2, 1],
				[2, 2, 0, 0, 0, 2, 1],
				[2, 0, 0, 0, 0, 2, 1],
				[2, 0, 2, 0, 0, 2, 2],
				[2, 0, 2, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 2],
				[2, 2, 2, 0, 2, 2, 2],
				[1, 1, 2, 2, 2, 1, 1],
			],
			box: [
				{ x: 3, y: 3 },
				{ x: 2, y: 4 },
				{ x: 4, y: 4 },
				{ x: 3, y: 5 },
				{ x: 4, y: 6 }
			],
			person: { x: 3, y: 8 }
		},
		// level:12
		{
			map: [
				[1, 1, 1, 1, 1, 2, 2, 2, 2],
				[2, 2, 2, 2, 2, 2, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 2, 2, 0, 0, 2],
				[2, 2, 0, 2, 3, 3, 0, 0, 2],
				[2, 2, 0, 2, 3, 3, 0, 0, 2],
				[2, 0, 0, 2, 3, 3, 0, 2, 2],
				[2, 0, 0, 0, 2, 2, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 2, 2, 2, 2, 2, 0, 0, 2],
				[1, 1, 1, 1, 1, 2, 2, 2, 2],
			],
			box: [
				{ x: 3, y: 2 },
				{ x: 6, y: 2 },
				{ x: 2, y: 5 },
				{ x: 6, y: 5 },
				{ x: 3, y: 8 },
				{ x: 6, y: 8 }
			],
			person: { x: 7, y: 8 }
		},
		// level:13
		{
			map: [
				[1, 1, 2, 2, 2, 2, 1],
				[1, 1, 2, 0, 0, 2, 1],
				[2, 2, 2, 0, 0, 2, 1],
				[2, 0, 0, 0, 3, 2, 2],
				[2, 0, 0, 3, 3, 0, 2],
				[2, 0, 0, 3, 3, 0, 2],
				[2, 0, 0, 0, 2, 2, 2],
				[2, 2, 2, 2, 2, 1, 1],
			],
			box: [
				{ x: 4, y: 2 },
				{ x: 2, y: 3 },
				{ x: 3, y: 3 },
				{ x: 2, y: 4 },
				{ x: 2, y: 5 },
			],
			person: { x: 3, y: 1 }
		},
		// level:14
		{
			map: [
				[1, 2, 2, 2, 2, 1],
				[2, 2, 0, 0, 2, 2],
				[2, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 2],
				[2, 2, 2, 3, 0, 2],
				[1, 1, 2, 3, 0, 2],
				[1, 1, 2, 3, 2, 2],
				[2, 2, 2, 3, 0, 2],
				[2, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 2, 2],
				[2, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 2, y: 2 },
				{ x: 3, y: 3 },
				{ x: 2, y: 8 },
				{ x: 3, y: 9 },
			],
			person: { x: 4, y: 8 }
		},
		// level:15
		{
			map: [
				[1, 2, 2, 2, 2, 1, 1],
				[1, 2, 0, 0, 2, 1, 1],
				[2, 2, 0, 0, 2, 2, 2],
				[2, 0, 0, 3, 0, 0, 2],
				[2, 0, 3, 0, 0, 0, 2],
				[2, 0, 0, 3, 0, 0, 2],
				[2, 2, 2, 0, 0, 2, 2],
				[1, 1, 2, 2, 2, 2, 1],
			],
			box: [
				{ x: 2, y: 3 },
				{ x: 3, y: 4 },
				{ x: 4, y: 5 },
			],
			person: { x: 2, y: 5 }
		},
		// level:16
		{
			map: [
				[1, 1, 1, 1, 2, 2, 2, 2],
				[1, 1, 2, 2, 2, 0, 0, 2],
				[2, 2, 2, 0, 0, 0, 0, 2],
				[2, 3, 0, 0, 0, 2, 0, 2],
				[2, 3, 3, 0, 0, 0, 0, 2],
				[2, 2, 2, 3, 0, 0, 0, 2],
				[0, 0, 2, 2, 2, 0, 0, 2],
				[0, 0, 0, 0, 2, 2, 2, 2],
			],
			box: [
				{ x: 4, y: 3 },
				{ x: 3, y: 4 },
				{ x: 5, y: 4 },
				{ x: 5, y: 5 },
			],
			person: { x: 6, y: 3 }
		},
		// level:17
		{
			map: [
				[2, 2, 2, 2, 2, 2, 2],
				[2, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 0, 2],
				[2, 2, 3, 3, 3, 2, 2],
				[2, 0, 3, 0, 3, 0, 2],
				[2, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 2, 0, 0, 2],
				[2, 2, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 2, y: 2 },
				{ x: 3, y: 2 },
				{ x: 4, y: 2 },
				{ x: 2, y: 5 },
				{ x: 4, y: 5 },
			],
			person: { x: 3, y: 1 }
		},
		// level:18
		{
			map: [
				[1, 2, 2, 2, 2, 2, 1],
				[2, 2, 0, 3, 0, 2, 1],
				[2, 0, 0, 3, 0, 2, 2],
				[2, 0, 0, 3, 0, 0, 2],
				[2, 0, 0, 3, 0, 0, 2],
				[2, 0, 0, 3, 0, 2, 2],
				[2, 2, 0, 3, 0, 2, 2],
				[2, 1, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 2, y: 2 },
				{ x: 4, y: 2 },
				{ x: 4, y: 3 },
				{ x: 2, y: 4 },
				{ x: 2, y: 5 },
				{ x: 4, y: 5 },
			],
			person: { x: 5, y: 4 }
		},
		// level:19
		{
			map: [
				[1, 1, 1, 2, 2, 2, 2, 1, 1],
				[1, 1, 1, 2, 3, 3, 2, 1, 1],
				[2, 2, 2, 2, 3, 3, 2, 1, 1],
				[2, 0, 0, 0, 3, 3, 2, 2, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 2],
				[2, 0, 0, 0, 0, 2, 2, 0, 2],
				[2, 0, 0, 2, 0, 0, 0, 0, 2],
				[2, 2, 0, 2, 0, 0, 0, 0, 2],
				[1, 2, 0, 0, 0, 2, 0, 0, 2],
				[1, 2, 2, 2, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 2, y: 4 },
				{ x: 3, y: 4 },
				{ x: 5, y: 4 },
				{ x: 4, y: 5 },
				{ x: 5, y: 6 },
				{ x: 6, y: 7 },
			],
			person: { x: 7, y: 6 }
		},
		// level:20
		{
			map: [
				[2, 2, 2, 2, 2, 2, 2, 2],
				[2, 3, 3, 0, 0, 0, 0, 2],
				[2, 3, 3, 0, 0, 0, 0, 2],
				[2, 0, 2, 0, 0, 0, 0, 2],
				[2, 3, 3, 0, 0, 0, 0, 2],
				[2, 3, 3, 0, 0, 0, 0, 2],
				[2, 2, 2, 2, 2, 2, 2, 2],
			],
			box: [
				{ x: 1, y: 3 },
				{ x: 3, y: 2 },
				{ x: 5, y: 2 },
				{ x: 3, y: 3 },
				{ x: 4, y: 3 },
				{ x: 5, y: 3 },
				{ x: 3, y: 4 },
				{ x: 5, y: 4 },
			],
			person: { x: 6, y: 4 }
		},

	],
	init: function (oParent) {//初始化
		this.oParent = oParent;
		this.iNow = 0;
		this.createMap(this.iNow);
	},
	createMap: function (iNow) { //创建地图

		//动态设置地图的宽度
		this.oParent.empty();
		this.currentLoc = [];
		this.oParent.css('width', this.level[iNow].map[0].length * 50)

		this.nowMaplevel = this.level[iNow];
		//遍历地图的二维数组,生成数组
		$.each(this.nowMaplevel.map, $.proxy(function (i, ele) {
			$.each(ele, $.proxy(function (j, ele) {
				var defaultMap = $('<div class="pos' + ele + '"><div>');
				defaultMap.css('left', 50 * j);
				defaultMap.css('top', 50 * i);
				this.oParent.append(defaultMap);
			}, this))
		}, this))
		//调用创建盒子函数
		this.createBox(iNow);
		//调用创建乌龟函数
		this.createPerson(iNow);
		this.showINow();
		//创建两个按钮
		this.createBtn();
		$('.prebtn').click($.proxy(function () {
			this.preLevel();
		}, this));
		$('.nextbtn').click($.proxy(function () {
			this.nextLevel();
		}, this));
		$('.restartbtn').click($.proxy(function () {
			this.createMap(this.iNow);
		}, this));

	},
	createBox: function (iNow) {//创建箱子
		//获取该张地图里面的箱子对象里面的xy数据  将其生成box元素  添加到页面
		var boxObj = this.nowMaplevel.box;
		$.each(boxObj, $.proxy(function (i, ele) {
			var box = $('<div class="box"></box>');
			box.css('left', 50 * ele.x);
			box.css('top', 50 * ele.y);

			box.data('x', ele.x);
			box.data('y', ele.y);
			this.oParent.append(box);
		}, this))


	},
	createPerson: function (iNow) { //创建人物
		//获取该张地图里面的人物对象里面的xy数据  将其生成box元素  添加到页面
		var personObj = this.nowMaplevel.person;
		var person = $('<div class="person"></div>');
		person.css('left', 50 * personObj.x);
		person.css('top', 50 * personObj.y);
		person.data('x', personObj.x);
		person.data('y', personObj.y);
		this.oParent.append(person);
		this.bindPerson(person);

	},
	//显示当前的关数
	showINow: function () {
		var iNowLevel = $('<div class="iNowlevel"></div>');
		iNowLevel.css('right', -200);
		iNowLevel.css('top', 100);
		iNowLevel.text('现在是第' + (this.iNow + 1) + '关')
		this.oParent.append(iNowLevel);
	},
	//创建三个按钮按钮
	createBtn: function () {
		var preBtn = $('<button class="btn prebtn">上一关</button>')
		preBtn.css('right', -150);
		preBtn.css('top', 200);
		this.oParent.append(preBtn);

		var nextBtn = $('<button class="btn nextbtn">下一关</button>')
		nextBtn.css('right', -150);
		nextBtn.css('top', 300);
		this.oParent.append(nextBtn);

		var restartBtn = $('<button class="btn restartbtn">重新开始</button>')
		restartBtn.css('right', -300);
		restartBtn.css('top', 200);
		this.oParent.append(restartBtn);

	},
	bindPerson: function (oPerson) {
		// console.log(oPerson.data())
		// $(window).keydown() 
		document.onkeydown = $.proxy(function (ev) {
			// console.log(oPerson.data());

			switch (ev.keyCode) {
				//向左移动
				case 37: {
					oPerson.css('backgroundPosition', '-150px 0');
					this.personMove(oPerson, { x: -1 });
					this.currentLoc.push({
						x: oPerson.data('x'),
						y: oPerson.data('y')
					})
					break;
				}
				// 向上移动
				case 38: {

					oPerson.css('backgroundPosition', '0 0');
					this.personMove(oPerson, { y: -1 });
					this.currentLoc.push({
						x: oPerson.data('x'),
						y: oPerson.data('y')
					})
					break;
				}
				// 向右移动
				case 39: {
					oPerson.css('backgroundPosition', '-50px 0');
					this.personMove(oPerson, { x: 1 });
					this.currentLoc.push({
						x: oPerson.data('x'),
						y: oPerson.data('y')
					})
					break;
				}
				// 向下移动
				case 40: {
					oPerson.css('backgroundPosition', '-100px 0');
					this.personMove(oPerson, { y: 1 });
					this.currentLoc.push({
						x: oPerson.data('x'),
						y: oPerson.data('y')
					})
					break;
				}
			}
		}, this)



	},

	personMove: function (oPerson, direction) {
		//获得人物移动的方向以及位移
		var dirx = direction.x || 0;
		var diry = direction.y || 0;

		var x = oPerson.data('x');
		var y = oPerson.data('y');

		var map = this.nowMaplevel.map;
		var box = this.nowMaplevel.box;
		//判断是不是达到边界  因为有的地图可能没有

		x = x + dirx < 0 ? 1 : x;
		x = x + dirx > map[0].length - 1 ? x = map[0].length - 2 : x;
		y = y + diry < 0 ? 1 : y;
		y = y + diry > map.length - 1 ? x = map.length - 2 : y;

		if (map[y + diry][x + dirx] != 2) {

			oPerson.css('left', (x + dirx) * 50);
			oPerson.css('top', (y + diry) * 50);


			x += dirx;
			y += diry;
			oPerson.data('x', x);
			oPerson.data('y', y);


			$('.box').each($.proxy(function (i, ele) {

				if (this.hit(oPerson, $(ele)) && map[$(ele).data('y') + diry][$(ele).data('x') + dirx] != 2) {
					$(ele).css('left', ($(ele).data('x') + dirx) * 50);
					$(ele).css('top', ($(ele).data('y') + diry) * 50);

					$(ele).data('x', $(ele).data('x') + dirx)
					$(ele).data('y', $(ele).data('y') + diry)



					$('.box').each($.proxy(function (j, ele2) {
						if (this.hit($(ele), $(ele2)) && ele != ele2) {
							$(ele).css('left', oPerson.data('x') * 50);
							$(ele).css('top', oPerson.data('y') * 50);
							$(ele).data('x', $(ele).data('x') - dirx)
							$(ele).data('y', $(ele).data('y') - diry)
							oPerson.data('x', oPerson.data('x') - dirx);
							oPerson.data('y', oPerson.data('y') - diry);
							oPerson.css('left', oPerson.data('x') * 50);
							oPerson.css('top', oPerson.data('y') * 50);
						}
					}, this));

				}
				else if (this.hit(oPerson, $(ele))) {
					oPerson.data('x', oPerson.data('x') - dirx);
					oPerson.data('y', oPerson.data('y') - diry);
					oPerson.css('left', oPerson.data('x') * 50);
					oPerson.css('top', oPerson.data('y') * 50);
				}

			}, this))

		}
		this.gameover();

	},

	hit: function (obj1, obj2) {

		var Left1 = Math.floor(obj1.offset().left);
		var Top1 = Math.floor(obj1.offset().top);
		var Right1 = Math.floor(obj1.offset().left + obj1.width());
		var Bottom1 = Math.floor(obj1.offset().top + obj1.height());

		var Left2 = Math.floor(obj2.offset().left);
		var Top2 = Math.floor(obj2.offset().top);
		var Right2 = Math.floor(obj2.offset().left + obj2.width());
		var Bottom2 = Math.floor(obj2.offset().top + obj2.height());

		if (Left1 >= Right2 || Right1 <= Left2 || Bottom1 <= Top2 || Top1 >= Bottom2) {
			return false;
		} else {

			return true;
		}


	},
	gameover: function () {
		var num = 0;
		$('.pos3').each($.proxy(function (i, ele) {

			$('.box').each($.proxy(function (j, ele2) {
				if (this.hit($(ele), $(ele2))) {
					num++;
				}
			}, this))
		}, this));
		if (num == $('.pos3').length) {
			this.iNow++;
			this.createMap(this.iNow);
		}

	},
	nextLevel: function () {
		// this.iNow += 1;
		// this.iNow = this.iNow == this.level.length -1 ? this.level.length -1 : this.iNow++;

		this.iNow = this.iNow == this.level.length - 1 ? this.level.length - 1 : this.iNow++;
		if (this.iNow == this.level.length - 1)
			this.iNow = this.level.length - 1;
		else this.iNow++

		this.createMap(this.iNow);
	},
	preLevel: function () {
		// this.iNow = this.iNow == 0 ? 0 : this.iNow--;
		if (this.iNow == 0)
			this.iNow = 0;
		else
			this.iNow--;
		console.log(this.iNow);
		this.createMap(this.iNow);

	}
}