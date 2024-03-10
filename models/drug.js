const {Schema, model} = require('mongoose');
const {handleMongooseError} = require('../helpers');

/*
    Define the schema for the drug model.
 */

const drugSchema = new Schema({
    id: {
        type: Number, required: true,
    }, name: {
        type: String, required: true,
    }, image: {
        type: String, required: true,
    }, price: {
        type: Number, required: true,
    }, quantity: {
        type: Number, required: true,
    }, shop: {
        type: String, required: true,
    }
}, {versionKey: false, timestamps: true});



const Drugs = model('drug', drugSchema);


module.exports = Drugs;


