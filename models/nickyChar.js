const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create Schema and Model
const NickyCharSchema = new Schema({
  name: String,
  age: Number
});

const NickyChar = mongoose.model("nickychar", NickyCharSchema);

module.exports = NickyChar;
