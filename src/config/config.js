/**
 * @description connexion à la base de donnée
 * @yan38000
 */

 const mongoose = require('mongoose');

 mongoose.connect("mongodb://127.0.0.1:27017/chargeon",
 {
     useNewUrlParser : true
 }
 
 )
 .then(()=> console.log('connected to mongoDB'))
 .catch((err)=> console.log('Failed to connected', err))