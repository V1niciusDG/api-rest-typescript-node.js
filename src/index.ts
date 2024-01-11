import express from 'express';
import { AppDataSource } from './data-source';
import 'reflect-metadata';
import routes from './routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  const port = process.env.PORT || 3000;

  return app.listen(port, () => {
    console.log('rodando na porta 3000');
  });
});
