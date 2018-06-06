const express = require('express');

const router = express.Router();


const login = require('./login.js');


router.get('/admin', login.get);

module.exports = router;
