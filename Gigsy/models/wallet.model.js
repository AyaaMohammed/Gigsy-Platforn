const mongoose = require('mongoose');
const transactionTypes = require('../utils/Types/transactionTypes');


const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [transactionTypes.INCOME, transactionTypes.WITHDRAW],
    default: transactionTypes.INCOME,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: String, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true 
  },
  balance: {
    type: Number,
    default: 0
  },
  transactions: [transactionSchema] 
});

module.exports = mongoose.model('Wallet', walletSchema);
