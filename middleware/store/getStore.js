/**
 * Load a store from db using the :storeid param
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const BoltModel = requireOption(objectrepository, 'BoltModel')

    return function (req, res, next) {
        console.log("getStoreMW");

        BoltModel.findOne({_id: req.params.storeid}, (err, bolt) =>{
            if(err || !bolt){
                return next(err);
            }

            res.locals.bolt = bolt;
            
            return next();
        });

    };
};
