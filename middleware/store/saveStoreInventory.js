/**
 * Using the POST params save or update an inventory to the db
 * if res.locals.inventory exists, its an update, otherwise it creates a new entity
 * 
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const AruModel = requireOption(objectrepository, 'AruModel');

    return function (req, res, next) {
        console.log("saveStoreInvMW");
        if(typeof req.body.name === 'undefined' || typeof req.body.count === 'undefined' ||typeof req.body.unitPrice === 'undefined'){
            res.locals.boltid = req.params.storeid;
            return next();
        }

        if(typeof res.locals.aru === 'undefined'){
            res.locals.aru = new AruModel();
        }
        console.log("saveStoreInvMW2");
        res.locals.aru.name = req.body.name;
        res.locals.aru.count = req.body.count;
        res.locals.aru.unitPrice = req.body.unitPrize;
        res.locals.aru._stockAddr = req.params.storeid;
        res.locals.boltid = req.params.storeid;
        console.log(res.locals.boltid);

        res.locals.aru.save(err => {
            if(err){
                return next(err);
            }

            return res.redirect('/store/view/' + req.params.storeid);
        });
    };
};
