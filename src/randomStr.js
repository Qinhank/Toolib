/**
 * 获取指定随机字符串
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function randomStr(num,unique){
	var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var randomStr = '';
	var num = num || 5;
	var unique = unique || false;
	for(let i=0;i<num;i++){
		var number = parseInt(Math.random()*str.length);
		randomStr += str[number];
		if(unique){
			if(num>51){
				console.error('唯一字符串不能大于52个字符');
				return;
			}
			str.replace(str[number],'');
		}
	}
	return randomStr;
}

module.exports = randomStr;