const Sale = require('../models/sale');

// Function to create a sale
exports.createSale = async (req, res) => {
    try {
        console.log("Received sale data:", req.body); // Log the incoming data
        const saleData = req.body;
        const newSale = await Sale.create(saleData);
        res.status(201).json(newSale);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
};


// Function to get all sales
exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find(); // Fetch all sales
        res.status(200).json(sales); // Return the sales
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle any errors
    }
};
