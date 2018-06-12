
const jwt = require('jsonwebtoken');
require('env2')('./config.env');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
      console.log('req', req.cookies);
  const cookies = req.cookies ? (req.cookies) : {};
  if (cookies.user) {
    jwt.verify(cookies.user, secret, (err, decoded) => {
      if (err) {
        res.redirect('/login');
      }
      next();
    });
  } else {
    res.redirect('/login');
  }
};
