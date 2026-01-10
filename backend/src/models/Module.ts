import { Schema, model } from "mongoose";

export const Module = model(
  "Module",
  new Schema({
    title: String,
    order: Number
  })
);
