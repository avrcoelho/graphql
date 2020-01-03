import "dotenv/config";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import schema from "./schema";

// cria o servidor
const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === "development"
});
// playground: é tipo o insominia para testar o grapgql

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default server;
