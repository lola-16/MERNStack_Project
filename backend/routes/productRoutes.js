const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create Product
router.post('/products', productController.createProduct);

// Get Product by ID
router.get('/products/:id', productController.getProduct);

// Update Product
router.put('/products/:id', productController.updateProduct);

// Delete Product
router.delete('/products/:id', productController.deleteProduct);

// Get All Products
router.get('/products', productController.getAllProducts);

module.exports = router;
