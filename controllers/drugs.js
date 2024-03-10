const Drugs = require('../models/drug');
const {HttpError} = require('../helpers');
const {ctrlWrapper} = require('../helpers');

/*
    GET /api/drugs
    - all drugs in the database
    - return array of drugs or empty array if no drugs in the database,
    example: [ {id:  1, name: 'Drug1', image: 'url', price: 100, quantity: 10, shop: '4256'},
     {id:  2, name: 'Drug2', image: 'url', price: 200, quantity: 20, shop: '4256'}]
    - 200 OK
    - 404 Not Found
    - 500 Server Error
 */
const getAll = ctrlWrapper(async (req, res) => {
    const drugs = await Drugs.find({});
    res.status(200).json(drugs);
});



module.exports = {
    getAll,
}


