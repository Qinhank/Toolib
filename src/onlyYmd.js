
/**
 * 设置只显示时间的年月日
 * @return {[type]} [返回格式：2018-01-02]
 */
Date.prototype.onlyYmd = function(){
	var month = this.getMonth() + 1 <= 10 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1;
	var date = this.getDate() + 1 <= 10 ? '0' + this.getDate() : this.getDate();
	return this.getFullYear() + "-" + month + "-" + date;
}