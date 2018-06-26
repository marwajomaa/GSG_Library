const outBook = require('./../database/queries/outbook');
const nodemailer = require('nodemailer');
require('env2')('./config.env');
const sendEmail=() => {

	outBook.infoBook((err,result) => {
		if(err) console.log('error',err);
		else{

			for (var x in result) {
				const start = result[x].start_date;

				const end = result[x].end_date;
				let oneDay = 24*60*60*1000;

				let diffDays = Math.round((end.getTime() - start.getTime())/(oneDay));


				if(diffDays === 2){
					const transporter = nodemailer.createTransport({
						host: 'smtp.gmail.com',
						port: 587,
						secure: false,
						auth: {
							user:process.env.email,
							pass: process.env.pass
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

};
module.exports= sendEmail;
