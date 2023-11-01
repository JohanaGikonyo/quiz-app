// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path=require('path')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const MONGO_URI=process.env.MONGO_URI



// Connect to your MongoDB database
mongoose.connect(MONGO_URI);

// Define a mongoose schema for your data
const UserSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Password: String,
  Country: String,
});

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());

// Create an endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const userData = req.body;
  const user = new User(userData);

  user.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user data.');
    } else {
      res.status(200).send('User data saved successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
