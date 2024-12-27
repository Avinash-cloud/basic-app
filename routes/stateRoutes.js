const express = require('express');
const State = require('../models/State');
const router = express.Router();

router.get('/:countryId', async (req, res) => {
    const states = await State.find({ countryId: req.params.countryId });
    res.json(states);
});

module.exports = router;