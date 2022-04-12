/**
 * @description : controller de l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const {schemaLoginValidate} = require('../validations/auth.validations');
const User = require('../models/auth.models');
const bcrypt = require('bcrypt');
const req = require('express/lib/request');


module.exports.register = async(req , res) => {
    const user = new User({
        name : req.body.name,
        password : req.body.password
    });
    try {
        const saveUser = await user.save();
    } catch (error) {
        res.status(400).send(error);
    };

}
module.exports.login = async(req , res) => {
    //validation 
    const {error} = schemaLoginValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

        //check si le name existe
        const nameExist = await User.findOne({name : req.body.name});
        if(!nameExist) return res.status(400).send("Le nom est invalide");

        //check si le password est correct
        const validPass = await bcrypt.compare(req.body.password , user.password);
        if(!validPass) return res.status(400).send("Le mot de passe est invalide");

        res.send('logiiin')
};
