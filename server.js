const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require('path');

const app = express();
app.use(cors(), bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

// const db = require("./db");
// const fs = require("fs");
// const typeDefs = fs.readFileSync("./schema/schema.graphql", {encoding: "utf-8"});
// const resolvers = require("./resolvers");
//
// //GRaphQL
// const {makeExecutableSchema} = require("graphql-tools");
// const schema = makeExecutableSchema({typeDefs, resolvers});
//
//
// const {graphiqlExpress, graphqlExpress} = require("apollo-server-express");
//
// app.use("/graphql", graphqlExpress({schema}));
// app.use("/graphiql", graphiqlExpress({endpointURL: "/graphql"}));

const port = process.env.PORT || 9001;
app.listen(port, () => console.info(`Server started on port ${port}`));
