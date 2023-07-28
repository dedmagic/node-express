const { db, command } = require('./db-utils');

async function getAllPositions() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM positions';
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      const allPositions = [...rows];
      resolve(allPositions);
    });
  });
}

async function getPosition(id) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM positions WHERE id = $id';
    db.get(sql, { $id: id }, (error, row) => {
      if (error) {
        reject(error);
      }
      resolve(row);
    });
  });
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
