const mongoose = require('mongoose');



const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}); 

module.exports = mongoose.model('Favorite', favoriteSchema);