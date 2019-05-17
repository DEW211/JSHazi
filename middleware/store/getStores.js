/**
 * Load all stores from the db
 * Save result to res.locals.stores
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const keszletmodel = requireOption(objectrepository, 'BoltModel');

    return function (req, res, next) {
        keszletmodel.find({}, (err, boltok) =>{
            if(err){
                return next(err);
            }

            res.locals.boltok = boltok;
            // res.locals.boltok = [
            //     {
            //         address : "1164 Vágás utca 11.",
            //         open : "11:00-12:00"
            //     },
            //     {
            //         address : "1164 Vágás utca 11.",
            //         open : "11:00-12:00"
            //     }
            // ];
            if(res.locals.boltok === 'undefined'){
                res.locals.boltok = [];
            }
            return next();
        });

        
    };
};
