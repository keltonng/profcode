import { Schema, model } from "mongoose";

export const User = model(
  "User",
  new Schema({
    email: String,
    password: String,
    plan: { type: String, default: "free" }
  })
);
