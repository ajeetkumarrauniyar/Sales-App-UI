// Importing necessary libraries and modules
const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose'); // Library for interacting with MongoDB database
// const config = require('./config/config');  // Importing configuration settings


// Creating an Express application
const app = express();

require('dotenv').config(); // Load environment variables from .env file

// Parsing incoming JSON requests
app.use(express.json());

// Setting up the server port, default to 5000, using the configuration settings
const  port=  process.env.PORT || 5000,

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});