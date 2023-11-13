import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function BlogPostsDetails() {
  const router = new useRouter();

  const { id } = router.query;
  const { data: blogPost, isLoading, error } = useSWR(`/api/blogposts/${id}`);
  if (isLoading || error) return <h2>Loading...</h2>;

  async function deletePost() {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
    }
    router.push("/");
  }

  console.log("BlogPost: ", blogPost);
  return (
    <>
      <h2>Details to: {blogPost.title}</h2>
      <p>Date: {blogPost.date}</p>
      <p>Author Name: {blogPost.authorName}</p>
      <p>Blog Post: {blogPost.text}</p>
      <button type="button" onClick={deletePost}>
        Delete
      </button>
      <Link href="/">Back to all Blog posts</Link>
    </>
  );
}
