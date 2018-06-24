const connection = require('./../db_connection');

const selectMember = (mobileNumber, cb) => {
	const sql = {
		text: 'SELECT * FROM members WHERE  mobile = $1',
		values: [mobileNumber],
	};
	connection.query(sql, (err, res) => {
		if (err) {
			cb(err);
		} else {
			cb(null, res.rows);
		}
	});
};

module.exports = selectMember;
