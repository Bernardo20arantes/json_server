const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve arquivos estáticos da pasta "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Define uma rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define uma rota para servir o arquivo JSON
app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
      return;
    }
    res.header('Content-Type', 'application/json');
    res.send(data);
  });
});

// Inicia o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
