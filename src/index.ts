import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.end('Hello world1');
});

app.listen(port, () => {
  console.info(`Server run on port ${port}`);
});
