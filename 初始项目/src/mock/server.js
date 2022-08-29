let express = require('express');
const Mock = require('mockjs');
// let ock = require('mockjs');
const loginData = require('./common/login.json');
const loginsearch = require('./common/loginRead.json');
let app = express();
app.use('/user/login', function (req, res) {
	console.log(req, 'req');
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录成功'
			loginData
		})
	);
});
app.use('/home/loginsearch', function (req, res) {
	console.log(req, 'req');
	res.json(
		Mock.mock({
			status: 200,
			msg: '验证成功'
			loginsearch
		})
	);
});

app.listen('8090',()=>{
	console.log("监听端口8090");
})
