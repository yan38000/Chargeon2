/**
 * @description controllers global
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.accueil = async (req , res)=>{
    res.render("accueil");
}
module.exports.profile = async (req , res)=>{
    res.render("profile");
}