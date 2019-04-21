let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RNALBI');

module.exports = mongoose;