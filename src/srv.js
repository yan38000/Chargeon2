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

const {auth} = require('./api/middlewares/auth.middlewares');

require('./config/config');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.get("/",auth , (req,res)=>{
    res.send(req.user);
});
app.use('/api/auth' , authRouter);

//status
app.use((req , res)=>{
    res.status(404).json('not found')
});

app.listen(port, (req,res)=>{
    console.log(`http://localhost:${port}`);
})