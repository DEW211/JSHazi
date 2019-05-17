

const requireOption = require('../requireOption');
/**
 * Check the pessworld received in the POST, if correct, create session for the user and redirect to /inventory
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('checkPassMW');
        if(typeof req.body.password === 'undefined'){
            return next();
        }
        //pw check
        if(req.body.password === 'asd'){
            req.session.logged = true;
            console.log("pass checking");
            return req.session.save(err => res.redirect('/inventory'));
        }
        
        res.locals.error = 'Hibás jelszó!(a jelszó "asd")'
        return next();


    };
};
