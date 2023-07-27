const { db } = require('./db-utils');

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
  const { name, parentId } = position;

  return new Promise((resolve, reject) => {
    const sql =
      'INSERT INTO positions(name, parentId) VALUES($name, $parentId)';
    db.run(sql, { $name: name, $parentId: parentId }, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

module.exports = { getAllPositions, getPosition, createPosition };
