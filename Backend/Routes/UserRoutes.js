const express = require('express');
const router = express.Router();
const User = require('../Schemas/UserSchema.js');

// Register route
router.post('/register', async (req, res) => {
    const { username, email, password, address, phoneNumber } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create new user
        const newUser = new User({
            username,
            email,
            password,
            address,
            phoneNumber,
        });

        // Save user
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


const bcrypt = require('bcrypt');

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        // Success
        res.status(200).json({ message: 'Login successful', email: user.email });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
