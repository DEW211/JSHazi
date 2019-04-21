let Schema = require('mongoose');
let db = require('../config/db');

let Item = db.Model('Item', {
    name : String,
    count : Number,
    unitPrize : Number,
    _stockAddr: {
        type: Schema.Types.ObjectId,
        ref: 'Bolt'
    }
});

module.exports = Item;