const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/ping', (req, res) => {
  res.send('Hello World! fff');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}...`));
