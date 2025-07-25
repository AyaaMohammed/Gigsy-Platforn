const mongoose = require('mongoose');
const orderStatus = require('../utils/Types/orderStatus');

const orderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 5
    },
    status: {
        type: String,
        enum: [
            orderStatus.PENDING,
            orderStatus.IN_PROGRESS,
            orderStatus.DELIVERED,
            orderStatus.COMPLETED,
            orderStatus.CANCELLED
        ],
        default: orderStatus.PENDING
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deliveredAt: {
        type: Date 
    }
});

module.exports = mongoose.model('Order', orderSchema);
