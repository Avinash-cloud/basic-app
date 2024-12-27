const express = require('express');
const City = require('../models/City');
const router = express.Router();

router.get('/:stateId', async (req, res) => {
    const cities = await City.find({ stateId: req.params.stateId });
    res.json(cities);
});

module.exports = router;