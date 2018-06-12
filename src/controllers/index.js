const express = require('express');
const router = express.Router();

const dashboard = require('./dashboard');

const checkuser = require('./checkUser');
const login = require('./login');
const reserveBook = require('./reserveBook');

router.get('/dashboard', dashboard.get );

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/insertbook', reserveBook.get);
router.post('/insertbook', reserveBook.post);

router.get('/', (req, res)=>{
})

module.exports = router;
