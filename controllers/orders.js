const {Order} = require('../models/order');


const createOrder = async (req, res, next) => {
    console.log(req.body)
    const newOrder = await Order.create(req.body);
    console.log(newOrder)
    res.status(201).json(newOrder);
}


module.exports = {
    createOrder
}
