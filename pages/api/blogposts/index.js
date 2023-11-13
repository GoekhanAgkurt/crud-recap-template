import dbConnect from "@/db/connect";
import BlogPost from "@/db/models/Blogpost";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const blogPosts = await BlogPost.find();

      return response.status(200).json(blogPosts);
    } catch (error) {
      console.error(error.message);
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
