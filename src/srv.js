/**
 * @description lancemant du serveur
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const express = require('express');
const path = require('path');
require('dotenv').config({path : ".env"});
//---------------------------------
// EXPORT
//---------------------------------
const app = express();
const port = process.env.PORT || 6002;

//export route
const authRouter = require('./api/routes/auth.routes');
const technicienRoute = require('./api/routes/technicien.routes');

const {auth} = require('./api/middlewares/auth.middlewares');
const { patch } = require('./api/routes/auth.routes');

//importation configuration base de donnée
require('./config/config');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, '../test'))
//routes
app.get("/", (req,res)=>{
    res.render("test")
});
app.get("/post",auth, (req,res)=>{
    res.send('nouveau post')
});
app.use('/api/auth' , authRouter);

app.use('/api/technicien', technicienRoute);
//status
app.use((req , res)=>{
    res.status(404).json('not found')
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
})