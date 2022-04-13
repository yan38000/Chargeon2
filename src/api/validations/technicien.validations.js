/**
 * @description valider les donné rentrant dans la base de donnée
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const Joi = require('joi');


const schemaTechnicienValidate = (technicien) =>{
    const schema = Joi.object({
        nom : Joi.string()
            .min(1)
            .max(256)
            .required(),
        prenom : Joi.string()
            .min(1)
            .max(256)
            .required(),
        
    });
    return schema.validate(technicien);
};


module.exports = {schemaLoginValidate}