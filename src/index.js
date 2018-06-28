const app = require('./app');
const port = process.env.PORT || 3000;
const userTracker= require('./controllers/sendEmail');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dataArray = [];

http.listen(port, ()=>{
	console.log('server connected at port #', port);
});

io.on('connection', (socket)=>{
	console.log('socket connected');

	setInterval(function(){

		userTracker((err, result, res)=>{

			if(err){
				const	data = {
					status: 'Fail sent message to: ',
					msg: err.message,
					userName: result.full_name
				};

				dataArray.unshift(data);
				return io.sockets.emit('notification',dataArray);
			}

			const data = {
			  status: 'success sent to: ',
				msg: err.message,
				userName: result.full_name
			};
			dataArray.unshift(data);
			return	io.sockets.emit('notification',dataArray);
		}

		);

	},200000);
});
