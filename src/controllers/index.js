const express = require('express');
const router = express.Router();

const dashboard = require('./dashboard');
const login = require('./login.js');


router.get('/admin', login.get);
router.get('/dashboard', dashboard.get );
module.exports = router;
