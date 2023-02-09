import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>the blogPage</h1>
    </div>
  );
};

export default BlogPostPage;
