const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import schemas
const schMovieDetails = require("./schemas/movies/schMovDetails.js");
const schMovNowPlaying = require("./schemas/movies/schMovNowPlaying.js");
const schMovPopular = require("./schemas/movies/schMovPopular.js");
const schMovFetchImages = require("./schemas/movies/schMovFetchImages.js");
const schMovCast = require("./schemas/movies/schMovCast.js");

// Import resolvers
const resMovieDetails = require("./resolvers/movies/resMovDetails.js");
const resMovNowPlaying = require("./resolvers/movies/resMovNowPlaying.js");
const resMovPopular = require("./resolvers/movies/resMovPopular.js");
const resMovUpcoming = require("./resolvers/movies/resMovUpcoming.js");
const resMovTopRated = require("./resolvers/movies/resMovTopRated.js");
const resMovFetchImages = require("./resolvers/movies/resMovFetchImages.js");
const resMovCast = require("./resolvers/movies/resMovCast.js");

// Merge schemas and resolvers
const typeDefs = mergeTypeDefs([
  schMovNowPlaying,
  schMovieDetails,
  schMovPopular,
  schMovFetchImages,
  schMovCast,
]);
const resolvers = mergeResolvers([
  resMovNowPlaying,
  resMovieDetails,
  resMovPopular,
  resMovUpcoming,
  resMovTopRated,
  resMovFetchImages,
  resMovCast,
]);

// server actions
async function startServer() {
  const app = express();

  // Create Apollo Server with combined schema and resolvers
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(bodyParser.json());
  app.use(cors());

  // Start Apollo server
  await server.start();
  app.use("/graphql", expressMiddleware(server));

  // Check if the server is sending messages properly
  app.get("/ping", (req, res) => res.send("Pong"));

  app.get("/", (req, res) => res.send("Server Running"));


  // Start server @ port 3001 or the defined port in environment variables
  const port = process.env.PORT || 3002;
  app.listen(port, () =>
    console.log(
      `Server started at port ${port}. Visit http://localhost:3001/graphql`
    )
  );
}

startServer();
