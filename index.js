
let another = require('./test.js');
console.log(another);
// 查找文件优先级 .js .json .node
let package = require('./package');
console.log(package);
// node查找路径的方式
console.log(module.paths);

// ajax xhr ===http===> 服务器==>服务
const http = require('http');
// console.log(http);
const PORT = 7000;
http.createServer((request, response)=> {
	response.write('1,2,3');
	response.end('hello world')
}).listen(PORT, ()=> {
	console.log('sever listening on port ${PORT}')
});
// debug调试在package的start加上--inspect
// chrome://flags——devtools开启
// F12设置——Experiments——shift六下——node debugging
// In Chrome 58 there is an item "Open dedicated DevTools for Node" in chrome://inspect/#devices url,
// The opened inspect window will connect to node.js as soon as it starts or restarts, so there is no need to open it manually each time.