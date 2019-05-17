/**
 * Using the POST params save or update a store to the db
 * if res.locals.store exists, its an update, otherwise it creates a new entity
 * 
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const boltModel = requireOption(objectrepository, 'BoltModel');

    return function (req, res, next) {
        console.log("saveStoreMW");

        if(typeof req.body.address === 'undefined' || typeof req.body.open === 'undefined'){
            return next();
        }

        if(typeof res.locals.bolt === 'undefined'){
            res.locals.bolt = new boltModel();
        }

        res.locals.bolt.address = req.body.address;
        res.locals.bolt.open = req.body.open;

        res.locals.bolt.save(err => {
            if(err){
                return next(err);
            }

            return res.redirect('/store/view');
        });

        
    };
};
