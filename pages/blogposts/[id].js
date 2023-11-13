import { useRouter } from "next/router";

export default function BlogPostsDetails() {
  const router = new useRouter();

  const { id } = router.query;

  return <></>;
}
