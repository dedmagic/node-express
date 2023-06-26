const positionRepository = require('../repositories/position.repository');

function getAllPositions() {
  const allPositiions = positionRepository.getAllPositions();
  return allPositiions;
}

module.exports = { getAllPositions };
