const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
app.use(cors(), bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = fs.readFileSync("./schema/schema.graphql", { encoding: "utf-8" });
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      "editor.theme": "dark",
    },
  },
});
server.applyMiddleware({ app });

const PORT = process.env.PORT || 9001;

app.listen({ port: PORT }, () => console.info(`🚀🚀🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
