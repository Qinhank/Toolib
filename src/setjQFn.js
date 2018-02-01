/**
 * 添加jq插件
 */


$.fn.changeBtnStatus = function(status,text,bg){
	this.attr('disabled',status||true);
	this.text(text||'生效中...');
	this.attr('value',text||'生效中...');
	this.css('background',bg||'buttonface');
}