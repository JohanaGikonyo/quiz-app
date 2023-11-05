const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

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
app.use(cors()); // Enable CORS for all routes

// Create an endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  try{
    const userData = req.body;
    const existing = await User.findOne(userData);
    if (existing) {
      // User already exists, respond with an error
      console.error('User data already exists:', existing);
      return res.status(400).send('User data already exists.');
    } else {
      // User doesn't exist, save the new data
      const user = new User(userData);
      await user.save();
      console.log('User data saved successfully:', user);
      return res.status(200).send('User data saved successfully.');
    }
  } catch (err) {
    console.error('Error saving user data:', err.message);
    return res.status(500).send('Error saving user data: ' + err.message);
  }

  })
 


app.get('/', (req, res) => {
  res.send('Successful page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
