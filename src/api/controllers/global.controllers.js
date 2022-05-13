/**
 * @description Controllers des routes globlals
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
module.exports.globalLogin = async(req , res) =>{
    res.render("index")
}

/**
 * @description ajouter un technicien
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.globalBornes = async(req , res) =>{
    res.render("bornes")
}