const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const controllers = require('./controllers');
const helpers = require('./views/helpers/index');
const Swal = require('sweetalert');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		layoutsDir: path.join(__dirname, 'views', 'layouts'),
		partialsDir: path.join(__dirname, 'views', 'partials'),
		defaultLayout: 'main',
		helpers: helpers,

	})
);




module.exports = app;
