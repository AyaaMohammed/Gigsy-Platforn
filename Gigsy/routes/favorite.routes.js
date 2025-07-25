const express = require('express');
const router = express.Router();

const favoriteController = require('../controllers/favorite.controller');

const favoriteModel = require('../models/favorite.model');


router.route('/addToFavorite/:userId/:serviceId')    
    .post(favoriteController.addFavorite);

router.route('/:id')    
    .delete(favoriteController.removeFavorite);   

router.get('/getAllForUser/:userId', favoriteController.getAllFavoritesForUser);    

router.get('/numberPerService/:serviceId', favoriteController.getServiceFavoriteCount);    

module.exports = router;