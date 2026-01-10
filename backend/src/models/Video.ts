import { Schema, model } from "mongoose";

export const Video = model(
  "Video",
  new Schema({
    title: String,
    url: String,
    moduleId: Schema.Types.ObjectId,
    order: Number,
    premium: { type: Boolean, default: false }
  })
);
