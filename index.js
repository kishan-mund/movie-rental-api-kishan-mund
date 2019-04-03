// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');

// const app = express();



// //Movie Route
// app.get('/', (req, res) => {
//     res.send("INDEX");
// });
// const port = 8888;

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`); //ES6
//     // console.log("Server started on port" + port);
// });

const express = require('express');
const mongoose = require('mongoose');
// const router = express.Router();

require('../models/Movies');
const Movie = mongoose.model('movies');


app.get('/', (req, res) => {
    Movie.find()
        .sort({
            title: 'asc'
        })
        .then(movies => {
            res.render('movies/index', {
                movies: movies
            });
        });
});