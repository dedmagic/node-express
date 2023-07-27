const positionRepository = require('../repositories/position.repository');

async function getAllPositions() {
  const allPositiions = await positionRepository.getAllPositions();
  return allPositiions;
}

async function getPosition(id) {
  const position = await positionRepository.getPosition(id);
  return position;
}

async function createPosition(position) {
  // TODO: добавить валидацию
  const operationResult = await positionRepository.createPosition(position);
  return operationResult;
}

module.exports = { getAllPositions, getPosition, createPosition };
