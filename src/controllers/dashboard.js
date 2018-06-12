
const {
	getbooksnumbers, getlentbooks, getmembers, getlendingmembers,tabelDashboard
} = require('./../database/quieres/dashboard');

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
							style: 'dashboard', booksnumbers, lendbooks, members, lendingmembers,result
						});
					});
				});
			});
		});
	});
};
