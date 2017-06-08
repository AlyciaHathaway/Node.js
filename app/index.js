/*
 * Created by AlyciaHathaway on 2017/6/1.
 */
// 主要核心逻辑入口

const fs = require('fs');
const path = require('path');

class APP {
	constructor() {
	
	}
	initSever() {
		// 初始化的工作，和请求逻辑互不影响
		
		return (request, response)=> {
			// 解构赋值，等价于let url = request.url;
			let { url } = request;
			
			// 每个请求逻辑 根据url进行代码分发
			// express框架 app.use(static('public'))绝对路径
			// 程序原则：DRY，don't repeat yourself
			let getPath = (url)=> {
				return path.path.resolve(process.cwd(), 'public', `.${url}`)
			};
			let staticFunc = (url)=> {
				if (url === '/') {
					url = '/index.html'
				}
				let _path = getPath(url);
				fs.readFile(_path, 'utf-8', (err, data)=> {
					response.end(data)
				})
			};
			staticFunc(url);
			// readFile相对于process.cwd()查找文件[node.js的当前工作目录]，CWD'current working directory'
		}
	}
}

// var APP = function() {};
// 	APP.prototype.initSever = (request, response)=> {
// 		response.end('asdf')
// 	}


module.exports = APP;