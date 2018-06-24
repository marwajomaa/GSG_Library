const app = require('./app');
const port = 3000;
const outBook = require('./database/queries/outbook');
const nodemailer = require('nodemailer');
app.listen(port, ()=>{
	console.log('server connected at port #', port);
});
setInterval(function(){ 




	outBook((err,result)=>{
		if(err) console.log('error',err);
		else{
		
			for (var x in result) {
				const start = result[x].start_date;
				console.log(start);
				const end = result[x].end_date;
				console.log(end);
      
		
				let oneDay = 24*60*60*1000;
	
				let diffDays = Math.round((end.getTime() - start.getTime())/(oneDay));
				console.log('ddd',diffDays);
				if(diffDays === 2){
					console.log('return boooook');
					console.log('aa',result[x].email);
				
					const transporter = nodemailer.createTransport({
						host: 'smtp.gmail.com',
						port: 587,
						secure: false,
						auth: {
							user: 'almanassah@gmail.com', 
							pass: '*20051469'
						},
					});
					const mailOptions = {
						from: '"GSG eman" <contact@gsg.com>',
						to: result[x].email,
						subject: 'lending book ',
						text: 'pleas return book ',
						html: '<b>Hell world?</b>',
					};

					transporter.sendMail(mailOptions, (err, info) => {
						if (err) console.log('err',err);
						else console.log('send email',info);
  

 
					});
            
				}
			}
		}
	});





}, 24*60*60*1000);
