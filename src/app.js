const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
// const helpers = require('handlebars-helpers')();

const helpers = require('./views/helpers/index');


const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
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

	}),
)

module.exports = app;
