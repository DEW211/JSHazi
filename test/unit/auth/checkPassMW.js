let expect = require('chai').expect;
let checkPassMW = require('../../../middleware/auth/checkPassMW');


describe('checkPass middleware', function(){

    it('should return next if req.body.password is undefined', function(done){
        let req = {
            body: {password: undefined}
        };
        let res = {};
        let next = function(){
            done();
        }
        checkPassMW({})(req, res, next);
    });

    it('should write "Hibás jelszó!(a jelszó "asd")" to res.locals.error if password is wrong, then call next', function(done){
        let req = {
            body: {password: 'nem asd'}
        };
        let res = {
            locals: {
                error: undefined
            }
        };
        let next = function(){
            expect(res.locals.error).to.eql('Hibás jelszó!(a jelszó "asd")');
            done();
        }
        checkPassMW({})(req, res, next);
    });

    it('should save session and redirect to /inventory', function(done){
        let req = {
            body: {password: 'asd'},
            session : {
                logged : false,
                save: function(err){
                    err();
                }
            }
        };
        let res = {
            locals: {
                error: undefined
            },
            redirect: function(url){
                expect(url).to.eql('/inventory');
            }
        };
        let next = function(){
            expect(false).to.eql(true);
        }
        checkPassMW({})(req, res, next);
        expect(req.session.logged).to.eql(true);
        done();

    });
});