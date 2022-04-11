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
const port = process.env.PORT || 6002;
const authRouter = require('./api/routes/auth.routes');
require('./config/config');

//middlewares
app.use(express.json());

//routes
app.get("/", (req,res)=>{
    res.send("ok");
});
app.use('/api/auth' , authRouter);

//status
app.use((req , res)=>{
    res.status(404).json('not found')
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
})