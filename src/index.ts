import express from 'express';
import { AppDataSource } from './data-source';
import 'reflect-metadata';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    return res.json('tudo certo');
  });

  const port = process.env.PORT || 3000;

  return app.listen(port, () => {
    console.log('rodando na porta 3000');
  });
});
