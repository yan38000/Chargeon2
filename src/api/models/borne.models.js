/**
 * @description : model champs de la borne
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const { required } = require('joi');
const mongoose = require('mongoose');

const bornesSchema = new mongoose.Schema({
    localisation : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true,
        
    },
    type : {
        type : String,
        required : false,
        
    },
    etat : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Borne' , bornesSchema);