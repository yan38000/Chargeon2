/**
 * @description lancemant du serveur
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const express = require('express');
require('dotenv').config({path : ".env"})
//---------------------------------
// EXPORT
//---------------------------------
const app = express();
const port = process.env.PORT || 6002
const technicienRoute = require('./api/routes/technicien.routes');
require('./config/config');

//route
app.get("/", (req,res)=>{
    res.send("ok");
});

app.use('/api/technicien', technicienRoute);
//status
app.use((req , res)=>{
    res.status(404).json('not found')
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
})