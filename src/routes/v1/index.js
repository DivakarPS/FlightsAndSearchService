const express = require('express');
const {CityController,AirportController,FlightController,AirplaneController} = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');

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
router.get('/airport-cities/:id',AirportController.getCityAirports);


/*
 remember that the airplanes were added only through seeder files and add
 APIs for airplane crud here!
 So write repo - services - controllers - apis for airplanes
*/
router.post('/airplane', AirplaneController.create);
router.get('/airplane/:id', AirplaneController.get);
router.post('/airplane/:id', AirplaneController.destroy);
router.patch('/airplane/:id', AirplaneController.update)




router.post(
    '/flight',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flight/',FlightController.getAll);
router.post('/flight/:id', FlightController.destroy);
router.patch('/flight/:id',FlightController.update);
router.get('/flight/:id', FlightController.get);


module.exports = router;