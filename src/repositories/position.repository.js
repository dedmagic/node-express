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

module.exports = { getAllPositions };
