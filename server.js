const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const db = require("./db");

const app = express();
app.use(cors(), bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const fs = require("fs");
const typeDefs = fs.readFileSync("./schema.graphql", {encoding: "utf-8"});
const resolvers = require("./resolvers");

//GRaphQL
const {makeExecutableSchema} = require("graphql-tools");
const schema = makeExecutableSchema({typeDefs, resolvers});


const {graphiqlExpress, graphqlExpress} = require("apollo-server-express");

app.use("/graphql", graphqlExpress({schema}));
app.use("/graphiql", graphiqlExpress({endpointURL: "/graphql"}));

const port = process.env.PORT || 9000;
app.listen(port, () => console.info(`Server started on port ${port}`));
