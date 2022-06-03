/**
 * @description Controllers des routes globlals
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const bornesModels = require('../models/borne.models');
const technicienModels = require('../models/technicien.models')
/**
 * @description route connexion
 * @param {*} req 
 * @param {*} res 
 */
module.exports.globalLogin = async(req , res) =>{
    res.render("index")
}

/**
 * @description afficher tout les bornes
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalBornes = async(req , res) =>{
    const data = await bornesModels.find().select();
    res.status(200).render('borne'  , {bornes : data});
}

/**
 * @description afficher id bornes
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalAddBornes = async(req , res) =>{
    const data = await bornesModels.findById().select();
    res.status(200).render('Addborne' , {bornes : data});
}

module.exports.globalBorneUpdate = async(req , res) =>{
    res.render('ticket')

}

/**
 * @description afficher tout les techniciens
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalTechnicien = async(req , res) =>{
    const allTechnicien = await technicienModels.find().select();
    res.status(200).render('technicien'  , {techniciens : allTechnicien});

}


/**
 * @description afficher tout les tickets
 * @param {*} req 
 * @param {*} res 
 */
 async function getTechnicien(req , res, next){
    const allTechnicien = await technicienModels.find().select();
    res.status(200).render('ticket'  , {techniciens : allTechnicien});
    next();
} 

 module.exports.globalTicket = async(req,res,next) =>{
    //getTechnicien(req,res,next)
    res.render('ticket');

}


    


    


