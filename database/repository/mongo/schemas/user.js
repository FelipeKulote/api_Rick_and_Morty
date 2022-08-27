import { model, Schema } from "mongoose";
import { character } from "./character.js";

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  characters: { type: [character], required: true },
});

export const user = model("User", userSchema);
