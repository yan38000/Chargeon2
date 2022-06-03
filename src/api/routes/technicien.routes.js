/**
 * @description Route pour les techniciens
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const technicienControllers = require('../controllers/technicien.controllers');

router.post('/addTechnicien' , technicienControllers.addTechnicien);
router.put('/updateTechnicien/:id', technicienControllers.updateTechnicien);
router.post('/deleteTechnicien/:id', technicienControllers.deleteTechnicien);
router.get('/allTechnicien', technicienControllers.AllTechnicien);
router.get('/idTechnicien/:id' , technicienControllers.idTechnicien);

module.exports = router;