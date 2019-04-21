let Schema = require('mongoose').Schema;
let db = require('../config/db');

let Bolt = db.model('Bolt', {
    address : String,
    open : String

});

module.exports = Bolt;