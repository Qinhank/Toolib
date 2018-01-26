
/**
 * 设置只显示时间的年月日
 * @return {[type]} [返回格式：16:03:00]
 */
Date.prototype.onlyMis = function(){
	return this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
}