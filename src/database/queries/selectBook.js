const connection = require('./../db_connection');
const bookName = (bookName, cb) => {
	const sql = {
		text: 'select book_name, num_copy from books where book_name like $1',
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
module.exports = bookName;
