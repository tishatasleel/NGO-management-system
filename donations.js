const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/', async (req, res) => {
  const newDonation = new Donation(req.body);
  await newDonation.save();
  res.send('Donation added');
});

router.get('/', async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

module.exports = router;
