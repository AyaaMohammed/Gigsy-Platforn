const mongoose = require('mongoose');
const paymentStatus = require('../utils/Types/paymentStatus');
const paymentMethod = require('../utils/Types/paymentMethod');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    unique: true
  },
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
  amount: {
    type: Number,
    required: true
  },
  platformFee: {
    type: Number,
    required: true
  },
  sellerReceives: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: [paymentStatus.COMPLETED, paymentStatus.FAILED, paymentStatus.CANCELLED, paymentStatus.ON_HOLD, paymentStatus.RELEASED],
    default: paymentStatus.ON_HOLD
  },
  paymentMethod: {
    type: String,
    enum: [paymentMethod.VISA, paymentMethod.PAYPAL, paymentMethod.WALLET],
    default: paymentMethod.VISA,
    required: true
  },
  paidAt: {
    type: Date,
    default: Date.now
  },
  releasedAt: Date
});

module.exports = mongoose.model('Payment', paymentSchema);
