/**
 * gets the whole inventory from the db
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    console.log('getInventoryMW');
    return function (req, res, next) {
        next();
    };
};
