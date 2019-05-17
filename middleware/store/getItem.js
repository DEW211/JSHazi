/**
 * loads an item from a store, both ids are in the URL
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AruModel = requireOption(objectrepository, 'AruModel');

    return function (req, res, next) {
        console.log("getItemMW");
        AruModel.findOne({_stockAddr: req.params.storeid }, (err, aru) =>{
            if(err){
                return next(err);
            }
            console.log("getItemMW2");
            res.locals.aru = aru;
            return next();
        });
    };
};
