const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController'); 
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/sales', authMiddleware, saleController.getAllSales); 
router.post('/sales', authMiddleware, saleController.createSale); 

module.exports = router;
