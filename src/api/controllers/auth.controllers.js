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
const jwt = require('jsonwebtoken');
const { post } = require('../routes/auth.routes');
require('dotenv').config({path : '.env'})

/**
 * 
 * @description : creation d'un utilisateur
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.register = async(req , res) => {
   
    //message de validation
    const {error} = schemaLoginValidate(req.body);
    if (error) return res.status(401).json(error.details[0].message);
    
    //verifier si le name existe
    const nameExist = await User.findOne({name : req.body.name});
    if(nameExist) return res.status(400).json("Le nom est invalide");

    //hash le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = ({
        name : req.body.name,
        password : hashPassword
    });

    try{
        const addUser = await User.create(user);
        res.status(201).json({addUser : "add successful"});
    }
    catch(err){
        res.status(200).send({err});
    }

}

/**
 * 
 * @description : login un utilisateur
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.login = async(req , res) => {
    
    //validation 
    const {error} = schemaLoginValidate(req.body);
    if (error) return res.status(401).json(error.details[0].message);

        //check si le name existe
        const user = await User.findOne({name : req.body.name});
        if(!user) return res.status(400).json("Le nom est introuvable");

        //check si le password est correct
        const validPass = await bcrypt.compare(req.body.password , user.password);
        if(!validPass) return res.status(400).send("Le mot de passe est invalide");

        //creer et assigne un token
        const token = jwt.sign(user.toJSON() , process.env.TOKEN);
        res.cookie("access_token", token);
        
        //return res.redirect('/post')
        //res.render("post");
	    

        res.send('logiiin')
};

/**
 * 
 * @description : deconnexion de l'utilisateur
 * @param {*} req 
 * @param {*} res 
 */
module.exports.logout = async(req , res) =>{
    return res.clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
};