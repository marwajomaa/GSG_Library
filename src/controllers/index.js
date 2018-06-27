const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
// const checkuser = require('./checkUser');
const login = require('./login');
const lendBook = require('./lendBook');
const GSG_Library = require('./GSG_Library');
const deletee = require('./deletee');
const home = require('./home');
const addnewbook = require('./addnewbook');
const waitinglist = require('./waitinglist');
const outBooks= require('./outBooks');


router.get('/', home.get);
router.post('/addToWaitingList', home.post);
router.get('/waitinglist',waitinglist.get);
router.get('/admin', login.get);
router.get('/dashboard', dashboard.get);
router.get('/GSG_Library', GSG_Library.get);
router.post('/search', GSG_Library.search);
router.post('/GSG_Library', GSG_Library.post);
router.get('/delete/:id', deletee.delete1);
router.post('/deletebookfromsearch',deletee.delete2);
router.get('/addnewbook', addnewbook.get);
router.post('/addnewbook', addnewbook.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/lendbook', lendBook.get);
router.post('/lendbook', lendBook.post);
router.get('/outbooks',outBooks.get);
router.post('/outbooks',outBooks.post);






module.exports = router;
