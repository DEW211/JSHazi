/**
 * deletes an item from a stores inventory. Store is specified by :storeid and the item by :itemid
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    return function (req, res, next) {
        console.log("deleitemMW");
        if(typeof res.locals.aru === 'undefined'){
            return next();
        }

        res.locals.aru.remove( err => {
            if(err){
                return next(err);
            }

            return res.redirect('/store/view/' + req.params.storeid);
        })
    };
};
