/**
 * loads a stores inventory to res.locals.inventory specified in :storeid
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AruModel = requireOption(objectrepository, 'AruModel');

    return function (req, res, next) {
        console.log("getStoreMW");
        AruModel.find({ _stockAddr: req.params.storeid}, (err, aruk) => {
            if(err){
                next(err);
            }

            res.locals.aruk = aruk;
            res.locals.storeid = req.params.storeid;
            if(typeof res.locals.aruk === 'undefined'){
                res.locals.aruk = [];
            }
            return next();
        });
    };
};
