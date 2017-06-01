

const http = require('http');
const PORT = 7000;

http.createServer((request, response)=> {
	let string = JSON.stringify(require('./package.json'));
	response.end(string)
}).listen(PORT, ()=> {
	console.log('sever listening on port ${PORT}')
});
