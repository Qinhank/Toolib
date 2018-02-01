
	/**
	 * 更改button状态（用于提交表单等）
	 * @param  {[obj]} options [对象]
	 * 
	 * element:选择的元素
	 * status:是否可点击
	 * background:背景
	 * text:文本
	 * callback:回调函数
	 */
	function changeBtnStatus(options){
		var DEFAULTS = {
			element:'',
			status:true,
			background:'buttonface',
			text:'生效中...',
			callback:function(){}
		}

		options = Object.assign({}, DEFAULTS, options);

		(function(el,status,bg,text,callback){
			//判断元素
			var firstWord = el.slice(0,1);
			var number = "0123456789";
			if(el==''){
				console.warn('changeBtnStatus要求element为必填项！');return;
			}
			else if(number.indexOf(firstWord)>=0){
				console.warn('选择器不能以数字开头！');return;
			}

			var $el = document.querySelector(el);

			if($el==null){
				console.warn('所选元素为空！');return;
			}

			$el.setAttribute('disabled',status);
			$el.style.backgroundColor = bg;

			if(!$el.getAttribute('value')){
				$el.innerHTML = text;
			}else{
				$el.setAttribute('value',text);	
			}

			callback(status,bg,text);
		})(options.element,options.status,options.background,options.text,options.callback);
	}

module.exports = changeBtnStatus;