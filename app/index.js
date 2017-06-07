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
			// 每个请求逻辑
			// readFile相对于process.cwd()查找文件[node进程的启动目录]，CWD'current working directory'
			fs.readFile('./public/index.html', 'utf8', (error, data)=> {
				response.end(data)
			});
		}
	}
}

// var APP = function() {};
// 	APP.prototype.initSever = (request, response)=> {
// 		response.end('asdf')
// 	}


module.exports = APP;