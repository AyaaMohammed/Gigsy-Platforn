const mongoose = require('mongoose');
const categoryType = require('../utils/Types/categoryTypes');


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        enum :[
            categoryType.DESIGN,
            categoryType.DEVELOPMENT,
            categoryType.WRITING,
            categoryType.MARKETING
        ],
        required: true,
        default: categoryType.DEVELOPMENT
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Category', categorySchema);