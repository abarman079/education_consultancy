const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define schema and models
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  service: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Add to server.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User model
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' }
});
const User = mongoose.model('User', userSchema);

// Register route
app.post('/api/register', async (req, res) => {
  // Implement registration logic
});

// Login route
app.post('/api/login', async (req, res) => {
  // Implement login logic
});