const mongoose = require('mongoose');
const paymentMethod = require('../utils/Types/paymentMethods'); 

const withdrawRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: [paymentMethod.PENDING, paymentMethod.APPROVED, paymentMethod.REJECTED],
    default: paymentMethod.PENDING,
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  processedAt: {
    type: Date
  }
});

module.exports = mongoose.model('WithdrawRequest', withdrawRequestSchema);
