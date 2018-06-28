const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
// const checkuser = require('./checkUser');
const login = require('./login');
const lendBook = require('./lendBook');
const outBook = require('./outBooks');
const {get,search,update} = require('./GSG_Library');
const deletee = require('./deletee');
const home = require('./home');
const addnewbook = require('./addnewbook');
// const waitinglist = require('./waitinglist');
const serverError=require('./500');

router.get('/dashboard', dashboard.get );
router.post('/dashboard', dashboard.post );
router.get('/serverError', serverError.get );

router.get('/', home.get);
router.post('/addToWaitingList', home.post);
// router.get('/waitinglist',waitinglist.get);
router.get('/admin', login.get);
router.get('/GSG_Library', get);
router.post('/search', search);
router.post('/update', update);
router.get('/delete/:id', deletee.delete1);
router.post('/deletebookfromsearch',deletee.delete2);
router.get('/addnewbook', addnewbook.get);
router.post('/addnewbook', addnewbook.post);
router.get('/login', login.get);
router.post('/login', login.post);

router.get('/lendbook', lendBook.get);
router.post('/lendbook', lendBook.post);
router.get('/outBook', outBook.get);
router.post('/outBook', outBook.post);
module.exports = router;
