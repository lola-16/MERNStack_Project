const offer = require('../models/offers');

// Create a new product
const path = require('path');

// Create a new product
exports.createoffer = async (req, res) => {
    try {
        const { name,  price } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }
        const imagePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        const newOffer= await offer.create({
            name,
            price,
            image: imagePath, 
        });
        
        res.status(201).json(newOffer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Get all products
exports.getAlloffer = async (req, res) => {
    try {
        const offer = await offer.find();
        res.status(200).json(offer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




// Update a product
// controllers/productController.js
exports.updateOffer = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let updateData = { name, description, price, category, stock };
        if (req.file) {
            updateData.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        
        const offer = await offer.findByIdAndUpdate(req.params.id, updateData, { new: true });
        
        if (!offer) {
            return res.status(404).json({ error: 'offer not found' });
        }
        
        res.status(200).json(offer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a product
exports.deleteOffer = async (req, res) => {
    try { 
        await Offer.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'offer deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
