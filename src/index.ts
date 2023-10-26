require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const express = require('express');
const app = express();
const host = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 1050;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.options('*', cors({ credentials: true, origin: true }));
app.use(cors());
app.use(compression());
import { logger } from './logger';


app.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`);
});

app.get('/', (req, res) => {
    logger.info(`[EXPRESS] Received request: ${req.method}, path: ${req.path}, ip: ${req.ip}`);
    res.end('foerzta');
});

app.post('/scnd', (req, res) => {
    res.send('andra');
});