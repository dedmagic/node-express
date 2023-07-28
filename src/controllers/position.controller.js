const positionService = require('../services/position.service');

const getAllHandler = async (req, res) => {
  const allPositions = await positionService.getAllPositions();
  res.json(allPositions);
};

module.exports = {
  getAllHandler,
};
