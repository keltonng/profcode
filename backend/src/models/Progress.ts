import { Schema, model } from "mongoose";

export const Progress = model(
  "Progress",
  new Schema({
    userId: String,
    videoId: String,
    watched: Boolean
  })
);
