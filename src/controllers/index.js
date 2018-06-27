const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
// const checkuser = require('./checkUser');
const login = require('./login');
const lendBook = require('./lendBook');
const outBook = require('./outBooks');
const GSG_Library = require('./GSG_Library');

const serverError=require('./500');

router.get('/dashboard', dashboard.get );

router.get('/serverError', serverError.get );

router.get('/GSG_Library', GSG_Library.get);
router.post('/GSG_Library', GSG_Library.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/lendbook', lendBook.get);
router.post('/lendbook', lendBook.post);

router.get('/outBook', outBook.get);
router.post('/outBook', outBook.post);

module.exports = router;
