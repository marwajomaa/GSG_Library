const db = require('./../db_connection');

const getBooksData = (cb) => {
	const sql = 'SELECT category.name,books.book_name,lending.book_id,books.id,books.author from books left outer join lending on books.id=lending.book_id join category on category.id=books.category_id ORDER BY id';

	db.query(sql, (err, booksData) => {
		if (err) return cb(err);
		// console.log( booksData.rows);
		return cb(null, booksData.rows);
	});
};


const searchBooks = (search, cb) => {
	const sql = {
		text: `SELECT category.name,books.book_name,lending.book_id,books.id,books.author from books left outer join lending on books.id=lending.book_id join category on category.id=books.category_id where LOWER(books.book_name) LIKE '${search}%' or LOWER(books.author) like '${search}%'`,
	};
	db.query(sql, (err, searchBooks) => {
		if (err) return cb(err);
		// console.log(searchBooks);
		return cb(null,searchBooks.rows);
	});
};



module.exports = {getBooksData, searchBooks};
