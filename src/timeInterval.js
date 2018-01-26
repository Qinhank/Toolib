//生成Toolib全局对象
if(!window.Toolib){window['Toolib'] = function(){}};

/**
 * 获取时间间隔(什么玩意儿) = =
 * @param  {[type]} window [description]
 * @return {[type]}        [description]
 */
;(function(window){
	Toolib.prototype.timeInterval = function(time){

		//是否为空
		if(!time){
			console.warn('参数不能为空');
			return;
		}
		//是否是13位
		if(time.length!=13){
			console.warn('数据错误，只支持时间戳');
			return;
		}
		//是否全部是数字
		var num = '0123456789';
		for(var i=0;i<time.length;i++){
			if(num.indexOf(time[i])<0){
				console.warn('数据错误，只支持时间戳');
				return;
			}
		}

		//开始正式处理
		var now = Date.parse(new Date());
		return now - time;
	}
})(window)