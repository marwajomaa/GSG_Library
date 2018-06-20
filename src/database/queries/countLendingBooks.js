const connection = require('../db_connection');
const countLendingBooks = (bookName, cb) => {
	const sql = {
		text: 'select count(*) from lending inner join books on lending.book_id = books.id where books.book_name = $1;',
		values: [bookName],
	};
	connection.query(sql, (err, res) => {
		if (err) {
			cb(err);
		} else {
			cb(null, res.rows);
		}
	});
};
module.exports = countLendingBooks;
