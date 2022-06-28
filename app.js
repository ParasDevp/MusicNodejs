const Artist = require('./api/routes/Artist');
const Songs = require('./api/routes/Songs')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT||5000;

app.listen(PORT,console.log('server listening on port',PORT));

app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use('/Artist', Artist);
app.use('/Songs',Songs);