
const app = require('./app');
const userTracker= require('./controllers/sendEmail');


const port = 3000;
app.listen(port, ()=>{
	console.log('server connected at port #', port);
	setInterval(function(){userTracker();},3000);
});
