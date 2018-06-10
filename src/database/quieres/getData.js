const db = require('./../db_connection');

const getbooksnumbers = (cb) => {
  const sql = 'SELECT COUNT(id) FROM books';

  db.query(sql, (err, booksnum) => {
    if (err) return cb(err);
    // console.log(booksnum);
    return cb(null, booksnum.rows);
  });
};

const getlentbooks = (cb) => {
  const sql = 'SELECT COUNT(member_id) FROM lending INNER JOIN members ON lending.member_id = members.id';
  db.query(sql, (err, lentbooks) => {
    if (err) return cb(err);
    // console.log(lentbooks.rows);
    return cb(null, lentbooks.rows);
  });
};

const getmembers = (cb) => {
  const sql = 'SELECT COUNT(id) FROM members';
  db.query(sql, (err, members) => {
    if (err) return cb(err);
    // console.log(members.rows);
    return cb(null, members.rows);
  });
};

const getlendingmembers = (cb) => {
  const sql = 'SELECT COUNT(member_id) FROM lending INNER JOIN members ON lending.member_id = members.id';
  db.query(sql, (err, lendingmembers) => {
    if (err) return cb(err);
    console.log(lendingmembers.rows);
    return cb(null, lendingmembers.rows);
  });
};
module.exports = {
  getbooksnumbers, getlentbooks, getmembers, getlendingmembers,
};
