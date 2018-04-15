const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../client/build`));

app.get('/ping', (req, res) => {
  res.send('Hello World!');
});

app.get('/*', (req, res) => {
  res.send('Unknown page?');
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
