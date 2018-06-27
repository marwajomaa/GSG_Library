const db = require('./../db_connection');

const getBooksData = (cb) => {
	const sql = 'SELECT category.name as cat_name, category.id as cat_id, books.book_name,lending.book_id,books.id,books.author, books.publish_year from books left outer join lending on books.id=lending.book_id join category on category.id=books.category_id ORDER BY id';

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





const selectCategories = (cb) => {
	const sql = 'SELECT * from category';

	db.query(sql, (err, categoryResult) => {
		if (err) return cb(err);
		return cb(null, categoryResult.rows);
	});
};

const updateBooks = (id, bname,author,publish_year,category_id,description,cb) => {
	console.log(id,'hhhhhhhhhhhhhhh');
	const sql = {
		text:'update books set book_name = $2, author = $3,publish_year=$4 ,category_id=$5 ,description=$6 where id=$1 RETURNING *',
		values: [id, bname,author,publish_year,category_id,description]
	};
	db.query(sql,(err,result) =>{
		console.log(err,'eerrrr');
		console.log(result,'dddddd');
		if (err) return cb(err);
		cb(null,result.rows);
		console.log(result.rows);

	});
};



module.exports = {getBooksData, searchBooks,updateBooks,selectCategories};
