/*
 判断是否为严格模式
 * 
 * */
var isStrict = (function(){
	return !this
}())

/*
 获取对象的属性名，放入或创建新数组
 * 
 * */
function getPropertyNames(o,/*optional*/a){
	a = a || [];
	for(var x in o) a.push(x);
	return a;
}

export { 
	isStrict,
	getPropertyNames,
}
