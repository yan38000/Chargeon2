/**
 * @description route global
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const globalControllers = require('../controllers/global.controllers');

router.get('/' , globalControllers.globalLogin);
router.get('/borne' , globalControllers.globalBornes);
router.get('/borne/addBorne' , globalControllers.globalAddBornes);
router.get('/technicien', globalControllers.globalTechnicien);
router.get('/ticket' , globalControllers.globalTicket);
module.exports = router;