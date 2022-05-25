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
    
    //message de validation
    const {error} = schemaTechnicienValidate(req.body);
    if (error) return res.status(401).json(error.details[0].message);

    //verifier si le numero de telephone
    const telephoneExist = await technicienModels.findOne({telephone : req.body.telephone});
    if(telephoneExist) return res.status(400).json("Le numero de telephone est déja utliser");
    
    //const {nom,prenom, telephone, habilitationB , habilitationH } = req.body
    const addTechnicien = ({
        nom : req.body.nom,
        prenom : req.body.prenom,
        telephone : req.body.telephone,
        type : req.body.type
    })
    technicienModels.create(addTechnicien , (err, technicien)=>{
        if (!err) return res.redirect('/technicien');
        else return res.status(400).send("probleme de creation");
    })
};

/**
 * @description modifier un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.updateTechnicien = async(req , res) =>{
    const updateTechnicien = {_id : req.params.id};

    technicienModels.findByIdAndUpdate(updateTechnicien , req.body, (err ,techniciens)=>{
        if (!err) res.json({technicien : "update successful" , techniciens});
        else return res.status(400).send(req.params.id);
    })
};

/**
 * @description supprimer un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.deleteTechnicien = async(req , res) =>{
    const deleteTechnicien = { _id : req.params.id};

    technicienModels.findByIdAndDelete(deleteTechnicien , req.body, (err ,techniciens)=>{
        if (!err) res.json({technicien : "delete successful" , techniciens});
        else return res.status(400).send(req.params.id);
    })
};

/**
 * @description afficher tout les techniciens
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.AllTechnicien = async(req , res) =>{
    const allTechnicien = await technicienModels.find().select();
    res.status(200).json(allTechnicien || {techniciens  : "error aucun id trouvé"});
};

/**
 * @description afficher un techniciens par id
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.idTechnicien = async(req , res) =>{
    const allIdTechnicien = { _id : req.params.id};

    technicienModels.findById(allIdTechnicien, (err , techniciens)=>{
        if (!err) res.json(techniciens || {techniciens  : "error id introuvable"});
        else return res.status(400).send(req.params.id);
    })
};
