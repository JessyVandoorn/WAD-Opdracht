const mongoose = require("mongoose");

const DiveSchema = mongoose.Schema(
    {
        Datum: String,
        Locatie: String,
        Diepte: Number,
        Temperatuur: Number,
        Buddy: String,
        luchtStart: Number,
        luchtEind: Number
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Dive", DiveSchema);