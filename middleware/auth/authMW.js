/**
 * If the user is authenticated, call next, else redirect to /
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository){
    return function (req, res, next){
        console.log('authMW');
        if (typeof req.session.logged === 'undefined' || req.session.logged !== true) {
            console.log("redirect");
            return res.redirect('/');
        }
        next();
    };
 };