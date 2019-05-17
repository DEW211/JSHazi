/**
 * Removes a store form the database, details under res.locals.store
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof res.locals.bolt === 'undefined'){
            return next();
        }

        res.locals.bolt.remove(err =>{
            if(err){
                next(err);
            }

            return res.redirect('/store/view')
        })
    };
};
