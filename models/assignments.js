const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  school: { type: String, required: true },
  teacher: { type: String, required: true },
  course: { type: String, required: true },
  title: { type: String, required: true },
  start: { type: Date, required: false },
  end: { type: Date, required: true }
});

const Assignments = mongoose.model("Assignments", assignmentSchema);

module.exports = Assignments;