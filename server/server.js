const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cors = require ("cors");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const uploadImage = require("./uploadImage");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(cors());
app.use(express.urlencoded({ extended: false }, {limit: "25mb"}));
app.use(express.json({limit: "25mb"}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// cloudinary upload image
app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
  .then((url) => res.send(url))
  .catch((err)=> res.status(500).send(err));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

