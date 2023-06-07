// import express, { Request, Response } from 'express';
const express = require('express');

const app = express();
const port = 4000;

app.get('/', (request: Request, response: Response) => {
  response.end('Hello world12');
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
