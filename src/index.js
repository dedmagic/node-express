const express = require('express');

const positionService = require('./services/position.service');

const app = express();
const port = 3003;

app.get('/api/positions', (request, response) => {
  const allPositions = positionService.getAllPositions();
  response.json(allPositions);
  //response.send('Hello world12345');
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
