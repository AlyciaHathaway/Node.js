//第一种导出模块方式
//导出一个hello，称之为'接口'
//exports是module.exports的简写
exports.hello = 'world';

// 第二种导出模块方式
var hello = 'world';
module.exports = {
	hello: hello
};