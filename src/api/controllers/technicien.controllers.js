/**
 * @description Controllers des techniciens
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const technicienModels = require('../models/technicien.models');
const {schemaTechnicienValidate} = require('../validations/technicien.validations');

/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
module.exports.addTechnicien = async(req , res) =>{
    /*
    //message de validation
    const {error} = schemaTechnicienValidate(req.body);
    if (error) return res.status(401).json(error.details[0].message);

    //verifier si le numero de telephone
    const telephoneExist = await technicienModels.findOne({telephone : req.body.telephone});
    if(telephoneExist) return res.status(400).json("Le numero de telephone es déja utliser");
    */
    //const {nom,prenom, telephone, habilitationB , habilitationH } = req.body
    const addTechnicien = ({
        nom : req.body.nom,
        prenom : req.body.prenom,
        telephone : req.body.telephone,
        habilitationB : req.body.habilitationB,
        habilitationH : req.body.habilitationH,
    })
    technicienModels.create(addTechnicien , (err, technicien)=>{
        if (!err) res.json({technicien : "create successful", technicien});
        else return res.status(400).send("probleme de creation");
    })
};

/**
 * @description modifier un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.updateTechnicien = async(req , res) =>{
    res.json('update');
};

/**
 * @description supprimer un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.deleteTechnicien = async(req , res) =>{
    res.json('delete');
};

/**
 * @description afficher tout les techniciens
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.AllTechnicien = async(req , res) =>{
    res.json('all');
};

/**
 * @description afficher un techniciens par id
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.idTechnicien = async(req , res) =>{
    res.json('get id');
};
