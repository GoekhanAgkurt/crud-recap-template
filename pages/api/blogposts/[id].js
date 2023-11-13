import dbConnect from "@/db/connect";
import BlogPost from "@/db/models/Blogpost";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const blogpost = await BlogPost.findById(id);
      if (!blogpost) {
        return response.status(404).json({ status: "BlogPost Not Found" });
      }
      console.log("BlogPost in api: ");
      return response.status(200).json(blogpost);
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "Internal Server Error" });
    }
  } else if (request.method === "DELETE") {
    try {
      await BlogPost.findByIdAndDelete(id);
      response.status(200).json({ status: `Post ${id} successfully deleted.` });
    } catch (error) {
      response.status(500).json({ status: "Internal Server Error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
