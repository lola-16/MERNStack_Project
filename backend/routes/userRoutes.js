const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/authorizeRoles');

// Registration Route (Public)
router.post('/register', userController.createUser);

// Login Route (Public)
router.post('/login', userController.loginUser);

// Get All Users (Protected, Admin Only)
router.get('/', authMiddleware, authorizeRoles('admin'), userController.getAllUsers);

// Get Single User (Protected, Self or Admin)
router.get('/:id', authMiddleware, userController.getUser);

// Update User (Protected, Self or Admin)
router.put('/:id', authMiddleware, userController.updateUser);

// Delete User (Protected, Admin Only)
router.delete('/:id', authMiddleware, authorizeRoles('admin'), userController.deleteUser);

// Get Current User (Protected, Self Only)
router.get('/me', authMiddleware, userController.getCurrentUser);


module.exports = router;
