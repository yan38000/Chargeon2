/**
 * @description : middleware jwt : verifie le token
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const jwt = require('jsonwebtoken');
require('dotenv').config({path : '.env'});


const auth = async(req , res , next) =>{
    const token = req.cookies.access_token
    //const token = authHeader && authHeader.split(' ')[1];
    //const token = req.header('auth-token');
    if(token !== undefined){
        jwt.verify(token, process.env.TOKEN,   (err, user) => {
            if(err) return res.status(401).send("Token not verified");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).redirect('/');
    }
    /*
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.TOKEN,   (err, user) => {
        if (err) {
          return res.sendStatus(401);
        }
        req.user = user;
        next();
    }
    */
    /*
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token , process.env.TOKEN);
        req.user = verified;
    } catch (error) {
        res.status(400).send('Invalidation token');
    }
    */
};

module.exports = {auth};