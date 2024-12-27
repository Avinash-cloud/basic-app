const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { firstName, lastName, email, country, state, city, gender, dob } = req.body;

    // Validation
    const errors = [];
    if (!/^[A-Za-z]+$/.test(firstName)) errors.push('Invalid first name');
    if (!/^[A-Za-z]+$/.test(lastName)) errors.push('Invalid last name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Invalid email');
    if (!country || !state || !city) errors.push('Country, state, and city are required');
    if (!gender) errors.push('Gender is required');
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 14 || age > 99) errors.push('Invalid date of birth');

    if (errors.length > 0) return res.status(400).json({ errors });

    const user = new User({ firstName, lastName, email, country, state, city, gender, dob,age });
    await user.save();
    res.status(200).json({ message: 'User saved successfully' });
});

module.exports = router;