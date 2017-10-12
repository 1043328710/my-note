function ajax(opt){
	var opt = {
		type: opt.type || 'GET',
		url: opt.url || '',
		async: opt.async || true,
		data: opt.data || null,
		contentType: opt.contentType || "application/x-www-form-urlencoded",
		success: opt.success || function(){},
		error: opt.error || function(){}
	}
	var xhr = new XMLHttpRequest();// IE7+
	xhr.open(opt.type, opt.url, opt.async);
	xhr.setRequestHeader("Content-Type", opt.contentType);
	xhr.timeout = 1000; // 设置超时时间 IE8+
	xhr.ontimeout = function (){
		alert('请求超时');
	}
	xhr.send(format(opt.data));
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr === 304){ // 304: 请求的资源并没有修改，可以直接使用浏览器中缓存的版本
				opt.success(xhr.response);
			}else{
				opt.error()
			}
		}
	}
	function format(data){
	  if(typeof data === 'object'){
	  	var result = '';
	  	for(var i in data){
	  		result += i + '=' + data[i] + '&';
		}
		result = result.substring(0, result.length - 1);
		return result;
	  } else {
	  	return data;
	  }
	}
}
