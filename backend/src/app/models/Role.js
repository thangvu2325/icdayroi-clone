import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Role = new Schema({
  name: String,
});

export default mongoose.model("Role", Role);
