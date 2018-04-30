const mongoose = require("mongoose");

const DiveSchema = mongoose.Schema(
    {
        datum: String,
        locatie: String,
        buddy: String,
        temperatuur: Number,
        diepte: Number,
        luchtStart: Number,
        luchtEind: Number
    }
);

module.exports = mongoose.model("Dive", DiveSchema);