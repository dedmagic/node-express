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

module.exports = {
  db,
};
