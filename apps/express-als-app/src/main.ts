/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { logger } from './logger';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-als-app!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}/api`);
  logger.warn(`Listening at http://localhost:${port}/api`);
  logger.error(`Listening at http://localhost:${port}/api`);
  logger.info({ data: { x: '0', y: 0 } }, 'An info log');
  logger.info(
    {
      item: 'Orange Soda',
      price: 100.0,
    },
    'Log message with structured logging. ->'
  );
});

server.on('error', (error) => {
  logger.error({ error }, 'On server error!');
});
