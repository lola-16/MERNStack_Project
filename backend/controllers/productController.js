const Product = require('../models/product');

// Create a new product
const path = require('path');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }
        const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        const newProduct = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            image: imagePath, 
        });
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        const categoryNumber = parseInt(req.params.categoryNumber, 10);
        if (isNaN(categoryNumber)) {
            return res.status(400).json({ error: 'Invalid category number provided.' });
        }
        const products = await Product.find({ category: categoryNumber });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Server error while fetching products.' });
    }
};
// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single product
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a product
// controllers/productController.js
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let updateData = { name, description, price, category, stock };
        if (req.file) {
            updateData.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        
        const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
