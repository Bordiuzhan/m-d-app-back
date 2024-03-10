const express = require('express');
const router = express.Router();

const {createOrder} = require('../../controllers/orders');
const {validateBody} = require("../../middlewares");
const {orderSchemaJoi} = require("../../models/order");

router.post('/', validateBody(orderSchemaJoi), createOrder);

module.exports = router;
