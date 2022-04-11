/**
 * @description valider les donné rentrant dans la base de donnée
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const Joi = require('joi');




const schemaLoginValidate = data =>{
    const schema = {
        name : Joi.string()
            .min(3)
            .max(10)
            .required(),
        password : Joi.string()
            .min(6)
            .max(16)
            .required()
    };
    return Joi.valid(data , schema);
};


module.exports = {schemaLoginValidate}