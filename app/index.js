const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const calls_router = require('./api/calls');

const app = express();

app.use(cors({ origin:'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

app.use('/calls/', calls_router);


app.listen(4000, () => console.log('aman backend - listenning to port 4000'))