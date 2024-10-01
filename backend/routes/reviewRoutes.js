const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create Review
router.post('/reviews', reviewController.createReview);

// Get Review by ID
router.get('/reviews/:id', reviewController.getReview);

// Update Review
router.put('/reviews/:id', reviewController.updateReview);

// Delete Review
router.delete('/reviews/:id', reviewController.deleteReview);

// Get All Reviews
router.get('/reviews', reviewController.getAllReviews);

module.exports = router;
