/**
 * Using the POST params save or update an inventory to the db
 * if res.locals.inventory exists, its an update, otherwise it creates a new entity
 * 
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
