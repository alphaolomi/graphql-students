const fs = require("fs");
const typeDefs = fs.readFileSync("./schema/schema.graphql", { encoding: "utf-8" });
module.exports  = typeDefs;