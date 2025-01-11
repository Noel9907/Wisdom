import mongoose from "mongoose";

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  letter: {
    type: String,
    required: true,
    maxlength: 5000,
  },
});

const Letter = mongoose.model("Letter", mageSchema);
export default Letter;
