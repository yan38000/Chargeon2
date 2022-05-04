/**
 * @description lancemant du serveur
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
require('dotenv').config({path : ".env"});
//---------------------------------
// EXPORT
//---------------------------------
const app = express();
const port = process.env.PORT || 6002;

//importation variables ejs
const viewspath = path.join(__dirname,"../client/views/pages");
const viewcss = path.join(__dirname, "../../client/build")
//export route
const authRouter = require('./api/routes/auth.routes');
const technicienRoute = require('./api/routes/technicien.routes');
const globalRoute = require('./api/routes/goblal.routes');
const {auth} = require('./api/middlewares/auth.middlewares');



//importation configuration base de donnée
require('./config/config');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//ejs
app.set('views', viewspath);
app.use(express.static("client"));
app.set('view engine', 'ejs');

//routes
app.get("/" , (req ,res)=>{
    res.render("signin")
})


//route globaux
app.use('/' , globalRoute);
//route authentification
app.use('/api/auth' , authRouter);


//route technicien
app.use('/api/technicien', technicienRoute);

//status
app.use((req , res)=>{
    
    res.status(404).render('404')
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
})