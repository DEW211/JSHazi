let express = require('express');
let app = express();

let session = require('express-session');
let bodyParser = require('body-parser');

//app.use(express.static('static'));
app.set('view engine', 'ejs');

//sessions
app.use(
	session({
		secret: 'supersecret',
		resave: false,
		saveUninitialized : false
}));

//post parsing to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

require('./route/index')(app);

//basic error handler
app.use(function(err, req, res, next){
	res.status(500).send('Problem');

	console.error(err.stack);
})

let server = app.listen(3030, function(){
	console.log('listening on port:3030');
});