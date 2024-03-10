const Shop = require('../models/shop');
const Drugs = require('../models/drug');

const {ctrlWrapper} = require('../helpers');
const {HttpError} = require('../helpers');

/*
    GET /api/shops
    - all shops in the database
    - return array of shops or empty array if no shops in the database,
    example: [ {id: 1, name: 'Shop1'}, {id: 2, name: 'Shop2'} ]
    - 200 OK
    - 404 Not Found
    - 500 Server Error

*/

const getAll = ctrlWrapper(async (req, res) => {
    const shops = await Shop.find({});
    res.status(200).json({shops});
});

/*
    GET /api/shops/:shopId/drugs
    - all drugs in the shop
    - return array of drugs or empty array if no drugs in the shop,
    example: [ {id: 1, name: 'Drug1', image: 'url', price: 100, quantity: 10, shop: '4256'},
     {id: 2, name: 'Drug2', image: 'url', price: 200, quantity: 20, shop: '4256'}]
    - 200 OK
    - 404 Not Found
    - 500 Server Error

 */

const getDrugsByShopId = ctrlWrapper(async (req, res) => {
    const {shopId} = req.params;
    console.log(shopId)
    const drugs = await Drugs.find({shop: shopId});
    console.log(drugs);
    if (!drugs) {
        throw HttpError(404, 'Shop not found');
    }
    res.status(200).json(drugs);
});


module.exports = {
    getAll, getDrugsByShopId,
}