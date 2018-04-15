const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
