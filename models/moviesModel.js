var mongoose = require('mongoose');
var schema = mongoose.Schema;

var movies = new schema({
    title: String,
    genre: String,
    numberInStock: Number,
    dailyRentalRate: Number

});

module.exports = mongoose.model("movies", movies);