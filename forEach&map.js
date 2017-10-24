// 来自http://www.cnblogs.com/jocyci/p/5508279.html
// 原理：
// 高级浏览器支持forEach方法
// 语法：forEach和map都支持2个参数：一个是回调函数（item,index,list）和上下文；
// forEach:用来遍历数组中的每一项；这个方法执行是没有返回值的，对原来数组也没有影响；
// 数组中有几项，那么传递进去的匿名回调函数就需要执行几次；
// 每一次执行匿名函数的时候，还给其传递了三个参数值：数组中的当前项item,当前项的索引index,原始数组input；
// 理论上这个方法是没有返回值的，仅仅是遍历数组中的每一项，不对原来数组进行修改；但是我们可以自己通过数组的索引来修改原来的数组；
// forEach方法中的this是ary,匿名回调函数中的this默认是window；
 
var ary = [12,23,24,42,1];
var res = ary.forEach(function (item,index,input) {
     input[index] = item*10;
})
console.log(res);//-->undefined;
console.log(ary);//-->会对原来的数组产生改变；
 

// map:和forEach非常相似，都是用来遍历数组中的每一项值的，用来遍历数组中的每一项；
// 区别：map的回调函数中支持return返回值；return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；
// 不管是forEach还是map 都支持第二个参数值，第二个参数的意思是把匿名回调函数中的this进行修改。
 
var ary = [12,23,24,42,1];
var res = ary.map(function (item,index,input) {
     return item*10;
})
console.log(res);//-->[120,230,240,420,10];
console.log(ary);//-->[12,23,24,42,1]；
 
 
// 兼容写法：
// 不管是forEach还是map在IE6-8下都不兼容（不兼容的情况下在Array.prototype上没有这两个方法）,那么需要我们自己封装一个都兼容的方法，代码如下：
 
/**
* forEach遍历数组
* @param callback [function] 回调函数；
* @param context [object] 上下文；
*/
Array.prototype.myForEach = function myForEach(callback,context){
    context = context || window;
    if('forEach' in Array.prototye) {
        this.forEach(callback,context);
        return;
    }
    //IE6-8下自己编写回调函数执行的逻辑
    for(var i = 0,len = this.length; i < len;i++) {
        callback && callback.call(context,this[i],i,this);
    }
}
 

 
/**
* map遍历数组
* @param callback [function] 回调函数；
* @param context [object] 上下文；
*/
Array.prototype.myMap = function myMap(callback,context){
    context = context || window;
    if('map' in Array.prototye) {
        return this.map(callback,context);
    }
    //IE6-8下自己编写回调函数执行的逻辑
    var newAry = [];
    for(var i = 0,len = this.length; i < len;i++) {
        if(typeof  callback === 'function') {
            var val = callback.call(context,this[i],i,this);
            newAry[newAry.length] = val;
        }
    }
    return newAry;
}