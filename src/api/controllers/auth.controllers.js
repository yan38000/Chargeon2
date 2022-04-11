/**
 * @description : controller de l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const {schemaLoginValidate} = require('../validations/auth.validations');
const User = require('../models/auth.models');

module.exports.login = async(req , res) => {
    res.send('ok login');
};