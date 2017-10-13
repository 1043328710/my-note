
function clearWhiteSpace(el){
	var i = 0, len = el.childNodes.length;
	for(; i < len; i++){
		var node = el.childNodes[i];
		if (node.nodeType === 3 && !/\S/.test(node.nodeValue)){ //判断是否是空白节点
			node.parentNode.removeChild(node);
		}
	}
}
