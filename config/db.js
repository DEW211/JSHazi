let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RNALBI', {useNewUrlParser : true});

module.exports = mongoose;