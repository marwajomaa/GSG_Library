const db = require('./../db_connection');
const outBook = (cb) => {
	const sql = {
		text: 'SELECT members.full_name,members.email,books.book_name,books.id,age(lending.end_date,lending.start_date) as remain from lending inner join books on books.id=lending.book_id join members on members.id=lending.member_id',

	};
	db.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result.rows);

	});
};

module.exports = outBook;
