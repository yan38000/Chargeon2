/**
 * @description valider les donné rentrant dans la base de donnée pour l'auth
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const Joi = require('joi');




const schemaLoginValidate = (user) =>{
    const schema = Joi.object({
        name : Joi.string()
            .min(3)
            .max(10)
            .required(),
        password : Joi.string()
            .min(6)
            .max(16)
            .required()
    });
    return schema.validate(user);
};


module.exports = {schemaLoginValidate}