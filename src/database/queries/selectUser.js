const connection = require('./../db_connection');
const selectUser = (username, cb) => {
  const sql = {
    text: 'SELECT * FROM admin WHERE  user_name = $1',
    values: [username],
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = selectUser;
