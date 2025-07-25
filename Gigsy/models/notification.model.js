const mongoose = require('mongoose');
const notificationType= require('../utils/Types/notificationType');

const notificationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: [notificationType.ORDER_STATUS_CHANGED, notificationType.NEW_SERVICE_REQUEST],
    required: true,
    default: notificationType.ORDER_STATUS_CHANGED
  },
  message: {
    type: String,
    required: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', 
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
