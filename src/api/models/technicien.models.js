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
    type : {
        type : String,
        required : false,
        
    }
});

module.exports = mongoose.model('Technicien' , technicienrSchema);