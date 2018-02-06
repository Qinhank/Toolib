const getUrlparam = require("./queryUrlParam.js");//将url参数转换为键值对
const changeBtn = require("./changeBtnStatus.js");//改变按钮状态
const quickAjax = require('./quickAjax');//快速ajax
const Ajax = require('./ajax');//原生ajax
const randomStr = require('./randomStr');//获取指定随机数
const Event = require('./Event');//发布订阅模式
/************非Toolib类********/
//date原型拓展
require('./onlyMis');
require('./onlyYmd');

/**********绑定全局对象************/
(function(window){
	setTimeout(function(){
		if(window.jQuery||window.Zepto){
			require('./setjQFn');
		}
	},100);
	const toolib = {
		getUrlparam:getUrlparam,
		changeBtn:changeBtn,
		quickAjax:quickAjax,
		ajax:Ajax,
		randomStr:randomStr,
		Event:Event,
	}
	window.toolib = toolib;
})(window)