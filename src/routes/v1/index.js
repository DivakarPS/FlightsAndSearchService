const express = require('express');
const cityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',cityController.create);
router.get('/city/:id',cityController.get);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
router.post('/cities',cityController.createAll);
router.get('/city-airports/:id',cityController.getCityAirports);




module.exports = router;