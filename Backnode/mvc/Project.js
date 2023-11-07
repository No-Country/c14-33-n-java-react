import mongoose from "mongoose"

const projectsSchema = mongoose.Schema(
  {
    user: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    deliveryDate: { type: Date, default: Date.now() },
    client: { type: String, trim: true, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" },]
  },
  {
    timestamps: true
  }
)

const Project = mongoose.model("Project", projectsSchema)
export default Project