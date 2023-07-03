const sqlite = require('sqlite3').verbose();
const { dbName } = require('../config');

// const db = new sqlite.Database('../../database/node-express.db');

// function getAllPositions() {
//   const db = new sqlite.Database(dbName, (err) => {
//     console.error(err);
//   });
//   const sql = 'SELECT * FROM positions';
//   const allPositions = [];

//   // db.serialize(() => {
//   //   db.each(sql, (err, row) => {
//   //     console.debug(row);
//   //     allPositions.push(row);
//   //   });
//   // });
//   // db.close();
//   db.all(sql, (err, rows) => {
//     console.debug({ rows });
//   });
//   db.close();
//   return allPositions;
// }

async function getAllPositions() {
  const db = new sqlite.Database(dbName, (err) => {
    console.error(err);
    return null;
  });

  let allPositions = [];
  const sql = 'SELECT * FROM positions';
  await db.all(sql, (err, rows) => {
    console.debug({ repository: rows });
    allPositions = [...rows];
  });
  db.close();
  return allPositions;
}

module.exports = { getAllPositions };
