/**
 * @Author   songStar
 * @DateTime 2017-11-09
 * @param    {[type]}   url      [script请求地址]
 * @param    {Function} callback [请求完成后回调函数]
 */
function loadScript(url, callback){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (callback) {
		if (script.readyState) {
			script.onreadystatechange = function() {
				if (script.readyState == 'complete' || script.readyState == 'loaded') {
					script.onreadystatechange = null;
					callback();
				}
			}
		} else {
			script.onload = function () {
				callback();
			}
		}
	}
	script.src = url;
	document.body.appendChild(script);
}