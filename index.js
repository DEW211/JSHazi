let express = require('express');
let app = express();

//app.use(express.static('static'));
app.set('view engine', 'ejs');

require('./route/index')(app);

let server = app.listen(3000, function(){
	console.log('listening on port:3000');
});