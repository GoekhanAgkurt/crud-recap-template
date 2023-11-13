import useSWR from "swr";

export default function HomePage() {
  const { data: blogPosts, isLoading } = useSWR("/api/blogposts");
  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  console.log(blogPosts);

  return (
    <div>
      <h1>Hello Next!</h1>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost._id}>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.text}</p>
            <p>{blogPost.authorName}</p>
            <p> {blogPost.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
