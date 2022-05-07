/**
 * @description Route globale
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const globalControllers = require('../controllers/global.controllers');

router.get('/accueil' , globalControllers.accueil);
router.get('/profile' , globalControllers.profile);

module.exports = router;