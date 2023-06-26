const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./node-express.db');

function getAllPositions() {
  const sql = 'SELECT id, name, parentId FROM positions';
  const allPositions = [];

  db.serialize(() => {
    db.each(sql, (err, row) => {
      console.debug(row);
      allPositions.push(row);
    });
  });
  db.close();
  return allPositions;
}

module.exports = { getAllPositions };
