const connection = require('../db_connection');
const tabelDashboard = (cb) => {

	const sql = {
		text: 'SELECT members.full_name,books.book_name,lending.start_date,lending.end_date from lending inner join books on books.id=lending.book_id join members on members.id=lending.member_id ',
	};
	connection.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result.rows);
	
	});
};

module.exports = tabelDashboard;
