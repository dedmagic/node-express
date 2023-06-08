const express = require('express');

const app = express();
const port = 4000;

app.get('/', (request, response) => {
  response.send('Hello world12345');
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
