/**
 * Check the pessworld received in the POST, if correct, create session for the user and redirect to /inventory
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
