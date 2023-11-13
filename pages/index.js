import useSWR from "swr";
import Link from "next/link";

export default function HomePage() {
  const { data: blogPosts, isLoading } = useSWR("/api/blogposts");
  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  return (
    <div>
      <h1>Hello Next!</h1>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost._id}>
            <h2>{blogPost.title}</h2>
            <p>Date: {blogPost.date}</p>
            <p>Author Name: {blogPost.authorName}</p>
            {/* <p>Blog Post: {blogPost.text}</p> */}
            <Link href={`/blogposts/${blogPost._id}`}> Blog post text</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
