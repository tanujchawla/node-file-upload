const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//Set Storage Engine
const storage = multer.diskStorage({
    destination : './public/uploads/',
    filename : function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init Upload
const upload = multer({
    storage : storage
}).single('myImage');

//Init app
const app = express();

//EJS
app.set('view engine', 'ejs');

//Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen('3050', () => {
    console.log('Running on port 3050!');
});

