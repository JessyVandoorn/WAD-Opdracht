const {Dive} = require("./connectors");

module.exports = {
    Query: {
        allDives(){
            return Dive.find();
        },
        dive(_, args){
            return Dive.findById(args._id);
        }
    },
    Mutation: {
        addDive(_, args) {
            return new Dive(args).save();
        }
    }
};