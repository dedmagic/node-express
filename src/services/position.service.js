const positionRepository = require('../repositories/position.repository');

async function getAllPositions() {
  const allPositiions = await positionRepository.getAllPositions();
  console.debug({ service: allPositiions });
  return allPositiions;
}

module.exports = { getAllPositions };
