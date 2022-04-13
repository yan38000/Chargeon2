/**
 * @description valider les donné rentrant dans la base de donnée
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const Joi = require('joi');


const schemaTechnicienValidate = (addTechnicien) =>{
    const schema = Joi.object({
        nom : Joi.string()
            .min(1)
            .max(256)
            .required(),
        prenom : Joi.string()
            .min(1)
            .max(256)
            .required(),
        telephone : Joi.number()
            //.min(1)
            //.max(20)
            .required(),
        habilitationB : Joi.number()
            .min(0)
            .max(3),
        habilitationH : Joi.number()
            .min(0)
            .max(3)
        
    });
    return schema.validate(addTechnicien);
};


module.exports = {schemaTechnicienValidate}