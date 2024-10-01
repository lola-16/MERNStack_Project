const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors');
const authenticateToken = require('./middlewares/authMiddleware');
const notFoundHandler = require('./middlewares/notFoundMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');
require('dotenv').config();
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect('mongodb+srv://Donicci:MERN@cluster0.zctmmxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(8080, () => console.log('Server running on port 8080'));
}).catch(err => console.error('MongoDB connection error:', err));

// Use all routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', orderRoutes);
app.use('/api', reviewRoutes);
app.use('/api', cartRoutes);

// Use authentication middleware
app.use(authenticateToken);
app.use(notFoundHandler);
app.use(errorHandler);
