const {
	getbooksnumbers,
	getlentbooks,
	getmembers,
	getlendingmembers,
	tabelDashboard,
	sendMail

} = require('./../database/queries/dashboard');
const nodemailer = require('nodemailer');
require('env2')('./config.env');

exports.get = (req, res) => {
	getbooksnumbers((err, booksnumbers) => {
		if (err) {
			res.send('error in database');
		}
		getlentbooks((err, lendbooks) => {
			if (err) {
				res.send('error in database');
			}
			getmembers((err, members) => {
				if (err) {
					res.send('error in database');
				}
				getlendingmembers((err, lendingmembers) => {
					if (err) {

						res.send('error in database');
					}
					tabelDashboard((tabelDashboardError, result) => {

						if (tabelDashboardError) return res.status(500);
						res.render('dashboard', {
							style: 'dashboard',
							booksnumbers,
							lendbooks,
							members,
							lendingmembers,
							result
						});
					});
				});
			});
		});
	});
};
exports.post =(req,res)=>{
	// console.log('done',req.body.data);

	const {data}=req.body;
	sendMail(data,(err,result) => {
		if(err) return res.status(500);
		else{
			// const email= result[0].email;
			console.log(result[0].email);

			// console.log(result);
			// Generate test SMTP service account from ethereal.email
			// Only needed if you don't have a real mail account for testing
			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user:'', // generated ethereal user
					pass:''
				}
			});
			let mailOptions = {
				from: 'process.env.EMAIL', // sender address
				to: result[0].email, // list of receivers
				subject: 'Hello ✔', // Subject line
				text: 'Hello world?', // plain text body
				html: '<b>Hello world?</b>' // html body
			};

				// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
			});

		}

	});
};
