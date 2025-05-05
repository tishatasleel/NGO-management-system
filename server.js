const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ngo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/volunteers', require('./routes/volunteers'));
app.use('/api/donations', require('./routes/donations'));

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
