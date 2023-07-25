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
  try {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM positions WHERE id = $id';
      db.get(sql, { $id: id }, (error, row) => {
        if (error) {
          reject(error);
        }
        resolve(row);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getAllPositions, getPosition };
