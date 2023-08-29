const path = require("path");
const express = require("express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const { graphqlHTTP } = require("express-graphql");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray,
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Running Graphql server");
});
