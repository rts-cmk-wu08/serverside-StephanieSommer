import Link from "next/link";

const getPosts = async () => {
  const result = await fetch("https://swanky-api.onrender.com/posts");
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            <h3>{post.subtitle}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
