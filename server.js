// Import required modules
const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express(); // Initialize Express

// Check the IS_ADMIN environment variable
app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
