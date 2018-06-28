const db = require('./../db_connection');

const checklentbooks = (cb) => {
	const sql = 'SELECT category.name,books.book_name,lending.book_id,books.id,books.author,books.image from books left outer join lending on books.id=lending.book_id join category on category.id=books.category_id ORDER BY id';
	db.query(sql, (err, lentbooks) => {
		if (err) return cb(err);
		return cb(null,lentbooks.rows);
	});
};
const addToWaitingList =(memberName, bookName, date, cb)=>{
	const selectIds = {
		text: 'SELECT members.id as mId,books.id as bId FROM members INNER JOIN books ON members.id = books.id WHERE members.full_name = $1 AND books.book_name = $2',
		values : [memberName,bookName]
	};
	db.query(selectIds, (err, data) => {
		if (err) return cb(err);

		const sql = {
			text: 'INSERT INTO waiting_list(member_id,book_id,date) VALUES($1, $2, $3) RETURNING *',
			values: [data.rows[0].mid,data.rows[0].bid, date]
		};
		db.query(sql, (err ,waitingList)=>{
			if(err) return cb(err);
			cb(null , waitingList.rows);
		});

	});
};


module.exports ={checklentbooks, addToWaitingList };
