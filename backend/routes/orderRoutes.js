const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create Order
router.post('/orders', orderController.createOrder);

// Get Order by ID
router.get('/orders/:id', orderController.getOrder);

// Update Order
router.put('/orders/:id', orderController.updateOrder);

// Delete Order
router.delete('/orders/:id', orderController.deleteOrder);

// Get All Orders
router.get('/orders', orderController.getAllOrders);

module.exports = router;
