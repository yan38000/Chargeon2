/**
 * @description route pour l'authentification
 * @author @Yan38000
 */

//---------------------------------
// DEPENDANCE
//---------------------------------
const router = require('express').Router();
const ticketController = require('../controllers/ticket.controllers');


router.post('/addTicket' , ticketController.addTicket);

 module.exports = router;