/*
 判断是否为严格模式
 * 
 * */
var isStrict = (function(){
	return !this
}())
export { 
	isStrict,
}
