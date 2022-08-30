import express, { Router } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import swaggerDocuments from "./docs/swagger.json" assert {type: "json"};
import { MongoDbConnection } from "./database/repository/mongo/connection/connect.js";
import { makeCharacterFactory } from "./factories/character.js";
import { makeUserFactory } from "./factories/user.js";
import { makeAuthFactory } from "./factories/auth.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);
const auth = makeAuthFactory(router);

app.use(express.json());
app.use(cors());
app.use("/character", character.route());
app.use("/users", user.route());
app.use("/auth", auth.route());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocuments));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});
