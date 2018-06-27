const outBook = require('./../database/queries/outbook');
const nodemailer = require('nodemailer');
require('env2')('./config.env');

const sendEmail=(cb)=>{
	return	outBook.infoBook((err,result)=>{
		if(err) return cb(err);
		else{
			for (var x in result) {
				const diffDays = result[x].remain.days;
				if(diffDays && diffDays <= 3){

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
						html: '<b>pleas return book </b>',
					};

					transporter.sendMail(mailOptions, (err, info) => {
						if (err) {
							cb(err, result[x]);
						}
						else{
							cb(null, result[x], info);
						}

					});

				}
			}
		}
	});

};
module.exports= sendEmail;
