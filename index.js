/*
 * Created by AlyciaHathaway on 2017/6/1.
 */

const http = require('http');
const PORT = 7000;
const APP = require('./app');
const sever = new APP();

http.createServer(sever.initSever).listen(PORT, ()=> {
	console.log('sever listening on port ${PORT}')
});
