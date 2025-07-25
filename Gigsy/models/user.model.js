const mongoose = require('mongoose');
const userRole = require('../utils/Types/userRole');
const validator  = require('validator');



const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        trim: true        
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate:[validator.isEmail, 'Please enter a valid email address']    
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate : [validator.isStrongPassword, 'Password must be strong']
    },
    role: {
        type: String,
        enum: [userRole.ADMIN, userRole.CLIENT, userRole.SELLER],
        default: userRole.CLIENT
    },
    phone: {
        type: String,
        required: true,
        validate:[validator.isMobilePhone, 'Please enter a valid phone number']
    },
    Country : {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
        default : '../uploads/avatar.png',
    },
    SSN: {
        type: String,
        validate: {
            validator: function (value) {
                if (this.role === userRole.SELLER || this.role === userRole.ADMIN) {
                    return /^[0-9]{11}$/.test(value);
                }
                return true;
            },
            message: 'SSN must be 11 digits for seller or admin'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: true
    },
    bio: {
        type: String,
        maxlength: 500,
        trim: true
    },
    skills: [{
        type: String,
        trim: true
    }],
    languages: [{
        type: String,
        trim: true
    }],
    rating: {
        type: Number,
        default: 0
    },
    completedOrders: {
        type: Number,
        default: 0
    },
    social: {
        facebook: {
            type: String,
            trim: true
        },
        twitter: {
            type: String,
            trim: true
        },
        linkedin: {
            type: String,
            trim: true
        },
        website: {
            type: String,
            trim: true
        }
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('User', userSchema);