/**
 * Check the pessworld received in the POST, if correct, create session for the user and redirect to /inventory
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body === 'undefined' || typeof req.body.password === 'undefined'){
            return next();
        }
        //pw check
        if(req.body.password !== 'asd'){
            return next();
        }
        //session
        req.session.sessionid = 1;

        return res.redirect('/');


    };
};
