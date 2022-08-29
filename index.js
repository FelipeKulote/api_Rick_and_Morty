import express from "express";
import cors from "cors";

import{ MongoDbConnection } from "./database/repository/mongo/connection/connect.js"
import { makeCharacterFactory } from "./factories/character.js"
import { makeUserFactory } from "./factories/user.js"

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);

app.use(express.json());
app.use(cors);

app.use("/users", user.route());
app.use("/character", character.route());

app.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000")
});