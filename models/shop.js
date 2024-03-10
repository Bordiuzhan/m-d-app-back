const {Schema, model} = require('mongoose');
const {handelMongooseError} = require('../helpers');

/*
 Define the schema for the shop model.
 */
const shopSchema = new Schema({
    id: {
        type: Number, required: true,
    }, name: {
        type: String, required: true,
    }, location: {
        type: String, required: true,
    },

}, {versionKey: false, timestamps: true});


const Shop = model('shop', shopSchema);
module.exports = Shop;
