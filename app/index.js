/*
 * Created by AlyciaHathaway on 2017/6/1.
 */
// 主要核心逻辑入口

class APP {
	constructor() {
	
	}
	initSever(request, response) {
		response.end('hello')
	}
}

// var APP = function() {};
// 	APP.prototype.initSever = (request, response)=> {
// 		response.end('asdf')
// 	}


module.exports = APP;