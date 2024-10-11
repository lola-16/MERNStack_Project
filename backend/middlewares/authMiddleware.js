const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1]; 
    console.log('Token:', token);

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};
