const express = require('express');
const {CityController,AirportController,FlightController} = require('../../controllers/index');

const router = express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/cities',CityController.createAll);
router.get('/city-airports/:id',CityController.getCityAirports);


router.post('/airport',AirportController.create);
router.get('/airport/:id',AirportController.get);
router.delete('/airport/:id',AirportController.destroy);
router.patch('/airport/:id',AirportController.update);



/*
 remember that the airplanes were added only through seeder files and add
 APIs for airplane crud here!
 So write repo - services - controllers - apis for airplanes
*/

router.post('/flights',FlightController.create);



module.exports = router;