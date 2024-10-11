const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new user (Registration)
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'البريد الإلكتروني مستخدم بالفعل.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            // role: 'user' // Optional: Explicitly set the role, though default is 'user'
        });

        // Generate JWT token
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined.');
            return res.status(500).json({ message: 'Internal server error.' });
        }

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return user data and token
        res.status(201).json({
            user: {
                userId: newUser.userId,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                createdAt: newUser.createdAt
            },
            token
        });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Login request body:', req.body); // Log request body

        // Validate input
        if (!email || !password) {
            console.log('Missing email or password'); // Log missing fields
            return res.status(400).json({ message: 'البريد الإلكتروني وكلمة المرور مطلوبة.' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        console.log('Found user:', user); // Log found user

        if (!user) {
            return res.status(400).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch); // Log password match result

        if (!isMatch) {
            return res.status(400).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' });
        }

        // Generate JWT token
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined.');
            return res.status(500).json({ message: 'Internal server error.' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return user data and token
        res.json({
            user: {
                userId: user.userId,
                username: user.username,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            },
            token
        });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        const requestedUserId = req.params.id;
        const authenticatedUser = req.user;

        // Allow update if the user is updating their own data or is an admin
        if (authenticatedUser.userId !== requestedUserId && authenticatedUser.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: You do not have access to update this user.' });
        }

        // If password is being updated, hash it
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await User.findOneAndUpdate(
            { userId: requestedUserId },
            req.body,
            { new: true, runValidators: true, context: 'query' }
        ).select('-password');

        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single user by ID
exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const authenticatedUser = req.user;

        // Allow access if user is trying to get their own data or is an admin
        if (authenticatedUser.userId !== userId && authenticatedUser.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: You do not have access to this user.' });
        }

        const user = await User.findOne({ userId });
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// controllers/userController.js
exports.getCurrentUser = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};
