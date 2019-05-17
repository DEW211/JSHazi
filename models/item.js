let Schema = require('mongoose').Schema;
let db = require('../config/db');

let Item = db.model('Item', {
    name : String,
    count : Number,
    unitPrice : Number,
    _stockAddr: {
        type: Schema.Types.ObjectId,
        ref: 'Bolt'
    }
});

module.exports = Item;