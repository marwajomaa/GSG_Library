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
	const {data}=req.body;
	sendMail(data,(err,result) => {
		console.log(data);
		if(err)
		 return res.status(500);
		else{
			let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 587,
				secure: false,
				auth: {
					user:process.env.email,
					pass:process.env.pass
				}
			});
			let mailOptions = {
				from:'GSG library',
				to: result[0].email,
				subject: 'GSG library',
				text: 'Hello,Im Sarah from GSG,just reminder you the time is up and you have return the book :D ',
				html: '<b> Hello from GSG, your period for reading a book done, please return it to Sarah,hope you enjoyed </b>'
			};


			transporter.sendMail(mailOptions, (err, info) => {

				if (err) console.log('err',err);
				else console.log('send email',info);

			});

		}

	});
};
