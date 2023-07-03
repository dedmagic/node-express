const path = require('path');

const FILE_NAME = 'node-express.db';
const dbName = path.resolve(__dirname, '..', 'database', FILE_NAME);

module.exports = {
  dbName,
};
