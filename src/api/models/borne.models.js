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
   habilitationB : {
        type : String,
        required : false,
        min : 0,
        max : 3
    },
    habilitationH : {
        type : String,
        required : false,
        min : 0,
        max : 3
    },
    etat : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Borne' , bornesSchema);