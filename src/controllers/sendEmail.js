const outBook = require('./../database/queries/outbook');
const nodemailer = require('nodemailer');
require('env2')('./config.env');
const sendEmail=(cb)=>{
	outBook((err,result)=>{
		if(err) console.log('error',err);
		else{
			for (var x in result) {
				const diffDays = result[x].remain.days;
				if(diffDays && diffDays <= 3){
					const transporter = nodemailer.createTransport({
						host: 'smtp.gmail.com',
						port: 587,
						secure: false,
						auth: {
							user:'beinlive.co@gmail.com',
							pass: '*20//051469'
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
						if (err) {
							// console.log('errrrrrror', err);
							cb(err);
						}
						else{
							// console.log(info);
							cb(null, info);
						}

					});

				}
			}
		}
	});

};
module.exports= sendEmail;
