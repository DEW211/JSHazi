/**
 * Using the POST params save or update a store to the db
 * if res.locals.store exists, its an update, otherwise it creates a new entity
 * 
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
