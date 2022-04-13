/**
 * @description Controllers des techniciens
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------

/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
module.exports.addTechnicien = async(req , res) =>{
    
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
