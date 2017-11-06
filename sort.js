/**
 * @Author   songStar
 * @DateTime 2017-11-06
 * @排序问题
 */
//快排，来源http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
function quickSort(arr){
    debugger
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right));
}
quickSort([5,3,1,2,4]);

//选择排序 来源：https://segmentfault.com/a/1190000009366805
//实现：选择排序是一种简单直观的排序算法，无论什么数据进去都是O(n2) 的时间复杂度。
//所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。
//通俗来说就是你们中间谁最小谁就出列，站到队列的最后边，
//然后继续对着剩余的无序数组说你们中间谁最小谁就出列，站到队列的最后边，一直到最后一个，
//继续站到最后边，这样数组就有了顺序，从小到大。
function selectSort(arr){
	var len = arr.length,
	    minIndex,
	    temp;
	for (var i = 0; i < len; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}
selectSort([5,3,1,2,4]);