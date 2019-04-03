var express = require('express');
var router = express.Router();
const movies = require('../models/moviemodel');

router.get('/api/movies', (req, res) => {
    movies
        .find()
        .then(data => {
            res.send(data)
        })
});

router.post('/api/movies', (req, res) => {

    movies
        .create(req.body)
        .then((elem) => {
            console.log(elem)
            res.send(elem)
        })
});

router.get('/api/movies/:movieId', (req, res) => {
    movies
        .findById(req.params.movieId)
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err));
});

router.put('/api/movies/:movieId', (req, res) => {
    movies
        .findByIdAndUpdate(req.params.movieId, req.body, {
            new: true
        })
        .then(data => {

            res.send(data)
        })
        .catch(err => res.status(400).send('data not updated'));
});

router.delete('/api/movies/:movieId', (req, res) => {
    movies
        .findOneAndDelete(req.params.movieId, req.body)
        .then(data => {

            res.send(data)
        })
        .catch(err => res.status(400).send('data not delete'));
});

module.exports = router;