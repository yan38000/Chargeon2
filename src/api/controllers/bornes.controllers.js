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
        habilitationB : req.body.habilitationB,
        habilitationH : req.body.habilitationH,
        etat : req.body.etat
    })
    bornesModels.create(addBornes , (err, borne)=>{
        if (!err) res.json({borne : "create successful", borne});
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