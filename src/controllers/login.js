const selectUser = require('../database/queries/selectUser');
const {sign} = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = process.env.SECRET;

exports.get = (req, res, next)=>{
  res.render('login', { style: 'css/login.css' });
}

exports.post = (req, res) => {
  const {username, password} = req.body;

  selectUser(username, (err, data) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!data.length) return res.status(404).send('Error in Username or Password');
bcrypt.compare(password, data[0].password, (err, response) => {
  if (err) return res.status(500).send('Error on the server.');
        if(!response){
          return res.status(401).send({ auth: false, token: null });
        } else {
          const userData = { userId: data[0].id, userName: data[0].user_name };
          const token = sign(userData, secret);
          res.cookie('user', token, { maxAge: 3600, httpOnly: true });
          res.redirect('/');
        }
      });
    });
  }
