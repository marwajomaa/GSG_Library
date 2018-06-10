const tabelDashboard = require('./../database/queries/dashboard');


exports.get = (req, res) => {
	tabelDashboard((tabelDashboardError, result) => {
		if (tabelDashboardError) return res.status(500);
		res.render('dashboard', {
			style: 'dashboard',
			result
		});
	});

};
