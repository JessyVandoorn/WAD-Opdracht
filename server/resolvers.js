const {Dive, User} = require("./connectors");
require("dotenv").config();
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");

const getAuthenticatedUser = async context => {
  const user = await context.user;
  if (!user) {
    return Promise.reject("UnauthorizedError");
  }
  return user;
};

const validateValue = value => {
  if (isNaN(Date.parse(value)))
    throw new GraphQLError(`Query error: not a valid date`, [value]);
};

module.exports = {
    Query: {
        allDives(_, args){
          console.log(args.user);
            return Dive.find(args);
        },
        allUsers() {
          return User.find();
        },
        dive(_, args){
            return Dive.findById(args._id);
        },
        user(_, args) {
          return User.findOne({
            authid: args.authid
          });
        }
    },
    Mutation: {
        addDive(_, args, context) {
          return getAuthenticatedUser(context).then(user => {
            args.user = user.id;
            console.log(args);
            return new Dive(args).save();
          });
        },
        
          deleteDive(_, args) {
            const { _id } = args;
            return Dive.findByIdAndRemove({ _id });
          },
          register: (_, args) => {
            return User.create(args);
          },
    },
    Dive: {
      user: dive => {
        return User.findById(dive.user);
      }
    },
    User: {
        dives: user => {
          return Dive.find({ user: user.dive  });
        }
      },
      Date: new GraphQLScalarType({
        name: "Date",
        description: "Date type",
        parseValue(value) {
          // value comes from the client, in variables
          validateValue(value);
          return new Date(value); // sent to resolvers
        },
        parseLiteral(ast) {
          // value comes from the client, inlined in the query
          if (ast.kind !== Kind.STRING) {
            throw new GraphQLError(
              `Query error: Can only parse dates strings, got a: ${ast.kind}`,
              [ast]
            );
          }
          validateValue(ast.value);
          return new Date(ast.value); // sent to resolvers
        },
        serialize(value) {
          // value comes from resolvers
          return value.toISOString(); // sent to the client
        }
      })
};