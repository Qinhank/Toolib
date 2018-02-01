/**
 * 原生xhr异步
 */
function ajax(opt){

	var defOpt = {
		url:'',
		type:'get',
		data:{},
		success:function(){},
		error:function(){}
	}

	//合并配置
	const options = Object.assign({},defOpt,opt)

	//判断是否有url
	if(options.url){
		//定义xhr(判断是否是ie)
		var xhr = XMLHttpRequest?new XMLHttpRequest():new ActiveXObject();
		//定义一个空数组用于放置传输参数
		var dataArr = [];
		//将传输类型转成大写
		options.type = options.type.toUpperCase();
		//遍历data
		for(let i in options.data){
			dataArr.push(i+'='+options.data[i])
		}
		//判断传输类型
		if(options.type==='GET'){
			const url = options.url + '?' + dataArr.join('&')
			xhr.open(options.type,url.replace(/\?$/g,''),true)
			xhr.send()
		}

		if(options.type==='POST'){
			xhr.open(options.type,options.url,true)
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(dataArr.join('&'))
		}

		//xhr加载成功后的回调
		xhr.onload = function(){

			var res = xhr.responseText;
			//如果获取成功
			if(xhr.status===200||xhr.status==304||xhr.status==206){
				//判断sucess是否为函数
				if(options.success && typeof options.success=='function'){
					//判断返回的参数是否是字符串
					if(typeof res==='string'){
						res = JSON.parse(res);
						options.success.call(xhr,res);
					}else{
						options.success.call(xhr,res);
					}
				}
			}
			//如果获取失败
			else{
				if(options.error && typeof options.error=='function'){
					options.error.call(xhr,res)
				}
			}
		}
	}
}

module.exports = ajax;