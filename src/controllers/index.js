const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
// const checkuser = require('./checkUser');
const login = require('./login');
const lendBook = require('./lendBook');
const GSG_Library = require('./GSG_Library');
const outBooks= require('./outBooks');

router.get('/dashboard', dashboard.get );
router.post('/dashboard', dashboard.post );


router.get('/GSG_Library', GSG_Library.get);
router.post('/GSG_Library', GSG_Library.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/lendbook', lendBook.get);
router.post('/lendbook', lendBook.post);


router.get('/outbooks',outBooks.get);
router.post('/outbooks',outBooks.post);


module.exports = router;
