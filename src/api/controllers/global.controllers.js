/**
 * @description Controllers des routes globlals
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const bornesModels = require('../models/borne.models');
/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
module.exports.globalLogin = async(req , res) =>{
    res.render("index")
}

/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalBornes = async(req , res) =>{
    const data = await bornesModels.find().select();
    res.status(200).render('bornes' , {bornes : data});
}

/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalAddBornes = async(req , res) =>{
    const data = await bornesModels.findById().select();
    res.status(200).render('Addborne' , {bornes : data});
}