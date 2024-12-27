const express = require('express');
const Country = require('../models/Country');
const router = express.Router();

router.get('/', async (req, res) => {
    const countries = await Country.find();
    res.json(countries);
});

module.exports = router;    