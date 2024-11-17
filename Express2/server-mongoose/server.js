// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // For JWT-based authentication (if needed)
const bcrypt = require('bcrypt');   // For password hashing (if needed)
const mongooseRouter = require('./server-mongoose'); // Import the router

const app = express();

// Middlewares
app.use(cors());  // Allow CORS
app.use(express.json());  // Parse incoming JSON requests

// Use the routes from the server-mongoose.js file
app.use('/api', mongooseRouter);  // All routes in server-mongoose.js will now be prefixed with /api

// Connect to MongoDB (example MongoDB URI)
mongoose.connect('mongodb://localhost:27017/petstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
