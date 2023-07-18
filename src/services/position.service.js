const positionRepository = require('../repositories/position.repository');

async function getAllPositions() {
  const allPositiions = await positionRepository.getAllPositions();
  return allPositiions;
}

module.exports = { getAllPositions };
