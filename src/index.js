const app = require('./app');

const port = 3000;
// const socket = require('socket.io');
const userTracker= require('./controllers/sendEmail');

// var app = require('express')();
const http = require('http').Server(app);
require('events').EventEmitter.prototype._maxListeners = 0;
// app.get('/', function(req, res){
// 	res.send('<h1>Hello world</h1>');
// });


http.listen(port, ()=>{
	console.log('server connected at port #', port);
});

// const server = app.listen(port, ()=>{
// 	console.log('server connected at port #', port);
// });




// setInterval(function(){
// const io = socket(server);
const io = require('socket.io')(http);
userTracker((err, res)=>{
	if(err){
		data = {
			a: 'b'
		};
		return		io.sockets.emit('notification',data);
	}
	else {

		console.log('userTracker');

		console.log('fffff', res);
		const data = {
			name: ' hgh'};

		io.on('connection', (socket)=>{
			console.log('socket connected', socket.id);
			socket.on('notification',()=>{
				socket.setMaxListeners(emitter.getMaxListeners() + 1);
				socket.once('event', () => {
				  // do stuff
				  socket.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
				});
				io.sockets.emit('notification',data);
			});
		});
	}
});

// },3000);
