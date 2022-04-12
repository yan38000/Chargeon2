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
        min : 3,
        max : 256
    },
    prenom : {
        type : String,
        required : true,
        min : 6,
        max : 256
    },
    telephone : {
        type : Number,
        required : true,
        min : 10,
        max : 10
    },
    habilitation : {
        type : String,
        required : true,
        min : 1,
        max : 1
    }
});

module.exports = mongoose.model('Technicien' , technicienrSchema);