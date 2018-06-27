const app = require('./app');
const port = 3000;
const userTracker= require('./controllers/sendEmail');
const http = require('http').Server(app);
const io = require('socket.io')(http);
// require('events').EventEmitter.prototype._maxListeners = 0;

http.listen(port, ()=>{
	console.log('server connected at port #', port);
});


io.on('connection', (socket)=>{
	console.log('socket connected');

	setInterval(function(){
		userTracker((err, res)=>{
			if(err){
				const	data = {
					status: 'Fail sent: ',
					msg: err.message
				};
				return io.sockets.emit('notification',data);
			}

			console.log('response ', res);
			const data = {
			  status: 'success sent to: ',
				msg: res.accepted
			};

			return	io.sockets.emit('notification',data);
		},
		(err, result)=>{
			console.log('result:// ',result.full_name);
			const information = {
				usernName: result.full_name,
				bookId: result.id,
				msg: res.accepted
			};
		}

		);

	},90000);
});
