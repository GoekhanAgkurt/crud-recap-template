import mongoose from "mongoose";

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  authorName: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  text: { type: String, required: true },
});

// blogPostSchema.set("timestamps", true);

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
