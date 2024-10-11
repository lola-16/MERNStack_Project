const Product = require('../models/product');
const Review = require('../models/review');
const mongoose = require('mongoose');

// Helper to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Update product rating
const updateProductRating = async (productId) => {
    try {
        if (!isValidObjectId(productId)) {
            throw new Error('Invalid Product ID');
        }

        const result = await Review.aggregate([
            { $match: { product: mongoose.Types.ObjectId(productId) } },
            {
                $group: {
                    _id: '$product',
                    averageRating: { $avg: '$rating' }
                }
            }
        ]);        
        console.log('Aggregation result:', result);
        if (result.length > 0) {
            const averageRating = result[0].averageRating;
            await Product.findByIdAndUpdate(productId, { rating: averageRating });
        } else {
            await Product.findByIdAndUpdate(productId, { rating: 0 });
        }
    } catch (err) {
        console.error('Error updating product rating:', err);
    }
};

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
        await updateProductRating(newProduct._id);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get products by category
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

// Get a product by ID
exports.getProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!isValidObjectId(productId)) {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }

        const product = await Product.findById(productId); 

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!isValidObjectId(productId)) {
            return res.status(400).json({ error: 'Invalid product ID format' });
        }

        const { name, description, price, category, stock } = req.body;
        let updateData = { name, description, price, category, stock };
        if (req.file) {
            updateData.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await updateProductRating(product._id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!isValidObjectId(productId)) {
            return res.status(400).json({ error: 'Invalid product ID format' });
        }

        await Product.findByIdAndDelete(productId);
        res.status(204).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


