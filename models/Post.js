import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

export default mongoose.model("Post", PostSchema)



