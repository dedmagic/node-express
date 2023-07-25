const positionRepository = require('../repositories/position.repository');

async function getAllPositions() {
  const allPositiions = await positionRepository.getAllPositions();
  return allPositiions;
}

async function getPosition(id) {
  const position = await positionRepository.getPosition(id);
  return position;
}

module.exports = { getAllPositions, getPosition };
