const db = require('./../db_connection');

const allBooks = (cb) => {
	const sql = {
		text: 'select author.books,publish_year.books,book_name.books,name.category from category inner join books on category_id.books=category.id inner join lending on lending.book_id=books.id ',
	};
	db.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result.rows);

	});
};

const deleteBooks = (id,cb) => {
	const sql = {
		text: 'DELETE FROM books where id = $1 ',
	};
	db.query(sql, (dbConnectionError, result) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, result);

	});
};


const updateBooks = (req,cb) => {
	const sql = {
		text:'UPDATE books SET author=$2,publish_year=$3,category_id=$4,book_name=$5,description=$6 where id=$1',
	};
	db.query(sql,(dbConnectionError,result) =>{
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null,result.rows);
	} );
};
module.exports =allBooks,deleteBooks,updateBooks ;
