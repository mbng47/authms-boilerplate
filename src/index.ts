
require('dotenv').config();

import { logger } from './logger';
import server from './init/express/libs/express';

const name = process.env.NAME;
const host = process.env.HOSTNAME// || 'localhost';
const port = process.env.PORT// || 1050;

try {
  logger.info(`[${ name }] Boostrapping micro service`);
  server({ host, port });
} catch (error) {
  logger.error(`[${ name }] Caught exception: ${ error }`);
}

