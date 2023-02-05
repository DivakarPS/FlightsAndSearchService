const express = require('express');
const cityController = require('../../controllers/city-controller');
const airportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city',cityController.create);
router.get('/city/:id',cityController.get);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
router.post('/cities',cityController.createAll);
router.get('/city-airports/:id',cityController.getCityAirports);


router.post('/airport',airportController.create);
router.get('/airport/:id',airportController.get);
router.delete('/airport/:id',airportController.destroy);
router.patch('/airport/:id',airportController.update);


module.exports = router;