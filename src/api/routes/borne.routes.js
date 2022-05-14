/**
 * @description route pour l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const bornesControllers = require('../controllers/bornes.controllers');

router.post('/addBorne' , bornesControllers.bornesAdd);
router.get('/allBornes' , bornesControllers.AllBornes);
module.exports = router;