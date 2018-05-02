const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/jessy-vandoorn-duikerslog");

const Diveschema = mongoose.Schema({
    datum: String,
    locatie: String,
    temperatuur: Number,
    diepte: Number,
    buddy: String,
    luchtStart: Number,
    luchtEind: Number,
});


const Dive = mongoose.model("dive", Diveschema);

module.exports = { Dive };