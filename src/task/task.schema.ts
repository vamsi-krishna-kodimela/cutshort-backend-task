import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: [true, "Title is required."] },
  description: { type: String },
  isCompleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Task = model("Task", taskSchema);

export default Task;
