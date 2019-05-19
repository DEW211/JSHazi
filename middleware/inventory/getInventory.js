/**
 * gets the whole inventory from the db
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const aruModel = requireOption(objectrepository, 'AruModel');

    
    return function (req, res, next) {
        aruModel.find({}, (err, aru) => {
            if(err){
                return next(err);
            }

            res.locals.aru = aru;
            if(typeof res.locals.aru === 'undefined'){
                res.locals.aru = [];
            }
            return next();
        });

    };
};
