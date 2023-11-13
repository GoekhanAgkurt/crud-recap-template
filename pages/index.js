import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  const { data: blogPosts, isLoading } = useSWR("/api/blogposts");
  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  return (
    <div>
      <h1>Cool BlogPOSsSsT App</h1>
      <Link href="/create">Create blog post</Link>
      <ul>
        {blogPosts.map((blogPost) => (
          <StyledListPost key={blogPost._id}>
            <h2>{blogPost.title}</h2>
            <p>Date: {blogPost.date}</p>
            <p>Author Name: {blogPost.authorName}</p>
            {/* <p>Blog Post: {blogPost.text}</p> */}
            <Link href={`/blogposts/${blogPost._id}`}> Blog post text</Link>
          </StyledListPost>
        ))}
      </ul>
    </div>
  );
}

const StyledListPost = styled.li`
  background-color: grey;
  color: white;
  padding: 20px;
  margin: 10px;
  width: 90%;
  border-radius: 10px;
`;
