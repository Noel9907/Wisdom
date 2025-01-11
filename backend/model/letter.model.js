import mongoose from "mongoose";

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  letter: {
    type: String,
    require: true,
  },
});

const letters = new mongoose.model("Letters", mageSchema);
export default letters;
