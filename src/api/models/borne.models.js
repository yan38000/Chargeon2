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

var borneModelExport = mongoose.model('Borne' , bornesSchema)
module.exports = borneModelExport;