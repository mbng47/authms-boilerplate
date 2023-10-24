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


app.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`);
});



app.get('/', (req, res) => {
    res.send('foerzta');

})

const spel = [
    {id: 1, name: 'BOTW'},
    {id: 2, name: 'GOW'},
    {id: 3, name: 'SM2'},
    {id: 4, name: 'TLOU'},
    {id: 1, name: 'CP4'},
]


app.get('/scnd', (req, res) => {
    res.send(spel);
    // res.send(req.body);
    console.log(req.body);
})

app.post('/scnd', (req, res) => {
    res.send('andra');
    console.log(req.body);
})