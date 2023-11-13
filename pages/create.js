import { useRouter } from "next/router";
import useSWR from "swr";

export default function CreatePost() {
  const { mutate } = useSWR("api/blogposts");
  const router = useRouter();

  async function addPost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPost = {
      title: data.titleInput,
      authorName: "Hansi",
      //   date: { type: Date, default: Date.now },
      text: data.textInput,
    };

    const response = await fetch("api/blogposts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    mutate();
    router.push("/");
  }
  return (
    <>
      <h1>New Blog Post</h1>
      <form onSubmit={addPost}>
        <div>
          <label htmlFor="titleInput">Title</label>
          <input id="titleInput" name="titleInput" type="text"></input>
        </div>
        <div>
          <label htmlFor="textInput">Your post</label>
          <textarea id="textInput" name="textInput"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
