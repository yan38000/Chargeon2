/**
 * @description Controllers des routes bornes
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const { all } = require('express/lib/application');
const bornesModels = require('../models/borne.models');


/**
 * @description ajouter une bornes
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.bornesAdd = async(req , res) =>{
    const addBornes = ({
        localisation : req.body.localisation,
        adress : req.body.adress,
        type : req.body.type,
        etat : req.body.etat
    })
    bornesModels.create(addBornes , (err, borne)=>{
        if (!err) return res.redirect('/borne');
        else return res.status(400).send("probleme de creation");
    })
}

/**
 * @description afficher tout les bornes
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.AllBornes = async(req , res) =>{
    const data = await bornesModels.find().select();
    res.status(200).render('bornes' , {bornes : data});
};

/**
 * @description supprimer un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.DeletteBornes = async(req , res) =>{
    const deleteBorne = { _id : req.params.id};

    bornesModels.findByIdAndDelete(deleteBorne , req.body, (err ,bornes)=>{
        if (!err) return res.redirect('/borne');
        else return res.status(400).send(req.params.id);
    })
};

/**
 * @description modifier un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.updateBorne = async(req , res) =>{
    const updateBornes = {_id : req.params.id};

    bornesModels.findByIdAndUpdate(updateBornes , req.body, (err)=>{
        if (!err) return res.redirect('/borne');
        else return res.status(400).send(req.params.id);
    })
};