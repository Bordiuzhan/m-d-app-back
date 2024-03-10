const express = require('express');
const router = express.Router();

const {getAll, getDrugsByShopId} = require('../../controllers/shops');



router.get('/', getAll);
router.get('/:shopId', getDrugsByShopId);

module.exports = router;

