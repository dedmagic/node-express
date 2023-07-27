const express = require('express');
const bodyParser = require('body-parser');

const positionService = require('./services/position.service');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.get('/api/positions/:id', async (req, res) => {
  const { id } = req.params;
  const position = await positionService.getPosition(id);
  res.json(position);
});

app.get('/api/positions', async (req, res) => {
  const allPositions = await positionService.getAllPositions();
  res.json(allPositions);
});

app.post('/api/positions', async (req, res) => {
  const position = req.body;
  const result = await positionService.createPosition(position);
  res.json(result);
});

app.listen(PORT, () => {
  console.info(`Server run on port ${PORT}`);
});
