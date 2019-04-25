const { GraphQLServer } =  require("graphql-yoga");

const typeDefs = require("./schema.gql");
const resolvers = require("./resolvers");

const { User, mongoose } = require("./connectors");

const firebaseAdmin = require("firebase-admin");

require("dotenv").config();

const env = process.env.NODE_ENV || "dev";
console.log(env);

const context = req => ({
  req: req.request
});

const getUserFromToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next();
  }
  try {
    const decodedToken = await firebaseAdmin
      .auth()
      .verifyIdToken(req.headers.authorization);

    req.user = await User.findOne({ authid: decodedToken.uid });
    next();
  } catch (error) {
    console.log("fout", error.message);
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    user: req.request.user || Promise.resolve(null)
  })
});

let serviceAccount;
if (env == "dev") {
  serviceAccount = require("./" + process.env.FIREBASE_SERVICE_FILE);
} else {
  const bufferkey =  Buffer.from(process.env.FIREBASE_CONFIG, 'base64');
  serviceAccount = JSON.parse(bufferkey);
}

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_PROJECT_URL
});

const options = {
  endpoint: "/graphql"
};
server.express.use(getUserFromToken);

server.start(options, () =>
  console.log("Server is running on http://localhost:4000")
);