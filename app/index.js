/*
 * Created by AlyciaHathaway on 2017/6/1.
 */
// 主要核心逻辑入口

const fs = require('fs');

class APP {
	constructor() {
	
	}
	initSever() {
		// 初始化的工作，和请求逻辑互不影响
		
		return (request, response)=> {
			// 解构赋值，等价于let url = request.url;
			let { url } = request;
			
			// 每个请求逻辑 根据url进行代码分发
			let staticFunc = (url)=> {
				if (url === '/') {
					url = '/index.html'
				}
				fs.readFile(`./public${url}`, 'utf-8', (err, data)=> {
					response.end(data)
				})
			};
			staticFunc(url);
			// readFile相对于process.cwd()查找文件[node进程的启动目录]，CWD'current working directory'
		}
	}
}

// var APP = function() {};
// 	APP.prototype.initSever = (request, response)=> {
// 		response.end('asdf')
// 	}


module.exports = APP;