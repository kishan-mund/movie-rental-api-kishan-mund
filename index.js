const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const moviesRoute = require('./routes/moviesRoute');



const port = 8888;
mongoose.connect('mongodb://localhost/movierental', {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));



app.use('/', moviesRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`); //ES6
    // console.log("Server started on port" + port);
});