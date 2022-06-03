/**
 * @description valider les donné rentrant dans la base de donnée pour les technicien
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
       type : Joi.string()
            .required()
    });
    return schema.validate(addTechnicien);
};


module.exports = {schemaTechnicienValidate}