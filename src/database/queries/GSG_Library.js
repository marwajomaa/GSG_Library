const db = require('./../db_connection');

const getBooksData = (cb) => {
	const sql = 'SELECT category.name,books.book_name,lending.book_id,books.id,books.author from books left outer join lending on books.id=lending.book_id join category on category.id=books.category_id ORDER BY id';

	db.query(sql, (err, booksData) => {
		if (err) return cb(err);
		return cb(null, booksData.rows);
	});
};

module.exports = getBooksData;
