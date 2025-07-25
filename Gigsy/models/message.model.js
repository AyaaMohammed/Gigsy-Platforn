const mongoose = require('mongoose');
const messageType = require('../utils/Tpes/messageTypes');

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    orderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    type : {
        type: String,
        enum: [messageType.TEXT, messageType.IMAGE, messageType.VIDEO, messageType.AUDIO, messageType.FILE],
        default: messageType.TEXT
    }
});

module.exports = mongoose.model('Message', messageSchema);
    