const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Route to get user information
router.get('/:id?', async (req, res) => {
    try {
        const { id } = req.params;

        // If an ID is provided, fetch the specific user
        if (id) {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        }

        // If no ID is provided, fetch all users
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching user(s):', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

module.exports = router;
