import { Link } from "react-router";
import { posts } from "../data/posts";

export default function BlogIndex() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Blog</h1>

      <ul style={{ marginTop: 20 }}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <br />
      <Link to="/">← Back Home</Link>
    </main>
  );
}