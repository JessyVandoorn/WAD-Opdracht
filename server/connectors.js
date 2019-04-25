const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
      console.log("Succesfully connected to db");
    },
    err => {
      console.log(err);
    });

const Diveschema = mongoose.Schema({
    datum: String,
    locatie: String,
    temperatuur: Number,
    diepte: Number,
    buddy: String,
    luchtStart: Number,
    luchtEind: Number,
});

const UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, required:true, index:{unique: true}}
});

const Dive = mongoose.model("dive", Diveschema);
const User = mongoose.model("user", UserSchema);

module.exports = { Dive, User };