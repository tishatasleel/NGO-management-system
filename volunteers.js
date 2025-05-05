const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

router.post('/', async (req, res) => {
  const newVolunteer = new Volunteer(req.body);
  await newVolunteer.save();
  res.send('Volunteer added');
});

router.get('/', async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
});

module.exports = router;
