const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { dburl } = require("./config/");

mongoose.Promise = global.Promise;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Succesfully connected to db");
  })
  .catch(err => {
    console.log("Kan niet connecten");
    process.exit();
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
    email: {type: String, required:true, index:{unique: true}},
    passwordHash: {type: String, required: true}
});

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password").set(function(value) {
    this.passwordHash = bcrypt.hashSync(value, 12);
  });

const Dive = mongoose.model("dive", Diveschema);
const User = mongoose.model("user", UserSchema);

module.exports = { Dive, User };