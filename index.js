
var another = require('./test.js');
console.log(another);
// 查找文件优先级 .js .json .node
var package = require('./package');
console.log(package);
// node查找路径的方式
console.log(module.paths);
