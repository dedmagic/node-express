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
  if (!isPositionValid(position)) {
    return false;
  }
  const operationResult = await positionRepository.createPosition(position);
  return operationResult;
}

async function updatePosition(position) {
  if (!isPositionValid(position)) {
    return false;
  }
  const operationResult = await positionRepository.updatePosition(position);
  return operationResult;
}

function isPositionValid(position) {
  if (!position.name) {
    return false;
  }
  return true;
}

module.exports = {
  getAllPositions,
  getPosition,
  createPosition,
  updatePosition,
};
