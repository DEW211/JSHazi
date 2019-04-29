/**
 * If the user is authenticated, call next, else redirect to /
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository){
    return function (req, res, next){
        if(typeof req.session.sessionid === 'undefined'){
            res.redirect('/');
        }
        return next();
    };
 };