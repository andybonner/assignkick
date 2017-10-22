const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  school: { type: String, required: true },
  teacher: { type: String, required: true },
  course: { type: String, required: true },
  assignment: { type: String, required: true },
  deadline: { type: Date(), required: true }
});

userSchema.plugin(passportLocalMongoose);

const Assignments = mongoose.model("Assignments", assignmentSchema);

module.exports = Assignments;
