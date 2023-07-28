const { getAll, getById, command } = require('../lib/sql-utils');

async function getAllPositions() {
  return await getAll('positions');
}

async function getPosition(id) {
  return await getById('positions', id);
}

async function createPosition(position) {
  const sql = `INSERT INTO positions(name, parentId)
               VALUES($name, $parentId)`;

  const { name, parentId } = position;
  const params = { $name: name, $parentId: parentId };

  return await command(sql, params);
}

async function updatePosition(position) {
  const sql = `UPDATE positions
               SET name = $name, parentId = $parentId
               WHERE id = $id`;

  const { id, name, parentId } = position;
  const params = { $id: id, $name: name, $parentId: parentId };

  return await command(sql, params);
}

module.exports = {
  getAllPositions,
  getPosition,
  createPosition,
  updatePosition,
};
