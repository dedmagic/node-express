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

const db = new sqlite.Database(dbName, (error) => {
  if (error) {
    console.error(error);
    process.exit(10);
  }
});

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
