const renderMW = require('../middleware/renderMW');
const checkPassMW = require('../middleware/auth/authMW');
const getInventoryMW = require('../middleware/inventory/getInventory');
const authMW = require('../middleware/auth/authMW');
const getStoresMW = require('../middleware/store/getStores');
const getStoreMW = require('../middleware/store/saveStore');
const saveStoreMW = require('../middleware/store/saveStore');
const deltSoreMW = require('../middleware/store/delStore');
const getStoreInventoryMW = require('../middleware/store/getStoreInventory');
const saveStoreInventoryMW = require('../middleware/store/saveStoreInventory');
const delItemFromInventorMW = require('../middleware/store/delItemFromInventory');

module.exports = function(app){
    const objRepo = {};

    app.get('/',
    getInventoryMW(objRepo),
    checkPassMW(objRepo),
    renderMW(objRepo, 'index'));

    app.get('/inventory',
    authMW(objRepo),
    getInventoryMW(objRepo),
    renderMW(objRepo, 'inventory'));

    app.get('/store/view',
    authMW(objRepo),
    getStoresMW(objRepo),
    renderMW(objRepo, 'stores'));

    app.get('/store/view/:storeid',
    authMW(objRepo),
    getStoreInventoryMW(objRepo),
    renderMW(objRepo, 'storeInventory'));

    app.use('/store/new',
    authMW(objRepo),
    saveStoreMW(objRepo),
    renderMW(objRepo, 'newStoreForm'));
//kell még egy MW, a módosítás gombra. Kiszedi a formból, mait kell és utána módost DB-ben, utána stores view redirect /store/updateStore maybe, POST
    app.use('/store/edit/:storeid',
    authMW(objRepo),
    getStoreMW(objRepo),
    saveStoreMW(objRepo),
    renderMW(objRepo, 'storeChange'));

    app.get('/store/delete/:storeid',
    authMW(objRepo),
    getStoreMW(objRepo),
    deltSoreMW(objRepo),
    renderMW(objRepo, 'newStoreForm'));

    app.use('/store/newitem/:storeid',
    authMW(objRepo),
    saveStoreInventoryMW(objRepo),
    renderMW(objRepo, 'inventoryChange'));
//kell egy MW, a módosítás gombra. Kiszedi a formból a dolgokat és módosít DB-ben, utána store view(inventory) /store/updateItem POST
    app.use('/store/edititem/:storeid/:itemid',
    authMW(objRepo),
    getStoreInventoryMW(objRepo),
    saveStoreInventoryMW(objRepo),
    renderMW(objRepo, 'inventoryChange'));

    app.get('/store/deleteItem/:storeid/:itemid',
    authMW(objRepo),
    getStoreInventoryMW(objRepo),
    delItemFromInventorMW(objRepo),
    renderMW(objRepo, 'storeInventory'));
}
