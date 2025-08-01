const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reporterId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
 },
  reportedUserId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  reportedServiceId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Service'
 },
  reason: { 
    type: String, 
    required: true
 },
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Report', reportSchema);