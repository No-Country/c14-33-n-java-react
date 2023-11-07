import mongoose from "mongoose"

const taskSchema = mongoose.Schema(
  {
    user: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    state: { type: Boolean, default: false, },
    deliveryDate: { type: Date, required: true, default: Date.now() },
    priority: { type: String, required: true, enum: ["Baja", "Media", "Alta"] },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    complete: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
  },
  {
    timestamps: true
  }
)

const Task = mongoose.model("Task", taskSchema)
export default Task