

const requireOption = require('../requireOption');
/**
 * Check the pessworld received in the POST, if correct, create session for the user and redirect to /inventory
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('checkPassMW');
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
