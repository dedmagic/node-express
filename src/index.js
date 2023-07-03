const express = require('express');

const positionService = require('./services/position.service');

const app = express();
const port = 3003;

console.clear();

app.get('/api/positions', async (request, response) => {
  const allPositions = await positionService.getAllPositions();
  console.debug({ constroller: allPositions });
  response.json(allPositions);
  //response.send('Hello world12345');
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
