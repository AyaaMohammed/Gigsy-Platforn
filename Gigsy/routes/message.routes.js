const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller');

const message = require('../models/message.model');


router.route('/')
    .post(messageController.addMessage)
    .get(messageController.getAllMessages);


module.exports = router;