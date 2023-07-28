const { db } = require('./db-utils');

async function getAll(tableName) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${tableName}`;
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      const allRecords = [...rows];
      resolve(allRecords);
    });
  });
}

async function getById(tableName, id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${tableName} WHERE id = $id`;
    db.get(sql, { $id: id }, (error, row) => {
      if (error) {
        reject(error);
      }
      resolve(row);
    });
  });
}

async function command(sql, params) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

module.exports = {
  getAll,
  getById,
  command,
};
