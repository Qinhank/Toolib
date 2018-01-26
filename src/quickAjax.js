
/**
 * 快速ajax
 * @param  {[type]}   url      [地址]
 * @param  {[type]}   type     [传输类型]
 * @param  {Function} callback [回调函数]
 * @param  {[type]}   error    [错误处理,string||function]
 */
function quickAjax(url,type,callback,error){
	if(window.jQuery || window.Zepto){
		$.ajax({
			url:url,
			dataType:'json',
			type:type||'GET',
			success:function(e){
				if(e.status != 1){
					if(typeof error != 'function'){
						alert(error||'请求失败');
					}else{
						error();
					}
				}
				callback(e);
			}
		})
	}else{
		console.warn('该方法依赖jQ或Zepto!');
	}
}

module.exports = quickAjax;