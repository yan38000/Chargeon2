/**
 * @description lancemant du serveur
 * @yan38000
 */

//---------------------------------
// DEPENDANCES
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

//export route
const globalRoute = require('./api/routes/globals.routes');
const authRouter = require('./api/routes/auth.routes');
const technicienRoute = require('./api/routes/technicien.routes');
const bornesRoute = require('./api/routes/borne.routes');
const ticketsRoute = require('./api/routes/ticket.routes');

//export middleware
const {auth} = require('./api/middlewares/auth.middlewares');

//importation variable ejs
const viewspath = path.join(__dirname,"../client/views/pages");
const viewcss = path.join(__dirname, "../../client/assets");

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
app.get("/post",auth, (req,res)=>{
    res.send('nouveau post');
});

app.use('/' , globalRoute);
app.use('/api/auth' , authRouter);
app.use('/api/technicien', technicienRoute);
app.use('/api/borne' , bornesRoute);
app.use('/api/ticket' , ticketsRoute);

//status
app.use((req , res)=>{
    res.status(404).render('404');
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
});