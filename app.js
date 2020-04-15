const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

const apolloServer = require("./apollo-server");
const indexRouter = require("./routes/index");

const app = express();

app.use(cors(), express.json(), logger("dev"));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", indexRouter);

apolloServer.applyMiddleware({ app });

module.exports = app;
