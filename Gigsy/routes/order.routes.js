const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

const orderModel = require('../models/order.model');

router.route('/')
    .get(orderController.getAllOrders)
    .post(orderController.addOrder);

router.route('/:id')
    .get(orderController.getOrderById)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder);
    

router.get('/getAllForUser/:userId', orderController.getAllOrdersForUser);

router.get('/getAllForSeller/:userId', orderController.getAllOrdersForSeller);

router.get('/getOrderCountPerService/:serviceId', orderController.getOrderCountPerService);

router.get('/numberOfOrders', orderController.getNumberOfOrders);

module.exports = router;