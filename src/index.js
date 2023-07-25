const express = require('express');

const positionService = require('./services/position.service');

const app = express();
const port = 3003;

app.get('/api/positions/:id', async (req, res) => {
  const { id } = req.params;
  const position = await positionService.getPosition(id);
  res.json(position);
});

app.get('/api/positions', async (req, res) => {
  const allPositions = await positionService.getAllPositions();
  res.json(allPositions);
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
