// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Uploads directory
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using current timestamp and original name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// File Filter to Accept Only Images
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only images are allowed (jpeg, jpg, png, gif)'));
    }
};

// Initialize Multer with Storage and File Filter
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

// Routes

// Create a New Product with Image Upload
router.post('/products', upload.single('image'), productController.createProduct);

// Other product routes
router.get('/products', productController.getAllProducts);
router.get('/products/category/:categoryNumber', productController.getProductsByCategory);
router.get('/products/:id', productController.getProduct);
router.put('/products/:id', upload.single('image'), productController.updateProduct); // If updating image
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
