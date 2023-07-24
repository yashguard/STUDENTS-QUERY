const { default: mongoose } = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  gender: String,
  class: String,
  section: String,
  maths: Number,
  science: Number,
  english: Number,
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
