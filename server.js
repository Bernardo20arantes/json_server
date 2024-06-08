const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define a route to serve the JSON data
app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data' ,'db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
      return;
    }
    res.header('Content-Type', 'application/json');
    res.send(data);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
