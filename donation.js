const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  date: Date
});
module.exports = mongoose.model('Donation', donationSchema);
