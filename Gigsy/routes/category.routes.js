const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');

const categoryModel = require('../models/category.model');



router.route('/')
    .post(categoryController.createCategory)
    .get(categoryController.getAllCategories);

router.route('/:id')
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory)
    .get(categoryController.getCategoryById);

router.route('/NumberOfCategories')
    .get(categoryController.getNumberOfCategories);

module.exports = router;