//将url参数转换为键值对
import getUrlparam from "./queryUrlParam.js";
//改变按钮状态
const changeBtn = require("./changeBtnStatus.js");
//date原型拓展
require('./onlyMis.js');
require('./onlyYmd.js');
//快速ajax
const quickAjax = require('./quickAjax.js');

(function(window){
	var toolib = {
		getUrlparam:getUrlparam,
		changeBtn:changeBtn,
		quickAjax:quickAjax
	}
	window.toolib = toolib;
})(window)