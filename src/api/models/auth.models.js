/**
 * @description : model champs de l'utilisateur
 * @author : @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 3,
        max : 10
    },
    password : {
        type : String,
        required : true,
        min : 6,
        max : 16
    }
});

module.exports = mongoose.model('User' , userSchema);