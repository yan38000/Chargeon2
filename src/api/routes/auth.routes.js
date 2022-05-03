/**
 * @description route pour l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const authControllers = require('../controllers/auth.controllers');

router.post('/register' , authControllers.register);
router.post('/login' , authControllers.login);
router.get('/logout' , authControllers.logout);
module.exports = router;