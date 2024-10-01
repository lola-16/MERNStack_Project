const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create User
router.post('/users', userController.createUser);

// Get User by ID
router.get('/users/:id', userController.getUser);

// Update User
router.put('/users/:id', userController.updateUser);

// Delete User
router.delete('/users/:id', userController.deleteUser);

// Login User
router.post('/login', userController.loginUser);

module.exports = router;
