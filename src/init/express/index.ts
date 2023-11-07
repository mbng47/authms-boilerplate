
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const json = express.json;
const urlencoded = express.urlencoded;

import { routes } from '../../component/controller';
import { logger } from '../../logger';
import createServer from './libs/express';

const server = ({ host, port }) =>

    createServer({ app, json, urlencoded, cors, compression, helmet, logger })
        .server({ host, port, routes });


export { server };