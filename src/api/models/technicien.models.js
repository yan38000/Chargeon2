/**
 * @description : model champs de l'utilisateur
 * @author : @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const mongoose = require('mongoose');

const technicienrSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
        min : 1,
        max : 256
    },
    prenom : {
        type : String,
        required : true,
        min : 1,
        max : 256
    },
    telephone : {
        type : String,
        required : true,
        min : 1,
        max : 50
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
    }
});

module.exports = mongoose.model('Technicien' , technicienrSchema);