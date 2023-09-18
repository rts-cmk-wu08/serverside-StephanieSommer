import Image from "next/image";
import Link from "next/link";
import blog from "public/blog.jpg";

const getPosts = async () => {
  const result = await fetch(`https://swanky-api.onrender.com/posts`, {
    next: { revalidate: 0 },
  });
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(result)
  return result.json();
};

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <main>
      <div>
        <Image src={blog} className="relative h-96" />
        <h2 className="absolute top-1/4 text-white left-[650px] text-7xl">Blog</h2>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* <Image src={`/blog-${index}.jpg`} /> */}
            <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            <h3>{post.subtitle}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
