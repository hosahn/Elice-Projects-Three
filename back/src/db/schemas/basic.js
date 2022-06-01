import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const BasicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const BasicModel = model("Basic", BasicSchema);
