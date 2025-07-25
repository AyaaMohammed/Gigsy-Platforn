const mongoose = require('mongoose');
const serviceStatus = require('../utils/Types/serviceStatus');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 5
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    images: [{
        type: String
    }],
    rating: {
        type: Number,
        default: 0
    },
    totalReviews: {
        type: Number,
        default: 0
    },
    deliveryTime: {
        type: Number,
        required: true,
        min: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        enum: [serviceStatus.ACTIVE, serviceStatus.INACTIVE, serviceStatus.PENDING, serviceStatus.REJECTED],
        default: serviceStatus.PENDING
    },
});

module.exports = mongoose.model('Service', serviceSchema);
