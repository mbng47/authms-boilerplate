require('dotenv').config();
import { logger } from './logger';
import { server } from './init/express';

const name = process.env.NAME;
const host = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 1050;

try {
  logger.info(`Attempting to open server via micro service: ${name}`);
  server({ host, port });
} catch (error) {
  logger.error(`Attempted to open server via micro service: ${name} but caught exception: ${error}`);
}

