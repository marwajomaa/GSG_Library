const db = require('./../db_connection');
const infoBook = (cb) => {
	const sql = {
		text: 'SELECT members.full_name,members.email, members.mobile,books.book_name,books.id, lending.end_date, lending.start_date, lending.id, age(lending.end_date,lending.start_date) as remain from lending inner join books on books.id=lending.book_id join members on members.id=lending.member_id',

	};
	db.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result.rows);

	});
};

const deleteBook= (id,cb) => {
	const sql = {
		text: 'delete from lending where id=$1',
		values:[id]
	};
	db.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result.rows);

	});
};

module.exports = {infoBook,deleteBook};
