/**
 * @description Route pour les technicien
 * @yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const technicienControllers = require('../controllers/technicien.controllers');

router.post('/addTechnicien' , technicienControllers.addTechnicien);
router.put('/updateTechnicien', technicienControllers.updateTechnicien);
router.delete('/deleteTechnicien/:id', technicienControllers.deleteTechnicien);
router.get('/allTechnicien', technicienControllers.AllTechnicien);
router.get('/idTechnicien/:id' , technicienControllers.idTechnicien);

module.exports = router;