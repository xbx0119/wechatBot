var express = require('express');

var router = express.Router();

var Bot = require('./bot/bot');

router.get('/', function(req, res, next) {
	res.render('index')
});

router.get('/console', function (req, res, next) {

	var robot = new Bot();

	res.render('console')
});

// io.on('connection', function (socket) {
// 	console.log('socket: a user connected');

// 	socket.on('disconnect', function () {
// 		console.log('connect break');
// 	});

// 	socket.on('login', function (info) {
// 		var data = JSON.parse(info);
// 		if (true) {
// 			const user = {
// 				name: data.user,
// 				socket: socket
// 			};
// 			userList.push(user);
// 			socket.emit('login', 'true');
// 		}
// 	});
// });


module.exports = router;