const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', () => {
    res.render('index');
});

app.listen('3050', () => {
    console.log('Running on port 3050!');
});

