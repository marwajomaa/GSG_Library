const db = require('./../db_connection');

const getbooksnumbers = (cb) => {
	const sql = 'SELECT COUNT(id) FROM books';

	db.query(sql, (err, booksnum) => {
		if (err) return cb(err);
		return cb(null, booksnum.rows);
	});
};

const getlentbooks = (cb) => {
	const sql = 'SELECT COUNT(member_id) FROM lending INNER JOIN members ON lending.member_id = members.id';
	db.query(sql, (err, lentbooks) => {
		if (err) return cb(err);
		return cb(null, lentbooks.rows);
	});
};

const getmembers = (cb) => {
	const sql = 'SELECT COUNT(id) FROM members';
	db.query(sql, (err, members) => {
		if (err) return cb(err);
		return cb(null, members.rows);
	});
};

const getlendingmembers = (cb) => {
	const sql = 'SELECT COUNT(member_id) FROM lending INNER JOIN members ON lending.member_id = members.id';
	db.query(sql, (err, lendingmembers) => {
		if (err) return cb(err);
		return cb(null, lendingmembers.rows);
	});
};

const tabelDashboard = (cb) => {
	const sql = {
		text: 'SELECT members.full_name,books.book_name,lending.start_date,lending.end_date from lending INNER JOIN books ON books.id=lending.book_id join members on members.id=lending.member_id ',
	};
	db.query(sql, (dbConnectionError, resultForTabel) => {
		if (dbConnectionError) return cb(dbConnectionError);
		cb(null, resultForTabel.rows);

	});
};
module.exports = {
	getbooksnumbers, getlentbooks, getmembers, getlendingmembers, tabelDashboard
};
