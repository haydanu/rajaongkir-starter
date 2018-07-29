const express = require('express');
const router = express.Router();

const ProvinceController = require('../controllers/provinces');
const CityController = require('../controllers/cities');

router.get('/province', ProvinceController.all_provinces);
router.get('/province/:id', ProvinceController.province);
router.get('/city/', CityController.all_cities);
router.get('/city/:id/', CityController.city);
router.get('/city/:id/province/:province', CityController.city);

module.exports = router;
