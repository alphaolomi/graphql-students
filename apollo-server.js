const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema")
const resolvers = require("./resolvers");


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      "editor.theme": "dark",
    },
  },
});

module.exports = apolloServer;
