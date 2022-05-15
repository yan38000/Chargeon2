/**
 * @description route pour l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const bornesControllers = require('../controllers/bornes.controllers');
const borneModels = require('../models/borne.models');

router.post('/addBorne' , bornesControllers.bornesAdd);
router.get('/allBornes' , bornesControllers.AllBornes);
router.post('/deleteBorne/:id', bornesControllers.DeletteBornes);
router.post('/updateBorne/:id', bornesControllers.updateBorne);
module.exports = router;