const express = require('express');
const app= express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
const controllers = require('./controllers');

const compression = require('compression');
const fileupload = require('express-fileupload');


const helpers = require('./views/helpers/index');
const Swal = require('sweetalert');

app.use(bodyParser.json({limit: '50mb'}));
app.use(fileupload());
app.use(bodyParser.urlencoded({ limit: '50mb',extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
app.use(compression());
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
app.use((req,res)=>{
	res.render('404' , { message : 'page Not Found',layout:'error',style:'404'});
});

module.exports = app;
