import { useParams, Link } from "react-router";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Post not found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <br />
      <Link to="/blog">← Back to Blog</Link>
    </main>
  );
}