const renderMW = require('../middleware/renderMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const getInventoryMW = require('../middleware/inventory/getInventory');
const authMW = require('../middleware/auth/authMW');
const getStoresMW = require('../middleware/store/getStores');
const getStoreMW = require('../middleware/store/getStore');
const saveStoreMW = require('../middleware/store/saveStore');
const deleteSoreMW = require('../middleware/store/delStore');
const getStoreInventoryMW = require('../middleware/store/getStoreInventory');
const saveStoreInventoryMW = require('../middleware/store/saveStoreInventory');
const delItemFromInventorMW = require('../middleware/store/delItemFromInventory');
const getItemMW = require('../middleware/store/getItem')

const BoltModel = require('../models/inventory');
const AruModel = require('../models/item')

module.exports = function(app){
    const objRepo = {
        BoltModel : BoltModel,
        AruModel : AruModel
    };

    
   //#region 
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

    app.use('/store/edit/:storeid',
    authMW(objRepo),
    getStoreMW(objRepo),
    saveStoreMW(objRepo),
    renderMW(objRepo, 'newStoreForm'));
    
    app.get('/store/delete/:storeid',
    authMW(objRepo),
    getStoreMW(objRepo),
    deleteSoreMW(objRepo),
    renderMW(objRepo, 'newStoreForm'));
    //#endregion
    
    //új áru
    app.use('/store/newitem/:storeid',
    authMW(objRepo),
    saveStoreInventoryMW(objRepo),
    renderMW(objRepo, 'inventoryChange'));

    //áru modositas
    app.use('/store/edititem/:storeid/:itemid',
    authMW(objRepo),
    getItemMW(objRepo),
    saveStoreInventoryMW(objRepo),
    renderMW(objRepo, 'inventoryChange'));

    //aru torles
    app.get('/store/deleteItem/:storeid/:itemid',
    authMW(objRepo),
    getItemMW(objRepo),
    delItemFromInventorMW(objRepo),
    getStoreInventoryMW(objRepo),
    renderMW(objRepo, 'storeInventory'));



    app.use('/',
    getInventoryMW(objRepo),
    checkPassMW(objRepo),
    renderMW(objRepo, 'index'));
}
