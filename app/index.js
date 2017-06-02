/*
 * Created by AlyciaHathaway on 2017/6/1.
 */
// 主要核心逻辑入口

const fs = require('fs');

class APP {
	constructor() {
	
	}
	initSever(request, response) {
		// readFile相对于process.cwd()查找文件[node进程的启动目录]，CWD'current working directory'
		fs.readFile('./public/index.html', 'utf8', (error, data)=> {
			response.end(data)
		});
	}
}

// var APP = function() {};
// 	APP.prototype.initSever = (request, response)=> {
// 		response.end('asdf')
// 	}


module.exports = APP;