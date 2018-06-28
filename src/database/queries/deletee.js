const db = require('./../db_connection');

const deleteBook = (id, cb)=>{
	const sql = {
		text: 'DELETE FROM books WHERE id = $1 RETURNING *',
		values: [id]
	};

	db.query(sql, (err, result) => {
		if (err) return cb(err);
		return cb(null, result.rows);
	});
};

module.exports = deleteBook;
