require('dotenv').config()
const express = require('express');
const app = express();

const host = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 1050;

app.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`);
});