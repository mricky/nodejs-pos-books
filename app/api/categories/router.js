const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const categories = require('./controller');

router.get('/categories',auth, categories.getAllCategories);
router.post('/categories',auth, categories.createCategory);
router.put('/categories/:id',auth, categories.updateCategory);
router.delete('/categories/:id',auth, categories.deleteCategory);
module.exports = router;
