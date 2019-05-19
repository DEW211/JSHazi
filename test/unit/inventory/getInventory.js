let expect = require('chai').expect;
let getInventoryMW = require('../../../middleware/inventory/getInventory');

describe('getInventory middleware', function(){

    it('should return error when db returns error', function(done){
        let next = function(err){
            expect(err).to.eql('error');
            done();
        };
        let req = {};
        let res = {};
        let fakeModel = {
            find : function(some, cb){
                cb('error', undefined)
            }
        }
        getInventoryMW({AruModel: fakeModel})(req, res, next);

    });

    it('res.locals.aru should be [] if db returns undefined data', function(done){
        let next = function(){
            expect(res.locals.aru).to.eql([]);
            done();
        };
        let req = {};
        let res = {
            locals : {aru : undefined}
        };
        let fakeModel = {
            find : function(some, cb){
                cb(undefined, undefined)
            }
        }
        getInventoryMW({AruModel: fakeModel})(req, res, next);
        

    });

    it('should return items from db', function(done){
        let next = function(){
            expect(res.locals.aru[0].name).to.eql('Kalapács');
            expect(res.locals.aru[0].count).to.eql(2);
            expect(res.locals.aru[0].unitPrice).to.eql(1);
            expect(res.locals.aru[0]._stockAddr).to.eql('ObjectID');
            done();
        };
        let req = {};
        let res = {
            locals : {aru : undefined}
        };
        let fakeModel = {
            find : function(some, cb){
                cb(undefined, [{
                    name : 'Kalapács',
                    count : 2,
                    unitPrice : 1,
                    _stockAddr : 'ObjectID'
                }])
            }
        }
        getInventoryMW({AruModel: fakeModel})(req, res, next);
        

    });
});

