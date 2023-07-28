const sqlite = require('sqlite3').verbose();
const { dbName } = require('../config');

function openDatabase() {
  return new sqlite.Database(dbName, (err) => openDatabaseErrorHandler(err));
}

function openDatabaseErrorHandler(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
}

const db = openDatabase();

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
  db,
  command,
};
