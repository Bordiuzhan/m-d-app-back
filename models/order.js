const {Schema, model} = require('mongoose');
const {handleMongooseError} = require('../helpers');
const Joi = require('joi');

/*
    Define the schema for the order model.
 */
const orderSchema = new Schema({
    userData: {
        name: {
            type: String, required: true,
        }, email: {
            type: String, required: true,
        }, phone: {
            type: String, required: true,
        }, address: {
            type: String, required: true,
        }
    }, order: {
        type: Array, required: true,
    }, total: {
        type: Number, required: true,
    },

}, {versionKey: false, timestamps: true});


const orderSchemaJoi = Joi.object({
    userData: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        address: Joi.string().required(),
    }), order: Joi.array().required(), total: Joi.number().required(),
});

const Order = model('order', orderSchema);
module.exports = {Order, orderSchemaJoi};








